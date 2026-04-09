import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import ComponentSection from './ComponentSection';

const ROWS = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Dan Brown', email: 'dan@example.com', role: 'Editor', status: 'Pending' },
  { id: 5, name: 'Eva Garcia', email: 'eva@example.com', role: 'Admin', status: 'Active' },
];

const STATUS_COLOR: Record<string, 'success' | 'error' | 'warning'> = {
  Active: 'success',
  Inactive: 'error',
  Pending: 'warning',
};

export default function TablesShowcase() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <ComponentSection
      title="Tables"
      description="Header uses tableHeader (14px/500), body uses body2 (14px/400). Dividers use the Other/Divider token."
    >
      {/* Standard Table */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Standard Table
      </Typography>
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>{row.name}</Typography>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={STATUS_COLOR[row.status]}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={ROWS.length}
          page={page}
          onPageChange={(_, p) => setPage(p)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>

      {/* Dense Table */}
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Dense Table
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.slice(0, 3).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Elevated Table */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Elevated Table
        </Typography>
        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'action.hover' }}>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ROWS.slice(0, 3).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={STATUS_COLOR[row.status]} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ComponentSection>
  );
}
