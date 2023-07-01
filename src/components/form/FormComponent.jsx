import { Container, Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Input from '../Input';
import useForm from './useForm';
import { useFormState } from '@/redux';

function FormComponent() {
  const { isVisible } = useFormState();
  const { handleChange, handleSubmit, form } = useForm();
  const { base, capitalPayment, interestRate } = form;

  return (
    <Container className={!isVisible && 'd-none'}>
      <Card className='shadow'>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Input
              label='Base'
              type='number'
              className='mb-3'
              name='base'
              value={base}
              handleChange={handleChange}
            />
            <Input
              label='Interes (%)'
              type='number'
              className='mb-3'
              name='interestRate'
              value={interestRate}
              handleChange={handleChange}
            />
            <Input
              label='Abono'
              type='number'
              className='mb-3'
              name='capitalPayment'
              value={capitalPayment}
              handleChange={handleChange}
            />
            <Button
              type='submit'
              variant='secondary'
              className='d-block mx-auto'
            >
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FormComponent;
