import mongoose from "mongoose";  
const employeeSchema = new mongoose.Schema({  
  name: { type: String, required: true },  
  course: { type: String, required: true },  
  roll_no: { type: String, required: true, unique: true }  
}, { timestamps: true });  
const Employee = mongoose.model("Employee", employeeSchema);  
export default Employee;  
