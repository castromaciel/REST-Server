import { model, Schema } from 'mongoose'

interface Comment {
  author: string
  comment: string
  date: Date
}

interface IProduct {
  title: string
  description: string
  comments: Comment []
  previewImage: string
  otherImages: string
}

const ProductSchema = new Schema<IProduct>({
  title: String,
  description: String,
  comments: [{
    author: String,
    comment: String,
    date: Date
  }],
  previewImage: String,
  otherImages: String
})

export const Product = model<IProduct>('Product', ProductSchema)
