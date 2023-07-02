import {
  Request, Response
} from 'express'
import { STATUS } from '../constants'

export const getError = (_req: Request, res: Response) => {
  res.status(404).json({
    status: STATUS.error,
    message: 'Path not found'
  })
}
