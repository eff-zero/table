import { useFormState } from '@/redux';
import { Container, Table } from 'react-bootstrap';

function TableComponent() {
  const { isVisible: formIsVisible } = useFormState();
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
          <tr>
            <td>1</td>
            <td>3.000.000</td>
            <td>240.000</td>
            <td>300.000</td>
            <td>540.000</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default TableComponent;
