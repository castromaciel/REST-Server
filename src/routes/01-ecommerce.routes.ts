import { Router } from 'express'
import { getProducts } from '../controllers/01-ecommerce.controllers'

const router = Router()

router.get('/', getProducts)

export default router
