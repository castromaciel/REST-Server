export const isValidId = (id: string): boolean => !!id.match(/^[0-9a-fA-F]{24}$/)
