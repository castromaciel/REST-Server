import { Request, Response } from 'express'

export const getUsers = (req: Request, res: Response) => {
  res.json({
    message: 'getUsers'
  })
}

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    id,
    message: 'getUser'
  })
}

export const postUser = (req: Request, res: Response) => {
  const { body } = req

  res.json({
    body,
    message: 'postUser'
  })
}

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    id,
    message: 'putUser'
  })
}

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    id,
    message: 'deleteUser'
  })
}
