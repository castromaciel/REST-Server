type SeverityType = | 'success' | 'error'

interface HeaderParams {
  message: string
  status: SeverityType
}

export class HeaderData {
  message: string

  status: SeverityType

  timestamp: string

  constructor({
    message, status
  }: HeaderParams) {
    this.status = status
    this.message = message
    this.timestamp = new Date().toISOString()
  }
}
