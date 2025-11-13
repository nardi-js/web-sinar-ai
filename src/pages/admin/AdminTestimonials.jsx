import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    role: '',
    company: '',
    content: '',
    avatar: '',
    rating: 5,
    date: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'))
        const testimonialsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setTestimonials(testimonialsData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
        setMessage({ type: 'error', text: 'Failed to fetch testimonials' })
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'testimonials'))
      const testimonialsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTestimonials(testimonialsData)
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    }
  }

  const handleEdit = (testimonial) => {
    setEditingId(testimonial.id)
    setFormData({
      id: testimonial.id,
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      content: testimonial.content,
      avatar: testimonial.avatar || '',
      rating: testimonial.rating || 5,
      date: testimonial.date || ''
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      name: '',
      role: '',
      company: '',
      content: '',
      avatar: '',
      rating: 5,
      date: new Date().toISOString().split('T')[0]
    })
  }

  const handleCancel = () => {
    setEditingId(null)
    setFormData({
      id: '',
      name: '',
      role: '',
      company: '',
      content: '',
      avatar: '',
      rating: 5,
      date: ''
    })
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.name || !formData.content) {
        setMessage({ type: 'error', text: 'ID, name, and content are required' })
        return
      }

      const testimonialData = {
        name: formData.name,
        role: formData.role,
        company: formData.company,
        content: formData.content,
        avatar: formData.avatar,
        rating: parseInt(formData.rating),
        date: formData.date,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        testimonialData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'testimonials', formData.id), testimonialData)
      
      setMessage({ type: 'success', text: 'Testimonial saved successfully!' })
      setEditingId(null)
      fetchTestimonials()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving testimonial:', error)
      setMessage({ type: 'error', text: 'Failed to save testimonial' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return

    try {
      await deleteDoc(doc(db, 'testimonials', id))
      setMessage({ type: 'success', text: 'Testimonial deleted successfully!' })
      fetchTestimonials()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting testimonial:', error)
      setMessage({ type: 'error', text: 'Failed to delete testimonial' })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Testimonials</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Testimonial
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
            {editingId === 'new' ? 'Add New Testimonial' : 'Edit Testimonial'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Testimonial ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="testimonial-1"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="CEO"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Avatar (emoji or URL)</label>
                <input
                  type="text"
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="👨‍💼"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-32"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Testimonial
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div className="text-3xl">{testimonial.avatar || '👤'}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="px-3 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <h3 className="font-display text-lg text-sinar-gold-light">{testimonial.name}</h3>
            <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
            <div className="flex text-sinar-gold text-sm my-2">
              {'⭐'.repeat(testimonial.rating)}
            </div>
            <p className="text-gray-300 text-sm italic">"{testimonial.content}"</p>
            {testimonial.date && (
              <p className="text-xs text-gray-500 mt-2">{testimonial.date}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
