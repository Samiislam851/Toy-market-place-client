import React  from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <>
            <NavLink
  to={to}
  className={({ isActive, isPending }) =>
    isActive ? "text-yellow-300" : "text-white"
  }
>
  {children}
</NavLink> 
        </>
    );
}

export default ActiveLink;
