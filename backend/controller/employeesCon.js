 import { getEmployees } from "../model/employeesDB.js"
// dont forget .js at the end of imports
 
 const getEmployeesCon = async (req,res)=>{
    res.json({
        employees: await getEmployees()
    })

}

export {getEmployeesCon}