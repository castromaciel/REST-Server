import { Product } from '../models/Products'

export const isProductIdExist = async (id: string) => {
  const productId = await Product.findById(id)

  if (!productId) {
    throw new Error(`Product ${id} does not exist`)
  }
}
