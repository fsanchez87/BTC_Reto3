import { makeStyles, Paper } from "@material-ui/core";

const TrelloCard = ({ card }) => {
  const classes = useStyles();
  return <Paper className={classes.trelloCard}>{card.title}</Paper>;
};

const useStyles = makeStyles((theme) => ({
  trelloCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default TrelloCard;
