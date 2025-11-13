import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminValues() {
  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    icon: '',
    description: '',
    principles: ['']
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'values'))
        const valuesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setValues(valuesData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching values:', error)
        setMessage({ type: 'error', text: 'Failed to fetch values' })
        setLoading(false)
      }
    }
    fetchValues()
  }, [])

  const fetchValues = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'values'))
      const valuesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setValues(valuesData)
    } catch (error) {
      console.error('Error fetching values:', error)
    }
  }

  const handleEdit = (value) => {
    setEditingId(value.id)
    setFormData({
      id: value.id,
      title: value.title,
      icon: value.icon || '',
      description: value.description,
      principles: value.principles || ['']
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      title: '',
      icon: '',
      description: '',
      principles: ['']
    })
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.title || !formData.description) {
        setMessage({ type: 'error', text: 'ID, title, and description are required' })
        return
      }

      const valueData = {
        title: formData.title,
        icon: formData.icon,
        description: formData.description,
        principles: formData.principles.filter(p => p.trim() !== ''),
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        valueData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'values', formData.id), valueData)
      
      setMessage({ type: 'success', text: 'Value saved successfully!' })
      setEditingId(null)
      fetchValues()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving value:', error)
      setMessage({ type: 'error', text: 'Failed to save value' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this value?')) return

    try {
      await deleteDoc(doc(db, 'values', id))
      setMessage({ type: 'success', text: 'Value deleted successfully!' })
      fetchValues()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting value:', error)
      setMessage({ type: 'error', text: 'Failed to delete value' })
    }
  }

  const addPrinciple = () => {
    setFormData({ ...formData, principles: [...formData.principles, ''] })
  }

  const removePrinciple = (index) => {
    const newPrinciples = formData.principles.filter((_, i) => i !== index)
    setFormData({ ...formData, principles: newPrinciples })
  }

  const updatePrinciple = (index, value) => {
    const newPrinciples = [...formData.principles]
    newPrinciples[index] = value
    setFormData({ ...formData, principles: newPrinciples })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Values & Ethics</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Value
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
            {editingId === 'new' ? 'Add New Value' : 'Edit Value'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Value ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="value-1"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
                <label className="block text-sm font-medium mb-2">Icon (emoji)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="🤝"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-32"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Key Principles</label>
              {formData.principles.map((principle, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={principle}
                    onChange={(e) => updatePrinciple(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Principle"
                  />
                  <button
                    onClick={() => removePrinciple(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addPrinciple}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Principle
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Value
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
        {values.map((value) => (
          <div key={value.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{value.icon}</div>
                <h3 className="text-xl font-display text-sinar-gold-light">{value.title}</h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(value)}
                  className="px-3 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(value.id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{value.description}</p>
            {value.principles && value.principles.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-400 mb-1">KEY PRINCIPLES:</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  {value.principles.map((principle, idx) => (
                    <li key={idx}>✓ {principle}</li>
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
