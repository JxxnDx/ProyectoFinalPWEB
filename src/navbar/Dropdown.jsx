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


// import React from 'react';
// import { Dropdown } from 'react-bootstrap';
// import { NavLink, useNavigate, Outlet } from "react-router-dom";
// /**import Login from "../paginas/login";*/
// import { useContext } from "react";
// import Contexto from "../context/contexto";


// const DropdownComponent = ({ Logout }) => {
//   const navegacion = useNavigate();
//   const handleLogout =()=>{
    
//     navegacion('/',{replace:true})
//     deslogearme()
// }
//   const { logeado, deslogearme } = useContext(Contexto);
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
//         {logeado ? 'Logout' : 'Login'}
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         {logeado ? (
//           <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//         ) : (
//           <Dropdown.Item>Login</Dropdown.Item>
//         )}
//       </Dropdown.Menu>
//     </Dropdown>
//     // <Dropdown>
//     //   <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
//     //     Dropdown
//     //   </Dropdown.Toggle>
//     //   <Dropdown.Menu>
//     //     <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
//     //     <Dropdown.Item href="#">Another action</Dropdown.Item>
//     //     <Dropdown.Item href="#">Something else here</Dropdown.Item>
//     //   </Dropdown.Menu>
//     // </Dropdown>
//   );
// };

// export default DropdownComponent;
