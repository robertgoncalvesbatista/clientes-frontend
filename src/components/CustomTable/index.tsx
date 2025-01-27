import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
} from "@mui/material";

type Props = {
  children: React.ReactNode;
  pagination: {
    page: number;
    total: number;
    rowsPerPage: number;
    handleChangePage: (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number
    ) => void;
    handleChangeRowsPerPage: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
};

function CustomTable({ children, pagination }: Props) {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {children}
      </Table>

      <TablePagination
        component="div"
        count={pagination.total}
        page={pagination.page}
        rowsPerPage={pagination.rowsPerPage}
        onPageChange={pagination.handleChangePage}
        onRowsPerPageChange={pagination.handleChangeRowsPerPage}
        lang={"ptBR"}
      />
    </TableContainer>
  );
}

export default CustomTable;
