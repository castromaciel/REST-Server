import {
  Request, Response
} from 'express'

import { STATUS } from '../constants'
import { getAvailablesApis } from '../services/api.service'

interface CustomError extends Error {
  message: string
}

export const getApis = (_req: Request, res: Response) => {
  try {
    const apis = getAvailablesApis()
    res.status(200).json(apis)
  } catch (err) {
    const error = err as unknown as CustomError
    res.status(500).json({
      status: STATUS.error,
      message: error.message
    })
  }
}
