import app from "./app";
import 'dotenv/config'

const PORT:any = process.env.PORT

app.listen(PORT, () => {
    console.log('server is running at http://localhost:8000')
})