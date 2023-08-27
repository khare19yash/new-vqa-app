import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const VQAHeader = ({ datasets, onDatasetClick, selectedDataset = "roco" }) => {
  return (
    <Box px={8} py={2} display={"flex"}>
      <Box>
        <Typography variant="h5">AskMediScan</Typography>
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
