import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function TaxiItems(props) {
  return (
    <React.Fragment>
      {props.taxiItems ? 
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Taxi No.</TableCell>
            <TableCell>Taxi Type</TableCell>
            <TableCell>Basis</TableCell>
            <TableCell>From Date</TableCell>
            <TableCell>To Date</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.taxiItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.taxiNo}</TableCell>
              <TableCell>{row.taxiType}</TableCell>
              <TableCell>{row.basis}</TableCell>
              <TableCell>{row.fromDate}</TableCell>
              <TableCell>{row.toDate}</TableCell>
              <TableCell>{row.rate}</TableCell>
              <TableCell align="right">{`₹${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> : ''}
    </React.Fragment>
  );
}