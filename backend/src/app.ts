import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import type { Express } from 'express'

// @Default Routes Imported
import authRoutes from './routes/user/auth/auth.routes'
import passport from './config/passport.config'

const app: Express = express()

app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(cors({
    origin: '*',
    credentials: true,
}))


// @Imported and use default routes here
app.use('/api/auth/user', authRoutes)


export default app