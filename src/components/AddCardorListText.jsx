import {
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { fade } from "@material-ui/core";

const AddCardorListText = ({ type }) => {
  const [title, setTitle] = useState("");
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.card}>
        <InputBase
          multiline
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={
            type === "card"
              ? "Enter a title for this card..."
              : "Enter list title"
          }
          inputProps={{ className: classes.input }}
        />
      </Paper>
      <div className={classes.confirm}>
        <div className={classes.options}>
          <Button className={classes.btnConfirm}>
            {type === "card" ? "Add card" : "Add list"}
          </Button>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </div>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    display: "flex",
    margin: theme.spacing(0, 1, 1, 1),
  },
  options: {
    flexGrow: 1,
  },
  btnConfirm: {
    background: "#5aac44",
    color: "#fff",
    "&:hover": {
      background: fade("#5aac44", 0.75),
    },
  },
}));

export default AddCardorListText;
