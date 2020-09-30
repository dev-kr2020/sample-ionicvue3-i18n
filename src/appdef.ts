export enum PhoneType {
  HOME = 'HOME',
  OFFICE = 'OFFICE',
  PERSONAL = 'PERSONAL',
  MOBILE = 'MOBILE',
  OTHER = 'OTHER'
}
export enum EmailType {
  HOME = 'HOME',
  OFFICE = 'OFFICE',
  PERSONAL = 'PERSONAL',  
  OTHER = 'OTHER'
}

export const defaultUser = {
  name: '',
  phone: { phoneType: '', phoneNumber: ''},
  email: { emailType: '', email: ''}
}