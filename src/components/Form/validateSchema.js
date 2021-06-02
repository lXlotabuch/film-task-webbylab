import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  releazeYear: Yup.string()
    .min(3, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  format: Yup.string().required('Required'),
});
