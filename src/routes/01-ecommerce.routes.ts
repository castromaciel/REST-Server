import { Router } from 'express'
import { getProduct, getProducts } from '../controllers/01-ecommerce.controllers'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)

export default router
