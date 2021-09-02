export class NotFoundError extends Error {
  constructor(param: string) {
    super(`${param} not found`);
    this.name = 'NotFoundError';
  }
}
