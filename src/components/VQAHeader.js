import { Box, Chip, TextField, Typography } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import EastIcon from "@mui/icons-material/East";

const VQAHeader = ({
  datasets,
  onDatasetClick,
  searchQueury,
  onChangeSearch,
  selectedDataset,
}) => {
  return (
    <Box
      px={8}
      py={1}
      pb={1}
      display={"flex"}
      alignItems={"center"}
      position={"fixed"}
      top={0}
      width={1}
      zIndex={100}
      bgcolor={"#e8efeb"}
    >
      <Box>
        <img src={"/logo.svg"} style={{ height: 48 }} />
      </Box>
      <Box px={2} width={0.4}>
        <TextField
          fullWidth
          id="standard-basic"
          placeholder="Chest, Brain, Tumor...."
          variant="standard"
          value={searchQueury}
          onChange={onChangeSearch}
        />
      </Box>
      <Box flexGrow={1} />
      {!selectedDataset && (
        <Box pr={3} display={"flex"} gap={2} className="fade-in-out" borderRadius={"16px"}  py={1} px={2} mr={2}>
          <Typography>Select dataset</Typography>
          <EastIcon />
        </Box>
      )}

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

const styles = {};

export default VQAHeader;
