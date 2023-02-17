import { Router } from 'express'
import { getProducts } from '../controllers/ecommerce.controllers'

const router = Router()

router.get('/', getProducts)

export default router
