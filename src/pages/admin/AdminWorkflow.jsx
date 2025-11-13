import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminWorkflow() {
  const [steps, setSteps] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    number: 1,
    title: '',
    description: '',
    icon: '',
    color: 'from-blue-500 to-purple-500'
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  const colorGradients = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-red-500',
    'from-orange-500 to-yellow-500',
    'from-green-500 to-teal-500',
    'from-teal-500 to-cyan-500'
  ]

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'workflow'))
        const stepsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setSteps(stepsData.sort((a, b) => a.number - b.number))
        setLoading(false)
      } catch (error) {
        console.error('Error fetching workflow:', error)
        setMessage({ type: 'error', text: 'Failed to fetch workflow steps' })
        setLoading(false)
      }
    }
    fetchSteps()
  }, [])

  const fetchSteps = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'workflow'))
      const stepsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setSteps(stepsData.sort((a, b) => a.number - b.number))
    } catch (error) {
      console.error('Error fetching workflow:', error)
    }
  }

  const handleEdit = (step) => {
    setEditingId(step.id)
    setFormData({
      id: step.id,
      number: step.number,
      title: step.title,
      description: step.description,
      icon: step.icon || '',
      color: step.color || 'from-blue-500 to-purple-500'
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      number: steps.length + 1,
      title: '',
      description: '',
      icon: '',
      color: 'from-blue-500 to-purple-500'
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

      const stepData = {
        number: parseInt(formData.number),
        title: formData.title,
        description: formData.description,
        icon: formData.icon,
        color: formData.color,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        stepData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'workflow', formData.id), stepData)
      
      setMessage({ type: 'success', text: 'Workflow step saved successfully!' })
      setEditingId(null)
      fetchSteps()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving workflow step:', error)
      setMessage({ type: 'error', text: 'Failed to save workflow step' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this workflow step?')) return

    try {
      await deleteDoc(doc(db, 'workflow', id))
      setMessage({ type: 'success', text: 'Workflow step deleted successfully!' })
      fetchSteps()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting workflow step:', error)
      setMessage({ type: 'error', text: 'Failed to delete workflow step' })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Workflow</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Step
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
            {editingId === 'new' ? 'Add New Step' : 'Edit Step'}
          </h2>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Step ID</label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  disabled={editingId !== 'new'}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="step-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Step Number</label>
                <input
                  type="number"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>
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
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-24"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Icon (emoji)</label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="🎯"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Color Gradient</label>
              <select
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
              >
                {colorGradients.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Step
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
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-sinar-gold">STEP {step.number}</span>
                    <h3 className="text-xl font-display text-sinar-gold-light">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                  <p className="text-xs text-gray-500 mt-2">Gradient: {step.color}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(step)}
                  className="px-4 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(step.id)}
                  className="px-4 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
