import React, { useEffect } from "react";

import { Container } from "./styles";
import { api } from "../../services/api";

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de webiste</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Alimentação</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de webiste</td>
            <td className="withdraw">R$ 1000,00</td>
            <td>Alimentação</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de webiste</td>
            <td>R$ 1000,00</td>
            <td>Alimentação</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
