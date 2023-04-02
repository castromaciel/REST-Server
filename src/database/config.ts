import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_CNN || '')
    console.log('Connect to MongoDB')
  } catch (error) {
    throw new Error('Error connecting database.')
  }
}
