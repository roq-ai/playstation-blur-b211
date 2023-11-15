import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  founded_date: yup.date().nullable(),
  website: yup.string().nullable(),
  contact_number: yup.string().nullable(),
  name: yup.string().required(),
});
