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
  return (
    <div>
      <Collapse in={open}>
        <AddCardorListText />
      </Collapse>
      <Collapse in={!open}>
        <h1>Cerrado</h1>
      </Collapse>
    </div>
  );
};

export default AddCardorList;
