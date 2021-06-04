import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .trim("Can't send spaces")
    .max(100, 'Too Long!')
    .required('Required'),
  releaseYear: Yup.number()
    .required('Required')
    .positive('Year must be positive')
    .integer('Year must be integer')
    .moreThan(1887, 'First film releaze in 1888!')
    .lessThan(
      new Date().getFullYear() + 2,
      `Can't input year more then ${new Date().getFullYear() + 1}`,
    ),
  format: Yup.string().required('Required'),
  stars: Yup.array().min(1, 'Must input stars'),
});
