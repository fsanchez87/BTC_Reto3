import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import AddCardorList from "./AddCardorList";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";

const TrelloList = ({ list }) => {
  console.log(list);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <ListTitle />
      {list.cards.map((card) => (
        <TrelloCard card={card} key={card.id} />
      ))}

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
