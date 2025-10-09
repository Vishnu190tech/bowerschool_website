import CryptoJS from 'crypto-js';

// Get encryption key from environment variable or use a default for development
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-dev-key-change-in-production-32chars!';

/**
 * Encrypts a string using AES encryption
 * @param text The text to encrypt
 * @returns The encrypted text
 */
export function encrypt(text: string): string {
  if (!text) return '';

  try {
    const encrypted = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

/**
 * Decrypts a string that was encrypted using the encrypt function
 * @param encryptedText The encrypted text to decrypt
 * @returns The decrypted text
 */
export function decrypt(encryptedText: string): string {
  if (!encryptedText) return '';

  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_KEY);
    const originalText = decrypted.toString(CryptoJS.enc.Utf8);

    if (!originalText) {
      throw new Error('Failed to decrypt - invalid key or corrupted data');
    }

    return originalText;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Encrypts an object by converting it to JSON first
 * @param obj The object to encrypt
 * @returns The encrypted string
 */
export function encryptObject<T>(obj: T): string {
  try {
    const jsonString = JSON.stringify(obj);
    return encrypt(jsonString);
  } catch (error) {
    console.error('Object encryption error:', error);
    throw new Error('Failed to encrypt object');
  }
}

/**
 * Decrypts a string back to an object
 * @param encryptedText The encrypted text
 * @returns The decrypted object
 */
export function decryptObject<T>(encryptedText: string): T {
  try {
    const jsonString = decrypt(encryptedText);
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.error('Object decryption error:', error);
    throw new Error('Failed to decrypt object');
  }
}

/**
 * Generates a random encryption key for production use
 * @returns A random 32-character key
 */
export function generateEncryptionKey(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let key = '';

  for (let i = 0; i < 32; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return key;
}

/**
 * Hashes a string using SHA256
 * @param text The text to hash
 * @returns The hashed text
 */
export function hashString(text: string): string {
  return CryptoJS.SHA256(text).toString();
}

/**
 * Validates if a string matches a hash
 * @param text The text to validate
 * @param hash The hash to compare against
 * @returns True if the text matches the hash
 */
export function validateHash(text: string, hash: string): boolean {
  return hashString(text) === hash;
}

/**
 * Masks sensitive data for logging purposes
 * @param text The text to mask
 * @param showChars Number of characters to show at the end
 * @returns The masked text
 */
export function maskSensitiveData(text: string, showChars: number = 4): string {
  if (!text || text.length <= showChars) return '****';

  const masked = '*'.repeat(Math.max(text.length - showChars, 4));
  const visible = text.slice(-showChars);

  return masked + visible;
}