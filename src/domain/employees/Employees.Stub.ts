import { Employee, StatusType, ProjectType, ReferrenceType } from './Employees.Model'
export const employees: Employee[] = [
  {
    id: 'employee-1',
    ticketNumber: 1,
    status: StatusType.WORKING_ON,
    referenceType: ReferrenceType.TOBACCO,
    title: 'User STORY New',
    username: 'scrum-test-2',
    type: ProjectType.TICKET,
    description: 'user story new - scrum test 2'
  },
  {
    id: 'employee-2',
    ticketNumber: 1,
    status: StatusType.WORKING_ON,
    referenceType: ReferrenceType.TOBACCO,
    title: 'User STORY',
    username: 'kanban-test',
    type: ProjectType.STORY,
    description: 'user story - kanban test'
  },
  {
    id: 'employee-3',
    ticketNumber: 1,
    status: StatusType.WATCHING,
    referenceType: ReferrenceType.CUSTOMER,
    title: 'User STORY',
    username: 'kanban-test',
    type: ProjectType.STORY,
    description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'
  },
  {
    id: 'employee-4',
    ticketNumber: 1,
    status: StatusType.COMPLETED,
    referenceType: ReferrenceType.TOBACCO,
    title: 'User STORY',
    username: 'scrum-test',
    type: ProjectType.STORY,
    description: ''
  }
]
