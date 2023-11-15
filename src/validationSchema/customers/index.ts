import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  purchase_date: yup.date().nullable(),
  price: yup.number().integer().nullable(),
  payment_method: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  blu_ray_id: yup.string().nullable().required(),
});
