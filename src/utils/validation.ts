export function validatePhoneNumber(phone: string): boolean {
  return /^\d{10}$/.test(phone);
}

export function validateEmail(email: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

export function validatePassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}