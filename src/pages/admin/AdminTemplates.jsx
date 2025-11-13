import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminTemplates() {
  const [templates, setTemplates] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    category: '',
    price: '',
    features: [''],
    tech: [''],
    featured: false
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'templates'))
        const templatesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setTemplates(templatesData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching templates:', error)
        setMessage({ type: 'error', text: 'Failed to fetch templates' })
        setLoading(false)
      }
    }
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'templates'))
      const templatesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setTemplates(templatesData)
    } catch (error) {
      console.error('Error fetching templates:', error)
    }
  }

  const handleEdit = (template) => {
    setEditingId(template.id)
    setFormData({
      id: template.id,
      title: template.title,
      description: template.description,
      category: template.category,
      price: template.price,
      features: template.features || [''],
      tech: template.tech || [''],
      featured: template.featured || false
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      title: '',
      description: '',
      category: '',
      price: '',
      features: [''],
      tech: [''],
      featured: false
    })
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.title) {
        setMessage({ type: 'error', text: 'ID and title are required' })
        return
      }

      const templateData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        price: formData.price,
        features: formData.features.filter(f => f.trim() !== ''),
        tech: formData.tech.filter(t => t.trim() !== ''),
        featured: formData.featured,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        templateData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'templates', formData.id), templateData)
      
      setMessage({ type: 'success', text: 'Template saved successfully!' })
      setEditingId(null)
      fetchTemplates()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving template:', error)
      setMessage({ type: 'error', text: 'Failed to save template' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this template?')) return

    try {
      await deleteDoc(doc(db, 'templates', id))
      setMessage({ type: 'success', text: 'Template deleted successfully!' })
      fetchTemplates()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting template:', error)
      setMessage({ type: 'error', text: 'Failed to delete template' })
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

  const addTech = () => {
    setFormData({ ...formData, tech: [...formData.tech, ''] })
  }

  const removeTech = (index) => {
    const newTech = formData.tech.filter((_, i) => i !== index)
    setFormData({ ...formData, tech: newTech })
  }

  const updateTech = (index, value) => {
    const newTech = [...formData.tech]
    newTech[index] = value
    setFormData({ ...formData, tech: newTech })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Templates</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Template
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
          {message.text}
        </div>
      )}

      {editingId ? (
        <div className="bg-gray-800 p-6 rounded-lg mb-6 max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-display mb-4 text-sinar-gold-light">
            {editingId === 'new' ? 'Add New Template' : 'Edit Template'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Template ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="template-1"
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
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-24"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="Website, E-commerce, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="$2,999"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">Featured Template</span>
              </label>
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
                    placeholder="Feature"
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

            <div>
              <label className="block text-sm font-medium mb-2">Technologies</label>
              {formData.tech.map((tech, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => updateTech(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Technology"
                  />
                  <button
                    onClick={() => removeTech(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addTech}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Technology
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Template
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
        {templates.map((template) => (
          <div key={template.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-display text-sinar-gold-light">{template.title}</h3>
                <p className="text-xs text-gray-400">{template.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(template)}
                  className="px-3 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(template.id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            {template.featured && (
              <span className="inline-block px-2 py-0.5 bg-sinar-gold text-sinar-dark rounded text-xs mb-2">
                Featured
              </span>
            )}
            <p className="text-sm text-gray-300 mb-2">{template.description}</p>
            <p className="text-sinar-gold font-bold mb-2">{template.price}</p>
            {template.features && template.features.length > 0 && (
              <p className="text-xs text-gray-400">
                {template.features.length} feature{template.features.length > 1 ? 's' : ''}
              </p>
            )}
            {template.tech && template.tech.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {template.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-gray-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
