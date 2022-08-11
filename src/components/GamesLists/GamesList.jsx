import React from "react";
import api from "../../services/api";
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
        id={props.id}
        game={props.game}
        cost={props.cost}
        category={props.category}
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
                <span>{props.id}</span>
                <h3>{props.game}</h3>
                <p>{props.cost}</p>
                <p>{props.category}</p>
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
