import { doc, setDoc, collection, writeBatch, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { initialData, collectionMetadata } from '../data/initialData';

/**
 * Initialize Firestore with all initial data
 * Run this once to populate your database
 */
export const initializeFirestore = async () => {
  console.log('🚀 Starting Firestore initialization...');
  
  try {
    const batch = writeBatch(db);
    let operationCount = 0;

    // Process each data type
    for (const [key, data] of Object.entries(initialData)) {
      const metadata = collectionMetadata[key];
      
      if (!metadata) {
        console.warn(`⚠️ No metadata found for ${key}, skipping...`);
        continue;
      }

      console.log(`📝 Processing ${key}...`);

      if (metadata.type === 'single') {
        // Single document in content collection
        const docRef = doc(db, metadata.collection, key);
        await setDoc(docRef, {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        console.log(`✅ ${key} saved successfully`);
        operationCount++;

      } else if (metadata.type === 'array') {
        // Multiple documents in their own collection
        for (const item of data) {
          // Ensure docId is always a string
          const docId = item.id 
            ? String(item.id) 
            : `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          const docRef = doc(db, metadata.collection, docId);
          batch.set(docRef, {
            ...item,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
          operationCount++;
        }
        console.log(`✅ ${data.length} ${key} items queued`);

      } else if (metadata.type === 'object') {
        // Object stored as single document
        const docRef = doc(db, metadata.collection, key);
        await setDoc(docRef, {
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        console.log(`✅ ${key} object saved successfully`);
        operationCount++;
      }

      // Commit batch every 400 operations (Firestore limit is 500)
      if (operationCount >= 400) {
        await batch.commit();
        console.log(`💾 Batch committed (${operationCount} operations)`);
        operationCount = 0;
      }
    }

    // Commit remaining operations
    if (operationCount > 0) {
      await batch.commit();
      console.log(`💾 Final batch committed (${operationCount} operations)`);
    }

    console.log('✨ Firestore initialization completed successfully!');
    console.log('📊 Summary:');
    console.log('  - Hero Section: ✅');
    console.log('  - About Section: ✅');
    console.log(`  - Divisions: ${initialData.divisions.length} items ✅`);
    console.log(`  - Portfolio: ${initialData.portfolio.length} items ✅`);
    console.log(`  - Testimonials: ${initialData.testimonials.length} items ✅`);
    console.log(`  - Workflow: ${initialData.workflow.length} steps ✅`);
    console.log(`  - FAQ: ${initialData.faq.length} items ✅`);
    console.log(`  - AI Employees: ${initialData.aiEmployees.length} items ✅`);
    console.log(`  - Case Studies: ${initialData.caseStudies.length} items ✅`);
    console.log(`  - Founders: ${initialData.founders.length} items ✅`);
    console.log('  - Tech Stack: ✅');
    console.log(`  - Templates: ${initialData.templates.length} items ✅`);
    console.log(`  - Values: ${initialData.values.length} items ✅`);
    console.log('  - Contact Info: ✅');
    
    return { success: true, message: 'All data initialized successfully!' };

  } catch (error) {
    console.error('❌ Error initializing Firestore:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Clear all data from Firestore (use with caution!)
 */
export const clearFirestore = async () => {
  console.log('⚠️ Clearing Firestore data...');
  // Implementation if needed
  console.warn('Clear function not implemented for safety. Delete manually from Firebase Console if needed.');
};

/**
 * Verify Firestore data
 */
export const verifyFirestoreData = async () => {
  console.log('🔍 Verifying Firestore data...');
  
  const results = {};
  
  for (const [key, metadata] of Object.entries(collectionMetadata)) {
    try {
      if (metadata.type === 'single') {
        const docRef = doc(db, metadata.collection, key);
        const docSnap = await getDoc(docRef);
        results[key] = docSnap.exists() ? '✅ Found' : '❌ Missing';
      } else if (metadata.type === 'array') {
        const querySnapshot = await getDocs(collection(db, metadata.collection));
        results[key] = `✅ ${querySnapshot.size} items`;
      }
    } catch (error) {
      results[key] = `❌ Error: ${error.message}`;
    }
  }
  
  console.log('📊 Verification Results:', results);
  return results;
};
