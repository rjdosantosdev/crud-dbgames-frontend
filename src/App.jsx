import React from "react";
import api from "./services/api";
import styles from "./App.module.css";

// Components
import GamesList from "./components/GamesLists/GamesList";

// MUI
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container,
} from "@mui/material";

// MODULES
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditGame from "./components/EditGames/EditGame";

function App() {
  // states
  const [listGames, setListGames] = React.useState(null);
  const [Generos, setGeneros] = React.useState("");

  // inputs
  const [jogo, setJogo] = React.useState("");
  const [preco, setPreco] = React.useState("");

  // estado pra gerenciar os inputs autocomplete
  const [newValue, setNewValue] = React.useState(null);
  const filter = createFilterOptions();

  function handleSubmitValues() {
    api
      .post("/send", {
        jogo: jogo,
        preco: preco,
        genero: newValue.genero,
        idgenero: newValue.id_genero,
      })
      .then((response) => {
        if (response.status >= 200 && response.status <= 400) {
          console.log(response);
          toast.success("Cadastro realizado com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          const newGame = {
            jogo: jogo,
            preco: preco,
            genero: newValue.genero,
            idgenero: newValue.id_genero,
          };
        } else {
          console.log(response.data);
          console.log(response);
          toast.error("Erro ao preencher os campos!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  }

  React.useEffect(() => {
    api
      .get("/")
      .then((response) => {
        setListGames(response.data);
      })
      .catch((error) => console.log(error));

    api
      .get("/generos")
      .then((response) => {
        setGeneros(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // function handleChange(event) {
  //   setNewGeneros(event.target.value);
  // }
  return (
    <div>
      <EditGame listGames={listGames} />
      <div className={styles.module}>
        <ToastContainer />

        <Typography
          sx={{ marginBottom: 4, marginTop: 8 }}
          variant="h4"
          component="h2"
          textAlign="center"
        >
          Criar novo jogo
        </Typography>

        <Container
          sx={{
            width: "400px",
          }}
        >
          <Box>
            <TextField
              fullWidth
              label="Nome do jogo"
              name="jogo"
              id="jogo"
              type="text"
              margin="dense"
              onChange={(e) => setJogo(e.target.value)}
            />

            <TextField
              fullWidth
              label="Preço"
              name="preco"
              id="preco"
              type="number"
              margin="dense"
              sx={{ marginBottom: "10px" }}
              onChange={(e) => setPreco(e.target.value)}
            />
          </Box>
          {/* <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Gênero
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={newGeneros}
                label="Gênero"
                onChange={handleChange}
              >
                {Generos &&
                  Generos.map((i) => {
                    return (
                      <MenuItem
                        margin="normal"
                        key={i.id_genero}
                        value={i.id_genero}
                      >
                        {i.genero}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Box> */}

          <Box>
            <Autocomplete
              fullWidth
              value={newValue}
              selectOnFocus
              clearOnBlur
              options={Generos}
              onChange={(event, novoValor) => {
                if (typeof newValue === "string") {
                  setNewValue({
                    genero: novoValor,
                  });
                } else if (novoValor && novoValor.inputValue) {
                  setNewValue({
                    genero: novoValor.inputValue,
                  });
                } else {
                  setNewValue(novoValor);
                }
              }}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.genero;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.genero}</li>
              )}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                const isExisting = options.some(
                  (option) => inputValue === option.genero
                );
                if (inputValue !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    genero: `Adicionar: "${inputValue}"`,
                  });
                }
                return filtered;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pesquise ou cadastre novos generos"
                />
              )}
            />
          </Box>

          <Button
            onClick={handleSubmitValues}
            fullWidth
            margin="dense"
            type="submit"
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2, fontSize: 18 }}
          >
            Cadastrar
          </Button>
        </Container>
      </div>
      <div>
        {listGames &&
          listGames.map((value) => {
            return (
              <GamesList
                key={value.id_jogo}
                listGames={listGames}
                setListGames={setListGames}
                idjogo={value.id_jogo}
                idgenero={value.id_genero}
                jogo={value.jogo}
                preco={value.preco}
                genero={value.genero}
                Generos={Generos}
                setGeneros={setGeneros}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
