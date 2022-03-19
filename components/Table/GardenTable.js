import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

import SetTableHead from "./SetTableHead";

const GardenTable = (props) => {
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const data = props.data

  const onAllRowsSelected = () => {
    setSelectAll(true);
    console.log("All Selected worked");
  };

  const onItemSelect = (id) => {
    setSelectedItems([...selectedItems, id]);
  };

  return (
    
    <div className="flex flex-col">
      <h1 className="justify-center m-auto text-grape font-semibold mt-3 text-[24px] underline">
        {" "}
        Portfolio{" "}
      </h1>

      <div
        id="gardenTable"
        className="m-auto overflow-y-scroll overflow-x-scroll h-80 mt-9"
      >
        <TableContainer>
          <Table>
            <SetTableHead onAllRowsSelected={onAllRowsSelected} />
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Checkbox />
                  </TableCell>


                  <TableCell align="right">{row.PlantType}</TableCell>
                  <TableCell align="right">{row.PlantName}</TableCell>
                  <TableCell align="right">{row.PlantAge}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default GardenTable;
