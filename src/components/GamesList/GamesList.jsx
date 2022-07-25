import { Box, Card, Grid, Container } from "@mui/material";
import React from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function GamesList() {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    api
      .get("/games")
      .then((res) => {
        setDados(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box sx={{ marginTop: "60px" }}>
      <Container maxWidth="sm">
        <Card sx={{ padding: "20px" }}>
          <ul>
            {dados &&
              dados.map((item) => (
                <Grid
                  sx={{
                    border: "1px solid #e7e7e7",
                    padding: "10px 20px",
                    marginTop: "-1px",
                  }}
                >
                  <li key={item.id}>
                    <Link to="/single-product">
                      <h2 sx={{ marginBottom: "8px" }}>{item.game}</h2>
                    </Link>
                    <p>R$ {item.cost}</p>
                    <p>{item.category}</p>
                  </li>
                </Grid>
              ))}
          </ul>
        </Card>
      </Container>
    </Box>
  );
}

export default GamesList;
