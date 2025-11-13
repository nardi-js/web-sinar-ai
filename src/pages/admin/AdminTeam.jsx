import { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminTeam() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    role: '',
    icon: '',
    description: '',
    capabilities: [''],
    tools: ['']
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'aiEmployees'))
        const employeesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setEmployees(employeesData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching AI employees:', error)
        setMessage({ type: 'error', text: 'Failed to fetch AI employees' })
        setLoading(false)
      }
    }
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'aiEmployees'))
      const employeesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setEmployees(employeesData)
    } catch (error) {
      console.error('Error fetching AI employees:', error)
    }
  }

  const handleEdit = (employee) => {
    setEditingId(employee.id)
    setFormData({
      id: employee.id,
      name: employee.name,
      role: employee.role,
      icon: employee.icon || '',
      description: employee.description,
      capabilities: employee.capabilities || [''],
      tools: employee.tools || ['']
    })
  }

  const handleAddNew = () => {
    setEditingId('new')
    setFormData({
      id: '',
      name: '',
      role: '',
      icon: '',
      description: '',
      capabilities: [''],
      tools: ['']
    })
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleSave = async () => {
    try {
      if (!formData.id || !formData.name || !formData.role) {
        setMessage({ type: 'error', text: 'ID, name, and role are required' })
        return
      }

      const employeeData = {
        name: formData.name,
        role: formData.role,
        icon: formData.icon,
        description: formData.description,
        capabilities: formData.capabilities.filter(c => c.trim() !== ''),
        tools: formData.tools.filter(t => t.trim() !== ''),
        updatedAt: new Date().toISOString()
      }

      if (editingId === 'new') {
        employeeData.createdAt = new Date().toISOString()
      }

      await setDoc(doc(db, 'aiEmployees', formData.id), employeeData)
      
      setMessage({ type: 'success', text: 'AI Employee saved successfully!' })
      setEditingId(null)
      fetchEmployees()
      
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving AI employee:', error)
      setMessage({ type: 'error', text: 'Failed to save AI employee' })
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this AI employee?')) return

    try {
      await deleteDoc(doc(db, 'aiEmployees', id))
      setMessage({ type: 'success', text: 'AI Employee deleted successfully!' })
      fetchEmployees()
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error deleting AI employee:', error)
      setMessage({ type: 'error', text: 'Failed to delete AI employee' })
    }
  }

  const addCapability = () => {
    setFormData({ ...formData, capabilities: [...formData.capabilities, ''] })
  }

  const removeCapability = (index) => {
    const newCapabilities = formData.capabilities.filter((_, i) => i !== index)
    setFormData({ ...formData, capabilities: newCapabilities })
  }

  const updateCapability = (index, value) => {
    const newCapabilities = [...formData.capabilities]
    newCapabilities[index] = value
    setFormData({ ...formData, capabilities: newCapabilities })
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
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage AI Employees</h1>
        <button
          onClick={handleAddNew}
          className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
        >
          Add New Employee
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
            {editingId === 'new' ? 'Add New AI Employee' : 'Edit AI Employee'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Employee ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={editingId !== 'new'}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="employee-1"
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
                placeholder="🤖"
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
              <label className="block text-sm font-medium mb-2">Capabilities</label>
              {formData.capabilities.map((capability, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={capability}
                    onChange={(e) => updateCapability(index, e.target.value)}
                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2"
                    placeholder="Capability"
                  />
                  <button
                    onClick={() => removeCapability(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addCapability}
                className="mt-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded"
              >
                Add Capability
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
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-sinar-gold text-sinar-dark px-6 py-2 rounded-lg hover:bg-sinar-gold-light transition-colors"
            >
              Save Employee
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
        {employees.map((employee) => (
          <div key={employee.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{employee.icon}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(employee)}
                  className="px-3 py-1 bg-sinar-gold text-sinar-dark rounded hover:bg-sinar-gold-light transition-colors text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <h3 className="text-xl font-display mb-1 text-sinar-gold-light">{employee.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{employee.role}</p>
            <p className="text-gray-300 text-sm mb-3">{employee.description}</p>
            {employee.capabilities && employee.capabilities.length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-400 mb-1">CAPABILITIES:</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  {employee.capabilities.map((cap, idx) => (
                    <li key={idx}>• {cap}</li>
                  ))}
                </ul>
              </div>
            )}
            {employee.tools && employee.tools.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {employee.tools.map((tool, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-gray-700 rounded text-xs">
                    {tool}
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
