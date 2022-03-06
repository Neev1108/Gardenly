import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';

const SetTableHead = (props) => {

    const columns = [
        {
        field: "id",
        heading: "Plant Id",
       },
        {
          field: "type",
          heading: "Plant Type",
        },
        {
          field: "name",
          heading: "Plant Name",
        },
        {
          field: "age",
          heading: "Plant Age",
        },
      ]

    return (
        <TableHead>
        <TableRow>
            <TableCell key={'select'}>
                <Checkbox
                    onChange={props.onAllRowsSelected}
                    inputProps={{ 'aria-label': 'Select All Plants' }}
                />
            </TableCell>

            {columns.map((column) => (
                <TableCell key={column.field}>
                    {column.heading}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
    );
}

export default SetTableHead;