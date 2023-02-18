import {
  Request, Response
} from 'express'
import { HeaderData } from '../models/Header'
import { Product } from '../models/Products'

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({ })
  const headers = new HeaderData({ status: 'success', message: 'Products retrieved successfully' })

  res.status(200).send({
    headers,
    data: products
  })
}

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    const headers = new HeaderData({ status: 'error', message: 'ObjectId is not valid' })

    return res.status(404).send({
      headers,
      data: []
    })
  }

  const product = await Product.findById({ _id: id })
  const headers = new HeaderData({ status: 'success', message: `Product with id ${id} retrieved successfully` })

  return res.status(200).send({
    headers,
    product
  })
}
