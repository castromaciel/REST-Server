type SeverityType = | 'success' | 'error'

interface HeaderParams {
  message: string
  status: SeverityType
  timestamp: string
}

export class HeaderData {
  message: string

  status: SeverityType

  timestamp: string

  constructor({
    message, timestamp, status
  }: HeaderParams) {
    this.status = status
    this.message = message
    this.timestamp = timestamp
  }
}
