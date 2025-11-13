import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    question: '',
    answer: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'faq'))
        const faqsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setFaqs(faqsData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
        setMessage({ type: 'error', text: 'Failed to fetch FAQs' })
        setLoading(false)
      }
    }
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'faq'))
      const faqsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setFaqs(faqsData)
    } catch (error) {
      console.error('Error fetching FAQs:', error)
    }
  }

  const handleEdit = (faq) => {
    setEditingId(faq.id)
    setFormData({
      id: faq.id,
      question: faq.question,
      answer: faq.answer
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      question: '',
      answer: ''
    })
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.question || !formData.answer) {
        setMessage({ type: 'error', text: 'All fields are required' })
        return
      }

      const faqData = {
        question: formData.question,
        answer: formData.answer,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        faqData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'faq', formData.id), faqData)
      
      setMessage({ type: 'success', text: 'FAQ saved successfully!' })
      setEditingId(null)
      fetchFAQs()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving FAQ:', error)
      setMessage({ type: 'error', text: 'Failed to save FAQ' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this FAQ?')) return

    try {
      await deleteDoc(doc(db, 'faq', id))
      setMessage({ type: 'success', text: 'FAQ deleted successfully!' })
      fetchFAQs()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting FAQ:', error)
      setMessage({ type: 'error', text: 'Failed to delete FAQ' })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage FAQ</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New FAQ
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
          {message.text}
        </div>
      )}

      {editingId ? (
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-display mb-4 text-sinar-gold-light">
            {editingId === 'new' ? 'Add New FAQ' : 'Edit FAQ'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">FAQ ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="faq-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Question</label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Answer</label>
              <textarea
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-32"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save FAQ
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-600 px-6 py-2 rounded-lg hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-display text-sinar-gold-light flex-1">{faq.question}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(faq)}
                  className="px-4 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="px-4 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
