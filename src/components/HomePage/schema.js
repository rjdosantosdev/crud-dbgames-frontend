import * as Yup from "yup";

export default Yup.object().shape({
  game: Yup.string().min(2).required("campo obrigatorio"),
  price: Yup.string().min(2).required("campo obrigatorio"),
  category: Yup.string().min(2).required("campo obrigatorio"),
});
