import { Container, Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Input from '../Input';
import useForm from './useForm';
import { useFormState } from '@/redux';

function FormComponent() {
  const { isVisible } = useFormState();
  const { handleChange, handleSubmit, form, errors } = useForm();
  const { base, capitalPayment, interestRate } = form;
  const { isInvalid } = errors;

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
              error={errors.base}
              handleChange={handleChange}
            />
            <Input
              label='Interes (%)'
              type='number'
              className='mb-3'
              name='interestRate'
              value={interestRate}
              error={errors.interestRate}
              handleChange={handleChange}
            />
            <Input
              label='Abono'
              type='number'
              className='mb-3'
              name='capitalPayment'
              value={capitalPayment}
              error={errors.capitalPayment}
              handleChange={handleChange}
            />
            <Button
              type='submit'
              variant='secondary'
              className='d-block mx-auto'
              disabled={isInvalid}
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
