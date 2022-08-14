import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "grey",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PollPage() {
  const [names, setNames] = useState(["Participant1"]);
  const [choices, setChoices] = useState(["", ""]);
  const [items, setItems] = useState(["", ""]);
 

  const handleChoices = (value, index) => {
    choices[index] = value;
    setChoices(choices);
  };

  const handleOptions = (value, index) => {
    items[index] = value;
    setItems(items);
  };

  const handleInput = (value, index) => {
    const namesCopy = names.slice();
    namesCopy[index] = value;
    setNames(namesCopy);
  };

  const addNames = () => {
    setNames(names.concat(""));
  };
  return (
    <div style={{ padding: "20px" }}>
      <div className="title-desc-style">
        <h1>Title:</h1>
        <h3>Description:</h3>
      </div>
      <TableContainer
        component={Paper}
        sx={{ marginTop: "50px", marginBottom: "10px" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Participants</StyledTableCell>
              {items.map((item, index) => {
                return (
                  <StyledTableCell
                    align="center"
                    key={index}
                    onChange={(e) => handleOptions(e.target.value, index)}
                  >
                    item {index + 1}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((name, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <TextField
                    value={name}
                    onChange={(e) => handleInput(e.target.value, index)}
                    sx={{ width: "200px" }}
                    size="small"
                    label="Name:"
                  />
                  <br />
            
                </StyledTableCell>
                {choices.map((choice, index) => {
                  return (
                    <StyledTableCell align="center" key={index}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={choice}
                          onChange={(e) => handleChoices(e.target.value, index)}
                        >
                          <FormControlLabel
                            control={<Radio value={choice} />}
                         
                          />
                       
                        </RadioGroup>
                      </FormControl>
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="inherit"
        size="medium"
        onClick={addNames}
      >
        Add
      </Button>
    </div>
  );
}