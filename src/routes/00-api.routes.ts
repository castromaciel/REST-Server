import { Router } from 'express'
import { getApis } from '../controllers/00-api.controllers'

const router = Router()

router.get('/', getApis)

export default router
