import React from "react";
// MUI
import { Box, Button, Card, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Components
import EditGames from "../../components/EditGames/EditGame";

// MODULES

function GamesList({
  idjogo,
  idgenero,
  jogo,
  preco,
  genero,
  listGames,
  setListGames,
  Generos,
  setGeneros,
}) {
  const [open, setOpen] = React.useState(false);

  function handleClickCard() {
    setOpen(true);
  }

  return (
    <>
      <EditGames
        open={open}
        setOpen={setOpen}
        idjogo={idjogo}
        idgenero={idgenero}
        genero={genero}
        jogo={jogo}
        preco={preco}
        setListGames={setListGames}
        listGames={listGames}
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
                <h1>{jogo}</h1>
                <h3>{genero}</h3>
                <h4>R$ {preco}</h4>
                <p>id do jogo: {idjogo}</p>
                <p>id do genero: {idgenero}</p>
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
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
export default GamesList;
