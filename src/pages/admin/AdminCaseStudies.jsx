import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminCaseStudies() {
  const [studies, setStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    client: '',
    category: '',
    timeline: '',
    problem: '',
    process: [''],
    tools: [''],
    results: [''],
    image: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'caseStudies'))
        const studiesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setStudies(studiesData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching case studies:', error)
        setMessage({ type: 'error', text: 'Failed to fetch case studies' })
        setLoading(false)
      }
    }
    fetchStudies()
  }, [])

  const fetchStudies = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'caseStudies'))
      const studiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setStudies(studiesData)
    } catch (error) {
      console.error('Error fetching case studies:', error)
    }
  }

  const handleEdit = (study) => {
    setEditingId(study.id)
    setFormData({
      id: study.id,
      title: study.title,
      client: study.client,
      category: study.category,
      timeline: study.timeline,
      problem: study.problem,
      process: study.process || [''],
      tools: study.tools || [''],
      results: study.results || [''],
      image: study.image || ''
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      title: '',
      client: '',
      category: '',
      timeline: '',
      problem: '',
      process: [''],
      tools: [''],
      results: [''],
      image: ''
    })
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.title || !formData.problem) {
        setMessage({ type: 'error', text: 'ID, title, and problem are required' })
        return
      }

      const studyData = {
        title: formData.title,
        client: formData.client,
        category: formData.category,
        timeline: formData.timeline,
        problem: formData.problem,
        process: formData.process.filter(p => p.trim() !== ''),
        tools: formData.tools.filter(t => t.trim() !== ''),
        results: formData.results.filter(r => r.trim() !== ''),
        image: formData.image,
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        studyData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'caseStudies', formData.id), studyData)
      
      setMessage({ type: 'success', text: 'Case study saved successfully!' })
      setEditingId(null)
      fetchStudies()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving case study:', error)
      setMessage({ type: 'error', text: 'Failed to save case study' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this case study?')) return

    try {
      await deleteDoc(doc(db, 'caseStudies', id))
      setMessage({ type: 'success', text: 'Case study deleted successfully!' })
      fetchStudies()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting case study:', error)
      setMessage({ type: 'error', text: 'Failed to delete case study' })
    }
  }

  const addProcess = () => {
    setFormData({ ...formData, process: [...formData.process, ''] })
  }

  const removeProcess = (index) => {
    const newProcess = formData.process.filter((_, i) => i !== index)
    setFormData({ ...formData, process: newProcess })
  }

  const updateProcess = (index, value) => {
    const newProcess = [...formData.process]
    newProcess[index] = value
    setFormData({ ...formData, process: newProcess })
  }

  const addTool = () => {
    setFormData({ ...formData, tools: [...formData.tools, ''] })
  }

  const removeTool = (index) => {
    const newTools = formData.tools.filter((_, i) => i !== index)
    setFormData({ ...formData, tools: newTools })
  }

  const updateTool = (index, value) => {
    const newTools = [...formData.tools]
    newTools[index] = value
    setFormData({ ...formData, tools: newTools })
  }

  const addResult = () => {
    setFormData({ ...formData, results: [...formData.results, ''] })
  }

  const removeResult = (index) => {
    const newResults = formData.results.filter((_, i) => i !== index)
    setFormData({ ...formData, results: newResults })
  }

  const updateResult = (index, value) => {
    const newResults = [...formData.results]
    newResults[index] = value
    setFormData({ ...formData, results: newResults })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Case Studies</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Case Study
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
            {editingId === 'new' ? 'Add New Case Study' : 'Edit Case Study'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Case Study ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="case-study-1"
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
                <label className="block text-sm font-medium mb-2">Client</label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  placeholder="6 weeks"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Problem</label>
              <textarea
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-24"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Process Steps</label>
              {formData.process.map((step, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => updateProcess(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Process step"
                  />
                  <button
                    onClick={() => removeProcess(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addProcess}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Process Step
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tools</label>
              {formData.tools.map((tool, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tool}
                    onChange={(e) => updateTool(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Tool name"
                  />
                  <button
                    onClick={() => removeTool(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addTool}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Tool
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Results</label>
              {formData.results.map((result, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={result}
                    onChange={(e) => updateResult(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Result or metric"
                  />
                  <button
                    onClick={() => removeResult(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addResult}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Result
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Case Study
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
        {studies.map((study) => (
          <div key={study.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-display text-sinar-gold-light">{study.title}</h3>
                <p className="text-sm text-gray-400">{study.client} • {study.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(study)}
                  className="px-3 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(study.id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{study.problem}</p>
            <p className="text-xs text-sinar-gold mb-2">Timeline: {study.timeline}</p>
            {study.tools && study.tools.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {study.tools.map((tool, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-gray-700 rounded text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            )}
            {study.results && study.results.length > 0 && (
              <p className="text-xs text-gray-400">
                {study.results.length} result{study.results.length > 1 ? 's' : ''}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
