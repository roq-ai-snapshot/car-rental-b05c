import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().required(),
  license_plate_number: yup.string().required(),
  vehicle_manager_id: yup.string().nullable().required(),
});
