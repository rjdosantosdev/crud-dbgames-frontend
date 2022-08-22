import * as React from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// components
import GamesList from "../GamesLists/GamesList";
// modules
import api from "../../services/api";
import { toast } from "react-toastify";

export default function EditGame(props) {
  console.log(props);
  const [editValues, setEditValues] = React.useState({
    idjogo: props.idjogo,
    idgenero: props.idgenero,
    jogo: props.jogo,
    preco: props.preco,
    genero: props.genero,
  });

  function handleChangeValues(value) {
    setEditValues((prevValues) => ({
      ...prevValues, // REST..
      [value.target.id]: value.target.value,
    }));
  }

  async function handleEditGames() {
    await api
      .put("/edit", {
        idjogo: editValues.idjogo,
        idgenero: editValues.idgenero,
        jogo: editValues.jogo,
        preco: editValues.preco,
        genero: editValues.genero,
      })
      .then((response) => {
        if (response.status >= 200 && response.status <= 400) {
          toast.success("Dados alterados com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => console.log(err));
    handleClose();
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  // deletar os items
  async function handleDeleteGame() {
    await api.delete(`/delete/${editValues.id}`).then((response, request) =>
      toast.success("Jogo deletado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      })
    );
  }

  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              fullWidth
              label="Nome do jogo"
              name="jogo"
              id="jogo"
              type="text"
              margin="dense"
              defaultValue={props.jogo}
              onChange={handleChangeValues}
            />
            <TextField
              fullWidth
              label="Preço"
              name="preco"
              id="preco"
              type="number"
              margin="dense"
              defaultValue={props.preco}
              onChange={handleChangeValues}
            />
            <TextField
              fullWidth
              label="Gênero"
              name="genero"
              id="genero"
              type="text"
              margin="dense"
              defaultValue={props.genero}
              onChange={handleChangeValues}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleEditGames} autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
