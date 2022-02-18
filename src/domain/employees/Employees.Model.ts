export enum StatusType {
  WORKING_ON = 'WORKING_ON',
  WATCHING = 'WATCHING',
  COMPLETED = 'COMPLETED',
}

export enum ProjectType {
  TICKET = 'TICKET',
  STORY = 'STORY',
}

export enum ReferrenceType {
  CUSTOMER = 'CUSTOMER',
  TOBACCO = 'TOBACCO',
}

export interface Employee {
  id: string
  status: StatusType
  type: ProjectType
  referenceType: ReferrenceType
  ticketNumber: number
  title: string
  username: string
  description: string
}
