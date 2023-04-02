import {
  Request, Response
} from 'express'
import { STATUS } from '../constants'
import { Product } from '../models/Products'
import { HeaderData } from '../models/header'

export const getProducts = async (req: Request, res: Response) => {
  const { limit, from = 0 } = req.query

  try {
    const products = await Product.find()
      .skip(Number(from))
      .limit(Number(limit))

    const headers = new HeaderData({ status: STATUS.success, message: 'Products retrieved successfully' })

    res.status(200).send({
      headers,
      products
    })
  } catch (error) {
    const headers = new HeaderData({ status: STATUS.error, message: 'Failed to fetch products' })

    res.status(400).send({
      headers
    })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const product = await Product.findById({ _id: id })
  const headers = new HeaderData({ status: STATUS.success, message: 'Product retrieved successfully' })

  return res.status(200).send({
    headers,
    product
  })
}
