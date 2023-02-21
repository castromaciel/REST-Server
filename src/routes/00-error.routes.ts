import { Router } from 'express'
import { getError } from '../controllers/00-error.controllers'

const router = Router()

router.get('/', getError)

export default router
