import { Employee } from './Employees.Model'
import { employees } from './Employees.Stub'

export const getEmployees = (): Employee[] => {
  return employees
}
