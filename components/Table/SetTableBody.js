import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";

const SetTableBody = (props) => {
  let data = props.data;


  function handleClick(event, id){
    event.stopPropagation();
    props.onItemSelect(id)
  }

  return ( 
    <TableBody>
      {data.map((plant) => {
        <TableRow key={plant.toString()} hover={true}>
          <TableCell key={"select"} padding="checkbox">
            <Checkbox
              checked={props.isItemSelected}
              onClick={(event) => handleClick(event, plant.id)}
            />
          </TableCell>
        </TableRow>;
      })}
    </TableBody>
  );
};

export default SetTableBody;
