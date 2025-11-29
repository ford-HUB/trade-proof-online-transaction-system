import express from 'express'
import type { Request, Response } from 'express'

const app: any = express()

app.use('/test', (req: Request, res: Response) => res.send('api backend is working successfully'))

export default app