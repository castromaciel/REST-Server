import { Router } from 'express'
import { check } from 'express-validator'
import { getProduct, getProducts } from '../controllers/01-ecommerce.controllers'
import { isProductIdExist } from '../database/db-validators'
import { validateFields } from '../middlewares/validate-fields'

const router = Router()

router.get('/', getProducts)
router.get(
  '/:id',
  [
    check('id', 'Id is not valid').isMongoId(),
    check('id').custom(isProductIdExist),
    validateFields
  ],
  getProduct
)

export default router
