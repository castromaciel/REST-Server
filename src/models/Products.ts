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
  price: number
  previewImage: string
  otherImages: string
}

const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [{
    author: String,
    comment: String,
    date: Date
  }],
  price: {
    type: Number,
    required: true
  },
  previewImage: {
    type: String,
    required: true
  },
  otherImages: String
})

export const Product = model<IProduct>('Product', ProductSchema)
