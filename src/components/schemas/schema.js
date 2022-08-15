import * as Yup from "yup";

export default Yup.object().shape({
  jogo: Yup.string()
    .min(2, "O nome do jogo deve ter pelo menos 2 caracteres")
    .required("Campo obrigatorio"),
  preco: Yup.number().required("Campo obrigatorio"),
  genero: Yup.string().required("Campo obrigatorio"),
});
