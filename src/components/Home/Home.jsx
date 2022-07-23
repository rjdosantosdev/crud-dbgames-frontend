// modules
import React from "react";
import api from '../../services/api';

// import Games from "../Games/Games";

// MUI
import {
  Box,
  Container,
  Button,
  TextField,
  CssBaseline,
  Typography,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Home() {
  const [inputGame, setInputGame] = React.useState("");
  const [inputPrice, setInputPrice] = React.useState("");
  const [inputCategory, setInputCategory] = React.useState("");

  function handleClickButton() {
    const inputs = { Game: inputGame, Price: inputPrice, Category: inputCategory};
    api.post("/get", inputs)
    .then((res) => res.data(inputs))
    .catch(err => console.log(err))
  }
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Typography
          variant="h4"
          textAlign="center"
          component="h1"
          sx={{
            marginBottom: 4,
          }}
        >
          Cadastrar novo Jogo
        </Typography>
        <Box>
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome do Jogo"
              name="nome"
              autoComplete="nome"
              autoFocus
              onChange={(e) => setInputGame(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Preço"
              label="Preço"
              type="number"
              id="preco"
              autoComplete="current-preco"
              onChange={(e) => setInputPrice(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Categoria"
              label="Categoria"
              type="text"
              id="categoria"
              autoComplete="current-categoria"
              onChange={(e) => setInputCategory(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2, fontSize: 18 }}
              onClick={handleClickButton}
            >
              cadastrar
            </Button>
          </Box>
        </Box>
      </Container>

      <Grid sx={{ textAlign: "center" }}>
        <Typography variant="span" component="span">
          <a href="./games">Lista de Jogos</a>
        </Typography>
      </Grid>
    </ThemeProvider>
  );
}

export default Home
