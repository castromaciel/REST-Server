import { Router } from 'express'
import { getError } from '../controllers/error.controllers'

const router = Router()

router.get('/', getError)

export default router
