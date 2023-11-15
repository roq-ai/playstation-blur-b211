import * as yup from 'yup';

export const bluRayValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  release_date: yup.date().nullable(),
  rating: yup.number().integer().nullable(),
  collection_id: yup.string().nullable().required(),
});
