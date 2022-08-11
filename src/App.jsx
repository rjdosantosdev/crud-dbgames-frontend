import React from "react";
import api from "./services/api";
import styles from "./App.module.css";

// Components
import GamesList from "./components/GamesLists/GamesList";

// MUI
import { Box, Button, TextField, Typography } from "@mui/material";

// MODULES
import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./components/schemas/schema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  // states
  const [listGames, setListGames] = React.useState(null);
  function handleSubmit(values) {
    api.post("/send", values).then((response) => {
      if (response.data === true) {
        setListGames([
          ...listGames,
          {
            game: response.values.game,
            cost: response.values.cost,
            category: response.values.category,
          },
        ]);
        toast.success("Cadastro realizado com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Erro ao preencher os campos!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  }

  React.useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setListGames(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className={styles.module}>
        <ToastContainer />
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            game: "",
            cost: "",
            category: "",
          }}
        >
          {({ values }) => (
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
                  id="game"
                  label="Nome do Jogo"
                  type="text"
                  margin="dense"
                  value={props.newgame}
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
                  id="cost"
                  type="number"
                  margin="dense"
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
                  id="category"
                  type="text"
                  margin="dense"
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
                  margin="dense"
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, fontSize: 18 }}
                >
                  Cadastrar
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </div>

      <div>
        {listGames &&
          listGames.map((value) => {
            return (
              <GamesList
                key={value.id}
                listGames={listGames}
                setListGames={setListGames}
                id={value.id}
                game={value.game}
                cost={value.cost}
                category={value.category}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
