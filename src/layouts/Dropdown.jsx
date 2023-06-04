import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Contexto from '../context/contexto';

const DropdownComponent = () => {
  const { estado, deslogearme } = useContext(Contexto);
  const navigate = useNavigate();

  const handleLogout = () => {
    deslogearme();
    navigate('/', { replace: true });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
        {estado ? 'Logout' : 'Login'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {estado ? (
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        ) : (
          <Dropdown.Item onClick={handleLogin}>Login</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
