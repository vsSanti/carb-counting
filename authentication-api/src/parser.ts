export const bodyParser = (eventBody: string): any => {
  return JSON.parse(eventBody);
};
