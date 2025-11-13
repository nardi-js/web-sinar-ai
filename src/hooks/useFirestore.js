import { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Hook to fetch a single document from Firestore
 * @param {string} collectionName - Collection name
 * @param {string} documentId - Document ID
 */
export const useFirestoreDoc = (collectionName, documentId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError('Document not found');
        }
      } catch (err) {
        console.error('Error fetching document:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (collectionName && documentId) {
      fetchData();
    }
  }, [collectionName, documentId]);

  return { data, loading, error };
};

/**
 * Hook to fetch a collection from Firestore
 * @param {string} collectionName - Collection name
 * @param {string} orderByField - Field to order by (optional)
 */
export const useFirestoreCollection = (collectionName, orderByField = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let q = collection(db, collectionName);
        
        if (orderByField) {
          q = query(q, orderBy(orderByField));
        }
        
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setData(items);
      } catch (err) {
        console.error('Error fetching collection:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (collectionName) {
      fetchData();
    }
  }, [collectionName, orderByField]);

  return { data, loading, error };
};
