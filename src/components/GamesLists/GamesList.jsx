import React from "react";
// MUI
import { Box, Button, Card, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Components
import EditGames from "../../components/EditGames/EditGame";

// MODULES
// import api from "../../services/api";
// import { toast } from "react-toastify";

function GamesList(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickCard() {
    setOpen(true);
  }

  return (
    <>
      <EditGames
        open={open}
        setOpen={setOpen}
        idjogo={props.idjogo}
        idgenero={props.idgenero}
        genero={props.genero}
        jogo={props.jogo}
        preco={props.preco}
      />
      <Box sx={{ marginTop: "60px" }}>
        <Container maxWidth="sm">
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid #F4EFEE",
              padding: "10px 0",
            }}
          >
            <ul style={{ padding: "20px" }}>
              <li>
                <h1>{props.jogo}</h1>
                <h3>{props.genero}</h3>
                <h4>R$ {props.preco}</h4>
                <p>id do jogo: {props.idjogo}</p>
                <p>id do genero: {props.idgenero}</p>
              </li>
            </ul>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleClickCard}
                sx={{
                  border: "none",
                  padding: "5px",
                  minWidth: "40px",
                }}
              >
                <EditIcon />
              </Button>
              <Button
                // onClick={handleDeleteGame}
                sx={{ padding: "5px", minWidth: "40px" }}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
export default GamesList;
