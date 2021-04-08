import * as Yup from 'yup';

const Schema = Yup.object().shape({
  nome: Yup.string(),
});

export default Schema;
