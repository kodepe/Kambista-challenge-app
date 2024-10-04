const phoneRegex = /^9\d{8}$/;
const dniRegex = /^\d{8}$/;
export const isValidDNI = (value: string) => dniRegex.test(value);
export const isValidPhone = (value: string) => phoneRegex.test(value);
