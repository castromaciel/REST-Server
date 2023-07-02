import { Router } from 'express'
import { getApis } from '../controllers/api.controllers'

const router = Router()

router.get('/', getApis)

export default router
