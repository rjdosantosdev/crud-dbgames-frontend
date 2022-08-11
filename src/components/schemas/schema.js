import * as Yup from "yup";

export default Yup.object().shape({
  game: Yup.string()
    .min(2, "O nome do jogo deve ter pelo menos 2 caracteres")
    .required("Campo obrigatorio"),
  cost: Yup.number().required("Campo obrigatorio"),
  category: Yup.string()
    .min(2, "O nome da categoria deve ter pelo menos 2 caracteres")
    .required("Campo obrigatorio"),
});
