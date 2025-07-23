import express from 'express'
import {config} from 'dotenv'
import { getEmployeesCon } from './controller/employeesCon.js'
import cors from 'cors'

config()



const app = express()
const PORT = process.env.PORT 
app.use(cors())

app.get('/employees', getEmployeesCon)


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
    
})