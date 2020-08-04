import React, {useState} from 'react';
import Navbar from './Navbar';
import Menu from './Menu';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => setOpen(!open);

  return (
    <>
      <Navbar open={open} handleBurgerClick={handleBurgerClick} />
      <Menu open={open} />
    </>
  );
};

export default Nav;
