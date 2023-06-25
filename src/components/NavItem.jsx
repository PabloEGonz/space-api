import { Link, useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ to, children }) => {
  const isActive = useMatch(to);

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default NavItem;
