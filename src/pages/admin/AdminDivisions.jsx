import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminDivisions() {
  const [divisions, setDivisions] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    icon: '',
    title: '',
    subtitle: '',
    description: '',
    colorScheme: 'blue',
    features: ['']
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  // Color scheme options for dropdown
  const colorSchemes = ['blue', 'purple', 'green', 'orange', 'gold']

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'divisions'))
        const divisionsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setDivisions(divisionsData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching divisions:', error)
        setMessage({ type: 'error', text: 'Failed to fetch divisions' })
        setLoading(false)
      }
    }
    fetchDivisions()
  }, [])

  const fetchDivisions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'divisions'))
      const divisionsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setDivisions(divisionsData)
    } catch (error) {
      console.error('Error fetching divisions:', error)
    }
  }

  const handleEdit = (division) => {
    setEditingId(division.id)
    setFormData({
      id: division.id,
      icon: division.icon,
      title: division.title,
      subtitle: division.subtitle || '',
      description: division.description,
      colorScheme: division.colorScheme || 'blue',
      features: division.features || ['']
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      icon: '',
      title: '',
      subtitle: '',
      description: '',
      colorScheme: 'blue',
      features: ['']
    })
  }

  const handleCancel = () => {
    setEditingId(null)
    setFormData({
      id: '',
      icon: '',
      title: '',
      subtitle: '',
      description: '',
      colorScheme: 'blue',
      features: ['']
    })
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.title || !formData.description) {
        setMessage({ type: 'error', text: 'ID, title, and description are required' })
        return
      }

      const divisionData = {
        icon: formData.icon,
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
        colorScheme: formData.colorScheme,
        features: formData.features.filter(f => f.trim() !== ''),
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        divisionData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'divisions', formData.id), divisionData)
      
      setMessage({ type: 'success', text: 'Division saved successfully!' })
      setEditingId(null)
      fetchDivisions()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving division:', error)
      setMessage({ type: 'error', text: 'Failed to save division' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this division?')) return

    try {
      await deleteDoc(doc(db, 'divisions', id))
      setMessage({ type: 'success', text: 'Division deleted successfully!' })
      fetchDivisions()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting division:', error)
      setMessage({ type: 'error', text: 'Failed to delete division' })
    }
  }

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] })
  }

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index)
    setFormData({ ...formData, features: newFeatures })
  }

  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData({ ...formData, features: newFeatures })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Divisions</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Division
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
            {editingId === 'new' ? 'Add New Division' : 'Edit Division'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Division ID (URL-friendly, e.g., 'ai-development')</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="ai-development"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Icon (emoji)</label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="🤖"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subtitle</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-24"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Color Scheme</label>
              <select
                value={formData.colorScheme}
                onChange={(e) => setFormData({ ...formData, colorScheme: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
              >
                {colorSchemes.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Features</label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Feature description"
                  />
                  <button
                    onClick={() => removeFeature(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addFeature}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Feature
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Division
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

      <div className="grid md:grid-cols-2 gap-6">
        {divisions.map((division) => (
          <div key={division.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{division.icon}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(division)}
                  className="px-4 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(division.id)}
                  className="px-4 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <h3 className="text-xl font-display mb-2 text-sinar-gold-light">{division.title}</h3>
            {division.subtitle && <p className="text-sm text-gray-400 mb-2">{division.subtitle}</p>}
            <p className="text-gray-300 mb-3">{division.description}</p>
            <div className="text-sm text-gray-400">
              <span className="font-semibold">Color:</span> {division.colorScheme}
            </div>
            {division.features && division.features.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-400 mb-1">Features:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {division.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
