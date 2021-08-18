import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import AddCardorList from "./AddCardorList";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";

const TrelloList = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <ListTitle />
      <TrelloCard />
      <TrelloCard />
      <TrelloCard />
      <AddCardorList type="card" />
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    background: "#ebecf0",
    margin: theme.spacing(1),
  },
}));

export default TrelloList;
