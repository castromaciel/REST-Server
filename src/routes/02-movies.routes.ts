import { Router } from 'express'
import { getMovies } from '../controllers/02-movies.controllers'

const router = Router()

router.get('/', getMovies)

export default router
