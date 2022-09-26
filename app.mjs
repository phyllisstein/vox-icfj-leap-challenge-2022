import { fileURLToPath } from 'url'
import { createServer } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const { PORT = 3000 } = process.env

;(async () => {
  const server = await createServer({
    root: __dirname,
    server: {
      port: PORT
    },
  })
  await server.listen()

  server.printUrls()
})()
