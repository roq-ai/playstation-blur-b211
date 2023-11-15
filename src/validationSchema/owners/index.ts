import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  purchase_date: yup.date().nullable(),
  price: yup.number().integer().nullable(),
  condition: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  blu_ray_id: yup.string().nullable().required(),
});
