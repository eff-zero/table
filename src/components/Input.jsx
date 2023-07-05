import { FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Input({ type, label, className, handleChange, name, value, error }) {
  return (
    <>
      <FloatingLabel
        controlId='floatingInput'
        label={label}
        className={className}
      >
        <Form.Control
          type={type}
          placeholder=' '
          value={value}
          name={name}
          onChange={handleChange}
        />
        {error && (
          <span
            className='text-danger fw-lighter p-2'
            style={{ fontSize: '14px' }}
          >
            {/* <FontAwesomeIcon icon={faCircleExclamation} /> */}
            {error}
          </span>
        )} {/** Esto se puede pasar a un componente */}
      </FloatingLabel>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
