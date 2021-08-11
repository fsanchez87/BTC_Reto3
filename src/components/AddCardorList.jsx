import {
  Collapse,
  fade,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const AddCardorList = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Collapse in={open}>
        <h1>Abierto</h1>
      </Collapse>
      <Collapse in={!open}>
        <h1>Cerrado</h1>
      </Collapse>
    </div>
  );
};

export default AddCardorList;
