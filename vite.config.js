import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(),splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',
});