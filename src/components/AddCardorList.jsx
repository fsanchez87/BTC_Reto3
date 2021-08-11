import {
  Collapse,
  fade,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import AddCardorListText from "./AddCardorListText";

const AddCardorList = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AddCardorListText />
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCardorListText}>
          <Typography>+ Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
  },
  addCardorListText: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#ebecf0",
    "&:hover":{
        backgroundColor: fade("#000", 0.25)
    }
  },
}));

export default AddCardorList;
