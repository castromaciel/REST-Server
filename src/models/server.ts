import cors from 'cors'
import express, { Application } from 'express'
import {
  apiRoutes, ecommerceRoutes, errorRoutes, moviesRoutes, userRoutes
} from '../routes'

class Server {
  private app: Application

  private port: string

  private apiPaths = {
    api: '/api',
    error: '/*',
    ecommerce: '/api/e-commerce',
    movies: '/api/movies',
    users: '/api/users'
  }

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.apiPaths.api, apiRoutes)
    this.app.use(this.apiPaths.ecommerce, ecommerceRoutes)
    this.app.use(this.apiPaths.movies, moviesRoutes)
    this.app.use(this.apiPaths.users, userRoutes)
    this.app.use(this.apiPaths.error, errorRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`)
    })
  }
}

export default Server
