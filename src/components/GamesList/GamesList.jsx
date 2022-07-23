import React from "react";
import axios from "axios";

function GamesList() {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("http://localhost:3333/games")
      .then((res) => {
        setDados(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ul>
        {dados &&
          dados.map((item) => (
            <li key={item.id}>
              <p>{item.game}</p>
              <p>R$ {item.cost}</p>
              <p>{item.category}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GamesList;
