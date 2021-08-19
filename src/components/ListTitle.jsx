import { InputBase, makeStyles, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useState } from "react";

const ListTitle = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [newTitle, setNewTitle] = useState("Pendiente");
  return (
    <>
      {open ? (
        <InputBase
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          autoFocus
          fullWidth
          inputProps={{ className: classes.input }}
        />
      ) : (
        <div className={classes.title}>
          <Typography className={classes.titleText}>To do</Typography>
          <MoreHorizIcon />
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    margin: theme.spacing(1),
  },
  titleText: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.2.rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));

export default ListTitle;
