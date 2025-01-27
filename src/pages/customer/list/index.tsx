import { useCallback, useEffect, useState } from "react";

import {
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { CustomerAddress } from "../../../types/Customer";
import { httpClientFactory } from "../../../adapters/AxiosHttpClientAdapter";
import { CustomerGateway } from "../../../gateways/CustomerGateway";
import CustomTable from "../../../components/CustomTable";

const gateway = new CustomerGateway(httpClientFactory());

function Page() {
  const [customers, setCustomers] = useState<CustomerAddress[]>([]);

  const [total, setTotal] = useState<number>(100);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = useCallback(
    async (
      _event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number
    ) => {
      const response = await gateway.index({
        params: { page: newPage + 1 },
      });

      setCustomers(response.data.data);
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    async (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const response = await gateway.index({
        params: { per_page: parseInt(event.target.value, 10) },
      });

      setCustomers(response.data.data);

      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const handleFecth = useCallback(async () => {
    try {
      const response = await gateway.index();

      setCustomers(response.data.data);
      setTotal(response.data.meta.total);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleFecth();
  }, [handleFecth]);

  // const deleteData = async (id: number | undefined) => {
  //   await api.deleteCustomer(id);
  // };

  return (
    <Container component="main" maxWidth="lg">
      <CustomTable
        pagination={{
          page,
          total,
          rowsPerPage,
          handleChangePage,
          handleChangeRowsPerPage,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Rua</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell>Cidade</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.map((value) => (
            <TableRow
              key={value.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {value.name}
              </TableCell>
              <TableCell>{value.cpf}</TableCell>
              <TableCell>{value.category}</TableCell>
              <TableCell>{value.telephone}</TableCell>
              <TableCell>{value.rua}</TableCell>
              <TableCell>{value.bairro}</TableCell>
              <TableCell>{value.cidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </Container>
  );
}

export default Page;
