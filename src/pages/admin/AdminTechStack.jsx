import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminTechStack() {
  const [techStack, setTechStack] = useState({})
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [newCategory, setNewCategory] = useState('')
  const [newTool, setNewTool] = useState({})

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const docRef = doc(db, 'content', 'techStack')
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data()
          // Remove timestamps
          // eslint-disable-next-line no-unused-vars
          const { createdAt, updatedAt, ...stackData } = data
          setTechStack(stackData)
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching tech stack:', error)
        setMessage({ type: 'error', text: 'Failed to fetch tech stack' })
        setLoading(false)
      }
    }
    fetchTechStack()
  }, [])

  const handleSave = async () => {
    try {
      const docRef = doc(db, 'content', 'techStack')
      await setDoc(docRef, {
        ...techStack,
        updatedAt: new Date().toISOString()
      }, { merge: true })
      
      setMessage({ type: 'success', text: 'Tech stack saved successfully!' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving tech stack:', error)
      setMessage({ type: 'error', text: 'Failed to save tech stack' })
    }
  }

  const addCategory = () => {
    if (!newCategory.trim()) return
    setTechStack({ ...techStack, [newCategory]: [] })
    setNewCategory('')
  }

  const deleteCategory = (category) => {
    if (!window.confirm(`Delete category "${category}"?`)) return
    const newStack = { ...techStack }
    delete newStack[category]
    setTechStack(newStack)
  }

  const addToolToCategory = (category) => {
    if (!newTool[category]?.trim()) return
    const tools = techStack[category] || []
    setTechStack({
      ...techStack,
      [category]: [...tools, newTool[category]]
    })
    setNewTool({ ...newTool, [category]: '' })
  }

  const removeTool = (category, index) => {
    const tools = [...techStack[category]]
    tools.splice(index, 1)
    setTechStack({ ...techStack, [category]: tools })
  }

  const updateTool = (category, index, value) => {
    const tools = [...techStack[category]]
    tools[index] = value
    setTechStack({ ...techStack, [category]: tools })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Tech Stack</h1>
        <button
          onClick={handleSave}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Save Changes
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
          {message.text}
        </div>
      )}

      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-display mb-4 text-sinar-gold-light">Add New Category</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
            placeholder="Category name (e.g., 'AI & Machine Learning')"
          />
          <button
            onClick={addCategory}
            className="px-6 py-2 bg-sinar-gold text-sinar-dark rounded-lg hover:bg-sinar-gold-light transition-colors"
          >
            Add Category
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(techStack).map(([category, tools]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-display text-sinar-gold-light">{category}</h3>
              <button
                onClick={() => deleteCategory(category)}
                className="px-4 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-sm"
              >
                Delete Category
              </button>
            </div>

            <div className="space-y-2 mb-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={tool}
                    onChange={(e) => updateTool(category, index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                  />
                  <button
                    onClick={() => removeTool(category, index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTool[category] || ''}
                onChange={(e) => setNewTool({ ...newTool, [category]: e.target.value })}
                className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="Add new tool"
              />
              <button
                onClick={() => addToolToCategory(category)}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Tool
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
