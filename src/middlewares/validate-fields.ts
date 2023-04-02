import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) {
    // @ts-ignore
    const { errors } = validationErrors

    return res.status(400).json({
      headers: {
        status: 'error',
        errors
      }
    })
  }
  return next()
}
