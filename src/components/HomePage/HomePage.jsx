import React from "react";
import api from "../../services/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

function HomePage() {
  const [inputGame, setInputGame] = React.useState("");
  const [inputCost, setInputCost] = React.useState("");
  const [inputCategory, setInputCategory] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const inputs = {
      game: inputGame,
      cost: inputCost,
      category: inputCategory,
    };
    api.post("/send", inputs).then((response) => {
      console.log(response);
      if (response.data === true) {
        alert("cadastro feito com sucesss");
      } else {
        console.log("erro no cadastro");
      }
    });
  }
  return (
    <form>
      <Typography
        sx={{
          marginBottom: 4,
          marginTop: 8,
        }}
        variant="h4"
        component="h2"
        textAlign="center"
      >
        Cadastrar novo Jogo
      </Typography>
      <Box container width="600px" margin="0 auto" height="65vh">
        <TextField
          margin="normal"
          fullWidth
          id="game"
          name="game"
          label="game"
          type="text"
          onChange={(e) => setInputGame(e.target.value)}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="cost"
          name="cost"
          label="cost"
          type="number"
          onChange={(e) => setInputCost(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="category"
          name="category"
          label="category"
          type="text"
          onChange={(e) => setInputCategory(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          margin="normal"
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          color="primary"
          sx={{ mt: 3, mb: 2, fontSize: 18 }}
        >
          cadastrar
        </Button>
      </Box>
    </form>
  );
}

export default HomePage;
