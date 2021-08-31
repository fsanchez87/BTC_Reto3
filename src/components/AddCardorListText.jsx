import {
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { alpha } from "@material-ui/core";
import ContextAPI from "../ContextAPI";

const AddCardorListText = ({ type, setOpen, listId }) => {
  const [title, setTitle] = useState("");
  const classes = useStyles();
  const { addCard, addList } = useContext(ContextAPI);

  const handleAddCardorList = () => {
    if (type === "card") {
      addCard(title, listId);
    } else {
      addList(title);
    }
    setTitle("");
    setOpen(false);
  };

  return (
    <>
      <Paper className={classes.card}>
        <InputBase
          multiline
          value={title}
          onBlur={() => setOpen(false)}
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
          <Button className={classes.btnConfirm} onClick={handleAddCardorList}>
            {type === "card" ? "Add card" : "Add list"}
          </Button>
          <IconButton onClick={() => setOpen(false)}>
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
      background: alpha("#5aac44", 0.75),
    },
  },
}));

export default AddCardorListText;
