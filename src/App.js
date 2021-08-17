import "./App.css";
import TrelloList from "./components/TrelloList";
import { makeStyles } from "@material-ui/core";
import background_image from "./images/background.jpg";
import AddCardorList from "./components/AddCardorList";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TrelloList />
        <TrelloList />
        <TrelloList />
        <div>
          <AddCardorList />
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
