import React from "react";
// MUI
import { Box, Button, Card, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// Components
import EditGames from "../../components/EditGames/EditGame";

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
        idjogo={props.id_jogo}
        game={props.game}
        cost={props.cost}
        genero={props.genero}
        idgenero={props.genero}
      />
      <Box sx={{ marginTop: "60px" }}>
        <Container maxWidth="sm">
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid #F4EFEE",
              padding: "7px 0",
            }}
          >
            <ul style={{ padding: "20px" }}>
              <li>
                <h3>{props.game}</h3>
                <span>{props.idjogo}</span>
                <p>{props.cost}</p>
                <h1>{props.genero}</h1>
                <span>{props.idgenero}</span>
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
                  Cursor: "pointer",
                  fontSize: "22",
                  border: "none",
                }}
              >
                <EditIcon />
              </Button>
              {/* <Button onClick={handleDeleteGame}>
                <DeleteIcon />
              </Button> */}
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
export default GamesList;
