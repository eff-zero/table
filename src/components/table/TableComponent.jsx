import { useFormState } from '@/redux';
import { Container, Table } from 'react-bootstrap';
import { TableLogic } from './TableLogic';
import { useEffect, useState } from 'react';
import { objectEmpty, formatWithLocale } from '@/helper/helpers';

function TableComponent() {
  const { isVisible: formIsVisible } = useFormState();
  const { data: form } = useFormState();
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    if (!objectEmpty(form)) {
      const { base, interestRate, capitalPayment } = form;
      const table = new TableLogic({ base, capitalPayment, interestRate });
      setDataTable(table.generateTable());
    }
  }, [form]);

  return (
    <Container className={formIsVisible && 'd-none'}>
      <Table striped bordered hover className='text-center shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Saldo</th>
            <th>Interes</th>
            <th>Abono Capital</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((el, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{formatWithLocale(el.actualBalance)}</td>
              <td>{formatWithLocale(el.interest)}</td>
              <td>{formatWithLocale(el.capitalPayment)}</td>
              <td>{formatWithLocale(el.interestPlusCapital)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableComponent;
