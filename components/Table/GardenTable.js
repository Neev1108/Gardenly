import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import SetTableHead from './SetTableHead'
import SetTableBody from './SetTableBody'

const GardenTable = (props) => {

  const [selectAll, setSelectAll] = React.useState(false)
  const [selectedItems, setSelectedItems] = React.useState([])
  // Some fake data

  //const body_data = props.portfolio

  let body_data = [{name: "Rose", type: "Flower", id: "1"}, {name: "LI", type: "HI", id: "5"}]

  const onAllRowsSelected = () => {
    setSelectAll(true)
    console.log("ALl Selected worked")
  }

  const onItemSelect = (id) => {
    setSelectedItems([...selectedItems, id])
  }
  

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
            <SetTableBody data={body_data} onItemSelect={onItemSelect}/>
          </Table>
        </TableContainer>
        
      </div>
    </div>
  );
};

export default GardenTable;
