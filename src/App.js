import "./App.css";
import TrelloList from "./components/TrelloList";
import { makeStyles } from "@material-ui/core";
import background_image from "./images/background.jpg";
import AddCardorList from "./components/AddCardorList";
import mockData from "./mockdata.js";
import { useState } from "react";

import ContextAPI from "./ContextAPI";

function App() {
  const classes = useStyles();
  const [data, setData] = useState(mockData);
  console.log(data);

  const updateListTitle = (data) => {};

  return (
    <ContextAPI.Provider>
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
    </ContextAPI.Provider>
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
