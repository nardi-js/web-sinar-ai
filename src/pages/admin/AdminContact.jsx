import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function AdminContact() {
  const [contactData, setContactData] = useState({
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: ''
  })
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const docRef = doc(db, 'content', 'contact')
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data()
          setContactData({
            email: data.email || '',
            phone: data.phone || '',
            address: data.address || '',
            linkedin: data.linkedin || '',
            twitter: data.twitter || '',
            instagram: data.instagram || '',
            facebook: data.facebook || ''
          })
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching contact info:', error)
        setMessage({ type: 'error', text: 'Failed to fetch contact info' })
        setLoading(false)
      }
    }
    fetchContact()
  }, [])

  const handleSave = async () => {
    try {
      const docRef = doc(db, 'content', 'contact')
      await setDoc(docRef, {
        ...contactData,
        updatedAt: new Date().toISOString()
      }, { merge: true })
      
      setMessage({ type: 'success', text: 'Contact info saved successfully!' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      console.error('Error saving contact info:', error)
      setMessage({ type: 'error', text: 'Failed to save contact info' })
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
    <div className="p-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-display text-sinar-gold-light">Manage Contact Information</h1>
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

      <div className="bg-gray-800 p-6 rounded-lg space-y-6">
        <div>
          <h2 className="text-xl font-display mb-4 text-sinar-gold-light">Basic Contact</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="hello@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Address</label>
              <textarea
                value={contactData.address}
                onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 h-20"
                placeholder="123 Main Street, City, State, ZIP"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-display mb-4 text-sinar-gold-light">Social Media Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
              <input
                type="url"
                value={contactData.linkedin}
                onChange={(e) => setContactData({ ...contactData, linkedin: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="https://linkedin.com/company/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Twitter URL</label>
              <input
                type="url"
                value={contactData.twitter}
                onChange={(e) => setContactData({ ...contactData, twitter: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="https://twitter.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Instagram URL</label>
              <input
                type="url"
                value={contactData.instagram}
                onChange={(e) => setContactData({ ...contactData, instagram: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="https://instagram.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Facebook URL</label>
              <input
                type="url"
                value={contactData.facebook}
                onChange={(e) => setContactData({ ...contactData, facebook: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2"
                placeholder="https://facebook.com/..."
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-display text-sinar-gold-light mb-2">Preview</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p><strong>Email:</strong> {contactData.email || 'Not set'}</p>
              <p><strong>Phone:</strong> {contactData.phone || 'Not set'}</p>
              <p><strong>Address:</strong> {contactData.address || 'Not set'}</p>
              <div className="mt-2 flex gap-2">
                {contactData.linkedin && <span className="text-xs bg-gray-600 px-2 py-1 rounded">LinkedIn ✓</span>}
                {contactData.twitter && <span className="text-xs bg-gray-600 px-2 py-1 rounded">Twitter ✓</span>}
                {contactData.instagram && <span className="text-xs bg-gray-600 px-2 py-1 rounded">Instagram ✓</span>}
                {contactData.facebook && <span className="text-xs bg-gray-600 px-2 py-1 rounded">Facebook ✓</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
