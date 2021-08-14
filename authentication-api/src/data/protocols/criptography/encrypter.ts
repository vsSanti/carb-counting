export interface Encrypter {
  encrypt: (plainText: string, expiresIn?: string) => Promise<string>;
}
