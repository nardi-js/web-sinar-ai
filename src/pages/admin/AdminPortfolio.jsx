import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminPortfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    technologies: [''],
    results: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'portfolio'))
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProjects(projectsData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setMessage({ type: 'error', text: 'Failed to fetch projects' })
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'))
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProjects(projectsData)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const handleEdit = (project) => {
    setEditingId(project.id)
    setFormData({
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description,
      technologies: project.technologies || [''],
      results: project.results || ''
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      title: '',
      category: '',
      description: '',
      technologies: [''],
      results: ''
    })
  }

  const handleCancel = () => {
    setEditingId(null)
    setFormData({
      id: '',
      title: '',
      category: '',
      description: '',
      technologies: [''],
      results: ''
    })
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.title || !formData.description) {
        setMessage({ type: 'error', text: 'ID, title, and description are required' })
        return
      }

      const projectData = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        technologies: formData.technologies.filter(t => t.trim() !== ''),
        results: formData.results,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        projectData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'portfolio', formData.id), projectData)
      
      setMessage({ type: 'success', text: 'Project saved successfully!' })
      setEditingId(null)
      fetchProjects()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving project:', error)
      setMessage({ type: 'error', text: 'Failed to save project' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return

    try {
      await deleteDoc(doc(db, 'portfolio', id))
      setMessage({ type: 'success', text: 'Project deleted successfully!' })
      fetchProjects()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting project:', error)
      setMessage({ type: 'error', text: 'Failed to delete project' })
    }
  }

  const addTechnology = () => {
    setFormData({ ...formData, technologies: [...formData.technologies, ''] })
  }

  const removeTechnology = (index) => {
    const newTechnologies = formData.technologies.filter((_, i) => i !== index)
    setFormData({ ...formData, technologies: newTechnologies })
  }

  const updateTechnology = (index, value) => {
    const newTechnologies = [...formData.technologies]
    newTechnologies[index] = value
    setFormData({ ...formData, technologies: newTechnologies })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Portfolio</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Project
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
            {editingId === 'new' ? 'Add New Project' : 'Edit Project'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Project ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="project-1"
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
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="AI Development"
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
              <label className="block text-sm font-medium mb-2">Technologies</label>
              {formData.technologies.map((tech, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => updateTechnology(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Technology name"
                  />
                  <button
                    onClick={() => removeTechnology(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addTechnology}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Technology
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Results</label>
              <textarea
                value={formData.results}
                onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-20"
                placeholder="Project outcomes and metrics"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Project
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
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-display text-sinar-gold-light">{project.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-4 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-4 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-sm text-sinar-gold mb-2">{project.category}</p>
            <p className="text-gray-300 mb-3">{project.description}</p>
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.results && (
              <p className="text-sm text-gray-400 italic">{project.results}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
