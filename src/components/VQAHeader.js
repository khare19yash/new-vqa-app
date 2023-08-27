import { Box, Chip, TextField, Typography } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const VQAHeader = ({ datasets, onDatasetClick, searchQueury, onChangeSearch, selectedDataset = "roco" }) => {
  return (
    <Box px={8} py={1} pb={0} display={"flex"} alignItems={"center"} position={"fixed"} top={0} width={1}>
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
};

export default VQAHeader;
