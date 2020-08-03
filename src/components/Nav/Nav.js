import React, {useState} from 'react'
import Navbar from './Navbar'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handleBurgerClick = () => setOpen(!open)

  console.log(handleBurgerClick)

  return (
    <>
      <Navbar open={open} handleBurgerClick={handleBurgerClick} />
    </>
  )
}

export default Nav
