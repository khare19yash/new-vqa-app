import { Box, Chip, TextField, Typography } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const VQAHeader = ({ datasets, onDatasetClick, searchQueury, onChangeSearch, selectedDataset = "roco" }) => {
  return (
    <Box px={8} py={1} pb={0} display={"flex"} alignItems={"center"}>
      <Box>
        <img src={"/logo.svg"} style={{height: 48}} />
      </Box>
      <Box px={2} width={.4} >
        <TextField fullWidth id="standard-basic" placeholder="Search" variant="standard" value={searchQueury} onChange={onChangeSearch} />
      </Box>
      <Box flexGrow={1} />
      <Box gap={2} display={"flex"}>
        {datasets.map((dataset) => (
          <Chip
            variant={selectedDataset === dataset.id ? "filled" : "outlined"}
            icon={selectedDataset === dataset.id ? <DoneIcon /> : null}
            label={dataset.label}
            onClick={() => onDatasetClick(dataset.id)}
            color={selectedDataset === dataset.id ? "primary" : "default"}
          />
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  header: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.5rem",
    margin: 0,
  },
  nav: {},
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  navItem: {
    marginLeft: "1rem",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
    color: "#fff",
    cursor: "pointer",
  },
};

export default VQAHeader;
