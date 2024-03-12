import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import os from 'os'

function getLocalIpAddress() {
  const interfaces = os.networkInterfaces()
  for (const interfaceName of Object.keys(interfaces)) {
    for (const info of interfaces[interfaceName]) {
      if (!info.internal && info.family === 'IPv4') {
        return info.address
      }
    }
  }
  return 'localhost'
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: getLocalIpAddress(),
    port: 8080,
  },
  plugins: [vue()],
})
