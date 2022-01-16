import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Paper, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [];


export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Invoice</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Bill No</TableCell>
            <TableCell>Guest Name</TableCell>
            <TableCell>Party Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.billNo}</TableCell>
              <TableCell>{row.guestName}</TableCell>
              <TableCell>{row.partyName}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell align="right">{`Rs {row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Create Invoice</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Print Invoice</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent>List - Coming Soon...!!!</TimelineContent>
      </TimelineItem>

    </Timeline>
    </React.Fragment>
  );
}