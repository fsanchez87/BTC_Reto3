import { InputBase, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";

const AddCardorListText = () => {
  const [title, setTitle] = useState("");
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <InputBase
        multiline
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a title for this card..."
        inputProps={{ className: classes.input }}
      />
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
      margin: theme.spacing(1)
  }
}));

export default AddCardorListText;
