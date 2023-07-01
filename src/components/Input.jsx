import { FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Input({ type, label, className, handleChange, name, value }) {
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
  value: PropTypes.string
};

export default Input;
