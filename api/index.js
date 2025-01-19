import express from 'express'
import { connectDB } from '../config/db.js'
import userRoutes from './routes/user.route.js'

const app =express()

//test server

/* app.get('/', (req, res)=>{
    res.json({
         message:'api is up and working'

    }
       
    )
})
 */

app.use('/api/user', userRoutes)

app.listen(3000, ()=>{
   connectDB();
    console.log('server up and running on port 3000')
})

