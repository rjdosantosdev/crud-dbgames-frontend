import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function EditGame(props) {
  const [editValues, setEditValues] = React.useState({
    id: props.id,
    game: props.game,
    cost: props.cost,
    category: props.category,
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
        id: editValues.id,
        game: editValues.game,
        cost: editValues.cost,
        category: editValues.category,
      })
      .then((response) => {
        toast.success("Dados alterados com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    handleClose();
  }

  // deletar os items
  async function handleDeleteGame() {
    await api.delete(`/delete/${editValues.id}`).then((response, request) =>
      toast.success("Jogo deletado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      })
    );
    handleClose();
  }

  const handleClose = () => {
    props.setOpen(false);
  };

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
              name="game"
              id="game"
              type="text"
              margin="dense"
              defaultValue={props.game}
              onChange={handleChangeValues}
            />
            <TextField
              fullWidth
              label="Preço"
              name="cost"
              id="cost"
              type="number"
              margin="dense"
              defaultValue={props.cost}
            />
            <TextField
              fullWidth
              label="Categoria"
              name="category"
              id="category"
              type="text"
              margin="dense"
              defaultValue={props.category}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleDeleteGame} autoFocus>
            Deletar
          </Button>
          <Button onClick={handleEditGames} autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
