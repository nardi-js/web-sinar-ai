import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - dependencies yang jarang berubah
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          
          // Admin pages - rarely loaded, separate chunk
          'admin': [
            './src/pages/admin/AdminDashboard.jsx',
            './src/pages/admin/AdminHeroSection.jsx',
            './src/pages/admin/AdminAboutSection.jsx',
            './src/pages/admin/AdminInitialize.jsx',
            './src/pages/admin/AdminPortfolio.jsx',
            './src/pages/admin/AdminTestimonials.jsx',
            './src/pages/admin/AdminWorkflow.jsx',
            './src/pages/admin/AdminFAQ.jsx',
            './src/pages/admin/AdminTemplates.jsx',
          ],
          
          // Public pages chunk
          'pages': [
            './src/pages/TemplatesPage.jsx',
            './src/pages/WorkflowPage.jsx',
            './src/pages/FAQPage.jsx',
            './src/pages/ContactPage.jsx',
            './src/pages/FoundersPage.jsx',
            './src/pages/CaseStudyPage.jsx',
            './src/pages/AIEmployeesPage.jsx',
            './src/pages/TechStackPage.jsx',
            './src/pages/ValuesEthicsPage.jsx',
            './src/pages/AIChatPage.jsx',
            './src/pages/TimeEstimatorPage.jsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase warning limit
    minify: 'esbuild', // Use esbuild instead of terser
  },
})
