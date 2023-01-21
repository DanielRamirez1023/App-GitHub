import { Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import MediaQuery from "./MediaQuery";

function Searcher({ setStateInitial, matches }) {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    setStateInitial(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Stack
      direction={matches ? "row" : "column"}
      alignItems="center"
      sx={{ marginTop: "30px", width: "80%" }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub user"
        variant="outlined"
        onChange={handleChange}
        sx={{ width: "90%" }}
        placeholder="octupus"
      ></TextField>

      <Button
        variant="contained"
        sx={{
          marginX: matches ? "10px" : "",
          mt: matches ? "" : "20px",
          width: matches ? "auto" : "100%",
        }}
        onClick={handleSearch}
      >
        Buscar
        <SearchIcon sx={{ marginLeft: "8px" }} />
      </Button>
    </Stack>
  );
}

export default Searcher;
