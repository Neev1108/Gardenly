import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";

import SetTableHead from "./SetTableHead";

const GardenTable = (props) => {
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);
  // Some fake data

  //const data = props.portfolio

  let data = [
    { name: "Rose", type: "Flower", id: 1, age: 10 },
    { name: "LI", type: "HI", id: 6, age: 10 },
  ];

  const onAllRowsSelected = () => {
    setSelectAll(true);
    console.log("ALl Selected worked");
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
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Checkbox />
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
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
