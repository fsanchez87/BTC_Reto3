import "./App.css";
import TrelloList from "./components/TrelloList";
import { makeStyles } from "@material-ui/core";
import background_image from "./images/background.jpg";
import AddCardorList from "./components/AddCardorList";
import mockData from "./mockdata.js";
import { useState } from "react";

function App() {
  const classes = useStyles();
  const [data, setData] = useState(mockData);
  console.log(data);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {data.listIds.map((listID) => {
          const list = data.lists[listID];
          return <TrelloList list={list} key={listID} />;
        })}

        <div>
          <AddCardorList type="list" />
        </div>
      </div>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    overflowY: "auto",
    backgroundImage: `url(${background_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    display: "flex",
  },
}));
