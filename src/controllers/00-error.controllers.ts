import {
  Request, Response
} from 'express'

export const getError = (req: Request, res: Response) => {
  res.sendFile('error/index.html', { root: 'public' })
}
