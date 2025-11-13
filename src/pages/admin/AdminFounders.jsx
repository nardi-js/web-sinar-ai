import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminFounders() {
  const [founders, setFounders] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    role: '',
    bio: '',
    values: [''],
    icon: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'founders'))
        const foundersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setFounders(foundersData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching founders:', error)
        setMessage({ type: 'error', text: 'Failed to fetch founders' })
        setLoading(false)
      }
    }
    fetchFounders()
  }, [])

  const fetchFounders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'founders'))
      const foundersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setFounders(foundersData)
    } catch (error) {
      console.error('Error fetching founders:', error)
    }
  }

  const handleEdit = (founder) => {
    setEditingId(founder.id)
    setFormData({
      id: founder.id,
      name: founder.name,
      role: founder.role,
      bio: founder.bio,
      values: founder.values || [''],
      icon: founder.icon || ''
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      name: '',
      role: '',
      bio: '',
      values: [''],
      icon: ''
    })
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.name || !formData.bio) {
        setMessage({ type: 'error', text: 'ID, name, and bio are required' })
        return
      }

      const founderData = {
        name: formData.name,
        role: formData.role,
        bio: formData.bio,
        values: formData.values.filter(v => v.trim() !== ''),
        icon: formData.icon,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        founderData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'founders', formData.id), founderData)
      
      setMessage({ type: 'success', text: 'Founder saved successfully!' })
      setEditingId(null)
      fetchFounders()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving founder:', error)
      setMessage({ type: 'error', text: 'Failed to save founder' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this founder?')) return

    try {
      await deleteDoc(doc(db, 'founders', id))
      setMessage({ type: 'success', text: 'Founder deleted successfully!' })
      fetchFounders()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting founder:', error)
      setMessage({ type: 'error', text: 'Failed to delete founder' })
    }
  }

  const addValue = () => {
    setFormData({ ...formData, values: [...formData.values, ''] })
  }

  const removeValue = (index) => {
    const newValues = formData.values.filter((_, i) => i !== index)
    setFormData({ ...formData, values: newValues })
  }

  const updateValue = (index, value) => {
    const newValues = [...formData.values]
    newValues[index] = value
    setFormData({ ...formData, values: newValues })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Founders</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Founder
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
            {editingId === 'new' ? 'Add New Founder' : 'Edit Founder'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Founder ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="founder-1"
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
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Icon (emoji)</label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="👨‍💼"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-32"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Core Values</label>
              {formData.values.map((value, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => updateValue(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Value"
                  />
                  <button
                    onClick={() => removeValue(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addValue}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Value
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Founder
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
        {founders.map((founder) => (
          <div key={founder.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{founder.icon}</div>
                <div>
                  <h3 className="text-xl font-display text-sinar-gold-light">{founder.name}</h3>
                  <p className="text-sm text-gray-400">{founder.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(founder)}
                  className="px-3 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(founder.id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{founder.bio}</p>
            {founder.values && founder.values.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-400 mb-1">CORE VALUES:</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  {founder.values.map((value, idx) => (
                    <li key={idx}>• {value}</li>
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
