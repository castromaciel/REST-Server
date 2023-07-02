import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import { PATHS } from './constants/index'
import { dbConnection } from './database/config'
import {
  apiRoutes, ecommerceRoutes, errorRoutes, moviesRoutes
} from './routes'

class Server {
  private app: Application

  private port: string

  private apiPaths = PATHS

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'

    this.connectDb()
    this.middlewares()
    this.routes()
  }

  async connectDb() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.apiPaths.api, apiRoutes)
    this.app.use(this.apiPaths.ecommerce, ecommerceRoutes)
    this.app.use(this.apiPaths.movies, moviesRoutes)
    this.app.use(this.apiPaths.error, errorRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`)
    })
  }
}

export default Server
