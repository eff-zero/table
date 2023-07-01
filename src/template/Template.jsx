import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Template({ children }) {
  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      {children}
    </Container>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
