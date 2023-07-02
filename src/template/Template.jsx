import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useFormState } from '@/redux';
import { useDispatch } from 'react-redux';
import { backToForm } from '@/redux/features/formSlice';
import PropTypes from 'prop-types';

function Template({ children }) {
  const dispatch = useDispatch();
  const { isVisible: formIsVisible } = useFormState();

  const goBackToForm = () => dispatch(backToForm());

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100 position-relative'>
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        size='2x'
        className={`position-absolute ${formIsVisible && 'd-none'}`}
        style={{ top: '1em', left: '1em', cursor: 'pointer' }}
        onClick={goBackToForm}
      />
      {children}
    </Container>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
