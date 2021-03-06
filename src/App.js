import "./App.css";
import TrelloList from "./components/TrelloList";
import { makeStyles } from "@material-ui/core";
import background_image from "./images/background.jpg";
import AddCardorList from "./components/AddCardorList";
import mockData from "./mockdata.js";
import { useState } from "react";
import uuid from "react-uuid"; // Para generar ID únicos

import ContextAPI from "./ContextAPI";

function App() {
  const classes = useStyles();
  const [data, setData] = useState(mockData);
  console.log(data);

  const updateListTitle = (updatedTitle, listId) => {
    const list = data.lists[listId];
    list.title = updatedTitle;
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    });
  };

  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    // add card
    const list = data.lists[listId];
    // deja la card y añades las newCard
    list.cards = [...list.cards, newCard];
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    });
  };
  const addList = (title) => {
    // nuevo id
    const newListId = uuid();
    setData({
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: {
          id: newListId,
          title,
          cards: [],
        },
      },
    });
  };

  return (
    <ContextAPI.Provider value={{ updateListTitle, addCard, addList }}>
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
