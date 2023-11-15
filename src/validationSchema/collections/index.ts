import * as yup from 'yup';

export const collectionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  release_date: yup.date().nullable(),
  rating: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
