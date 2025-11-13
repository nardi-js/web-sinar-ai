import { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminTemplates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    category: 'Web Development',
    price: '',
    originalPrice: '',
    timeline: '',
    image: '',
    demoUrl: '',
    detailsUrl: '',
    tech: [''],
    features: [''],
    cta: {
      text: 'View Details',
      link: '/templates'
    },
    featured: false
  });

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'templates'));
      const templatesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTemplates(templatesData);
    } catch (error) {
      console.error('Error fetching templates:', error);
      showMessage('error', 'Failed to fetch templates');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      description: '',
      category: 'Web Development',
      price: '',
      originalPrice: '',
      timeline: '',
      image: '',
      demoUrl: '',
      detailsUrl: '',
      tech: [''],
      features: [''],
      cta: {
        text: 'View Details',
        link: '/templates'
      },
      featured: false
    });
    setEditingTemplate(null);
  };

  const handleOpenModal = (template = null) => {
    if (template) {
      setEditingTemplate(template);
      setFormData({
        ...template,
        tech: template.tech || [''],
        features: template.features || [''],
        cta: template.cta || { text: 'View Details', link: '/templates' }
      });
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Auto-generate ID from title
  const generateId = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-'); // Remove multiple dashes
  };

  const handleArrayChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (index, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title) {
      showMessage('error', 'Title is required');
      return;
    }

    try {
      // Auto-generate ID from title if not editing
      const templateId = editingTemplate ? formData.id : generateId(formData.title);
      
      // Auto-set CTA if not provided
      const ctaData = {
        text: formData.cta.text || 'View Details',
        link: formData.cta.link || '/templates'
      };

      const templateData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        price: formData.price,
        originalPrice: formData.originalPrice,
        timeline: formData.timeline,
        image: formData.image,
        demoUrl: formData.demoUrl,
        detailsUrl: formData.detailsUrl,
        tech: formData.tech.filter(t => t.trim() !== ''),
        features: formData.features.filter(f => f.trim() !== ''),
        cta: ctaData,
        featured: formData.featured,
        updatedAt: new Date().toISOString()
      };

      if (editingTemplate) {
        await updateDoc(doc(db, 'templates', templateId), templateData);
        showMessage('success', 'Template updated successfully!');
      } else {
        await setDoc(doc(db, 'templates', templateId), {
          ...templateData,
          createdAt: new Date().toISOString()
        });
        showMessage('success', `Template created successfully! ID: ${templateId}`);
      }

      handleCloseModal();
      fetchTemplates();
    } catch (error) {
      console.error('Error saving template:', error);
      showMessage('error', 'Failed to save template');
    }
  };

  const handleDelete = async (templateId) => {
    if (!window.confirm('Are you sure you want to delete this template?')) return;

    try {
      await deleteDoc(doc(db, 'templates', templateId));
      showMessage('success', 'Template deleted successfully!');
      fetchTemplates();
    } catch (error) {
      console.error('Error deleting template:', error);
      showMessage('error', 'Failed to delete template');
    }
  };

  const categories = ['Web Development', 'Mobile App', 'E-Commerce', 'Landing Page', 'Dashboard', 'Other'];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Templates Management</h1>
            <p className="text-gray-400">Manage your product templates</p>
          </div>
          <button onClick={() => handleOpenModal()} className="px-6 py-3 bg-gradient-to-r from-sinar-gold to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-sinar-gold/30 transition-all duration-300">
            <span className="flex items-center gap-2"><span className="text-xl">+</span>Add Template</span>
          </button>
        </div>

        {message.text && (
          <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
            {message.text}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-sinar-dark-light/50 border border-gray-800 rounded-xl p-6 animate-pulse">
                <div className="h-40 bg-gray-800 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-800 rounded mb-2"></div>
                <div className="h-4 bg-gray-800 rounded mb-4"></div>
                <div className="flex gap-2"><div className="h-8 bg-gray-800 rounded flex-1"></div><div className="h-8 bg-gray-800 rounded flex-1"></div></div>
              </div>
            ))}
          </div>
        ) : templates.length === 0 ? (
          <div className="text-center py-16 bg-sinar-dark-light/50 border border-gray-800 rounded-xl">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Templates Yet</h3>
            <p className="text-gray-400 mb-6">Start by creating your first template</p>
            <button onClick={() => handleOpenModal()} className="px-6 py-3 bg-sinar-gold text-black font-semibold rounded-lg hover:bg-sinar-gold-light transition-colors duration-300">Create Template</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="group bg-sinar-dark-light/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-sinar-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-sinar-gold/5">
                <div className="relative h-48 bg-gradient-to-br from-sinar-gold/20 to-yellow-600/10 overflow-hidden">
                  {template.image ? (<img src={template.image} alt={template.title} className="w-full h-full object-cover" />) : (<div className="w-full h-full flex items-center justify-center text-6xl">📄</div>)}
                  {template.featured && (<div className="absolute top-3 right-3 px-3 py-1 bg-sinar-gold text-black text-xs font-bold rounded-full">FEATURED</div>)}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-sinar-gold transition-colors duration-300">{template.title}</h3>
                      <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">{template.category}</span>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{template.description}</p>
                  </div>
                  {template.tech && template.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {template.tech.slice(0, 3).map((tech, idx) => (<span key={idx} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded">{tech}</span>))}
                      {template.tech.length > 3 && (<span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">+{template.tech.length - 3}</span>)}
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div>
                      <div className="text-lg font-bold text-sinar-gold">{template.price}</div>
                      {template.originalPrice && (<div className="text-xs text-gray-500 line-through">{template.originalPrice}</div>)}
                    </div>
                    {template.timeline && (<div className="text-sm text-gray-400">⏱️ {template.timeline}</div>)}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button onClick={() => handleOpenModal(template)} className="flex-1 px-4 py-2 bg-sinar-gold/10 hover:bg-sinar-gold/20 text-sinar-gold rounded-lg transition-colors duration-300 text-sm font-medium">Edit</button>
                    <button onClick={() => handleDelete(template.id)} className="flex-1 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors duration-300 text-sm font-medium">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Form */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={handleCloseModal}>
            <div className="bg-sinar-dark-light border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-sinar-dark-light border-b border-gray-800 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{editingTemplate ? 'Edit Template' : 'Create New Template'}</h2>
                  {!editingTemplate && <p className="text-sm text-gray-400 mt-1">ID will be auto-generated from title</p>}
                  {editingTemplate && <p className="text-sm text-gray-400 mt-1">ID: {formData.id}</p>}
                </div>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Title - Full Width */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Template Title *
                  </label>
                  <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleInputChange} 
                    className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" 
                    placeholder="E-Commerce Template" 
                    required 
                  />
                </div>

                <div><label className="block text-sm font-medium text-gray-300 mb-2">Description</label><textarea name="description" value={formData.description} onChange={handleInputChange} rows={3} className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="Describe your template..." /></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Category</label><select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none">{categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}</select></div>
                  <div className="flex items-center pt-8"><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" name="featured" checked={formData.featured} onChange={handleInputChange} className="w-5 h-5 rounded" /><span className="text-sm font-medium text-gray-300">Mark as Featured</span></label></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Price</label><input type="text" name="price" value={formData.price} onChange={handleInputChange} className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="$999" /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Original Price</label><input type="text" name="originalPrice" value={formData.originalPrice} onChange={handleInputChange} className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="$1499" /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label><input type="text" name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="2-3 weeks" /></div>
                </div>

                <div><label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label><input type="text" name="image" value={formData.image} onChange={handleInputChange} className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="https://example.com/image.jpg" /></div>

                {/* Demo & Details URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Live Demo URL
                    </label>
                    <input 
                      type="text" 
                      name="demoUrl" 
                      value={formData.demoUrl} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" 
                      placeholder="https://demo.example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Details URL
                    </label>
                    <input 
                      type="text" 
                      name="detailsUrl" 
                      value={formData.detailsUrl} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" 
                      placeholder="https://example.com/template-details" 
                    />
                  </div>
                </div>

                <div><label className="block text-sm font-medium text-gray-300 mb-2">Tech Stack</label><div className="space-y-2">{formData.tech.map((tech, index) => (<div key={index} className="flex gap-2"><input type="text" value={tech} onChange={(e) => handleArrayChange(index, e.target.value, 'tech')} className="flex-1 px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="React.js" /><button type="button" onClick={() => removeArrayItem(index, 'tech')} className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors duration-300">✕</button></div>))}<button type="button" onClick={() => addArrayItem('tech')} className="w-full px-4 py-2 bg-sinar-gold/10 hover:bg-sinar-gold/20 text-sinar-gold rounded-lg transition-colors duration-300 text-sm font-medium">+ Add Tech</button></div></div>

                <div><label className="block text-sm font-medium text-gray-300 mb-2">Features</label><div className="space-y-2">{formData.features.map((feature, index) => (<div key={index} className="flex gap-2"><input type="text" value={feature} onChange={(e) => handleArrayChange(index, e.target.value, 'features')} className="flex-1 px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none" placeholder="Responsive design" /><button type="button" onClick={() => removeArrayItem(index, 'features')} className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors duration-300">✕</button></div>))}<button type="button" onClick={() => addArrayItem('features')} className="w-full px-4 py-2 bg-sinar-gold/10 hover:bg-sinar-gold/20 text-sinar-gold rounded-lg transition-colors duration-300 text-sm font-medium">+ Add Feature</button></div></div>

                {/* Info Note */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>Note:</strong> CTA button will be automatically set to "View Details" with link to /templates
                  </p>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <button type="button" onClick={handleCloseModal} className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 font-medium">Cancel</button>
                  <button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-sinar-gold to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-sinar-gold/30 transition-all duration-300">{editingTemplate ? 'Update Template' : 'Create Template'}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
