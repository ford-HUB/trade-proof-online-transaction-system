import passport from "passport";
import { jwtStrategy } from "./jwtStrategy";

passport.use(jwtStrategy)

passport.serializeUser((user: any, done: any) => {
    done(null, user.account_id)
})

passport.deserializeUser( async (id, done) => {
    
})

export default passport