import { alpha } from "@material-ui/core";
import {
  Collapse,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import AddCardorListText from "./AddCardorListText";

const AddCardorList = ({ type }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AddCardorListText type={type} setOpen={setOpen}/>
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCardorListText} onClick={()=>setOpen(true)}>
          <Typography>
            {type === "card" ? "+ Add a card" : "+ Add another list"}
          </Typography>
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
    "&:hover": {
      backgroundColor: alpha("#000", 0.25),
    },
  },
}));

export default AddCardorList;
