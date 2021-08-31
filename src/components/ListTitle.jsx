import { InputBase, makeStyles, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useContext, useState } from "react";
import ContextAPI from "../ContextAPI";

const ListTitle = ({ title, listId }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const {updateListTitle} = useContext(ContextAPI)

  const handleBlur = () => {
    // udpate title to newTitle
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <InputBase
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          fullWidth
          inputProps={{ className: classes.input }}
        />
      ) : (
        <div className={classes.title}>
          <Typography
            className={classes.titleText}
            onClick={() => setOpen(true)}
          >
            {title}
          </Typography>
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
