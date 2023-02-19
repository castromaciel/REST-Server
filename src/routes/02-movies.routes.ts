import { Router } from 'express'
import { getMovie, getMovies } from '../controllers/02-movies.controllers'

const router = Router()

router.get('/', getMovies)
router.get('/:id', getMovie)

export default router
