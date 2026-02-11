import Employee from "../models/employeeModel.js";

/* 1. GET ALL */
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* 2. GET BY ID */
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Invalid ID" });
  }
};

/* 3. CREATE */
export const createEmployee = async (req, res) => {
  try {
    const { name, course, roll_no } = req.body;

    if (!name || !course || !roll_no)
      return res.status(400).json({ message: "All fields required" });

    const newEmployee = await Employee.create({
      name,
      course,
      roll_no
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* 4. PUT (FULL UPDATE) */
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, course, roll_no } = req.body;

    if (!name || !course || !roll_no)
      return res.status(400).json({ message: "All fields required" });

    const employee = await Employee.findByIdAndUpdate(
      id,
      { name, course, roll_no },
      { new: true }
    );

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* 5. PATCH (PARTIAL UPDATE) */
export const patchEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* 6. DELETE */
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndDelete(id);

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
