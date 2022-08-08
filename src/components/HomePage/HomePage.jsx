import React from "react";
import api from "../../services/api";
import { Box, Button, TextField, Typography } from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Link
import { Link } from "react-router-dom";
function HomePage() {
  function handleSubmit(values, actions) {
    // const inputs = {
    //   game: inputGame,
    //   cost: inputCost,
    //   category: inputCategory,
    // };
    api.post("/send", values).then((response) => {
      if (response.data === true) {
        toast.success("Cadastro realizado com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Erro ao preencher os campos!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    });
  }

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          game: "",
          cost: "",
          category: "",
        }}
      >
        {({ values, actions, errors }) => (
          <Form>
            <Typography
              sx={{ marginBottom: 4, marginTop: 8 }}
              variant="h4"
              component="h2"
              textAlign="center"
            >
              Criar novo jogo
            </Typography>
            <Box container maxWidth={400} margin="0 auto" height="65vh">
              <Field
                as={TextField}
                fullWidth
                name="game"
                label="Nome do Jogo"
                type="text"
              />

              <Box mt={0.75}>
                <Typography
                  width={400}
                  component="h6"
                  variant="caption"
                  color="error"
                  fontWeight="regular"
                >
                  <ErrorMessage name="game" />
                </Typography>
              </Box>

              <Field
                fullWidth
                as={TextField}
                label="Preço"
                name="cost"
                type="number"
              />
              <Box mt={0.75}>
                <Typography
                  width={400}
                  component="h6"
                  variant="caption"
                  color="error"
                  fontWeight="regular"
                >
                  <ErrorMessage name="cost" />
                </Typography>
              </Box>
              <Field
                as={TextField}
                fullWidth
                label="Categoria"
                name="category"
                type="text"
              />
              <Box mt={0.75}>
                <Typography
                  width={400}
                  component="h6"
                  variant="caption"
                  color="error"
                  fontWeight="regular"
                >
                  <ErrorMessage name="category" />
                </Typography>
              </Box>
              <Button
                fullWidth
                margin="normal"
                type="submit"
                size="large"
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: 18 }}
              >
                Cadastrar
              </Button>
              <Typography align="center">
                <Link to="/games">Lista de Jogos</Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default HomePage;
