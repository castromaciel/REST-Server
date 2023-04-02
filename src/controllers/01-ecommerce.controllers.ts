import {
  Request, Response
} from 'express'
import { STATUS } from '../constants'
import { isValidId } from '../helpers/validateId'
import { HeaderData } from '../models/header'
import { Product } from '../models/Products'

export const getProducts = async (req: Request, res: Response) => {
  const { limit, from = 0 } = req.query

  try {
    const products = await Product.find()
      .skip(Number(from))
      .limit(Number(limit))

    const headers = new HeaderData({ status: STATUS.success, message: 'Products retrieved successfully' })

    res.status(200).send({
      headers,
      data: products
    })
  } catch (error) {
    const headers = new HeaderData({ status: STATUS.error, message: 'Failed to fetch products' })

    res.status(400).send({
      headers,
      data: []
    })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!isValidId(id)) {
    const headers = new HeaderData({ status: STATUS.error, message: 'Invalid id' })

    return res.status(404).send({
      headers,
      data: []
    })
  }

  const product = await Product.findById({ _id: id })

  if (!product) {
    const headers = new HeaderData({ status: STATUS.error, message: `Product with id ${id} doesn't exist` })
    return res.status(404).send({
      headers,
      data: []
    })
  }

  const headers = new HeaderData({ status: STATUS.success, message: `Product with id ${id} retrieved successfully` })

  return res.status(200).send({
    headers,
    product
  })
}
