import {NavLink} from 'react-router-dom'

function Menu() {
  const toggleActiveLink = ({isActive}) => isActive ? 'activeLink' : 'link'

  return (
    <nav>
      <NavLink className={active => toggleActiveLink(active)} to="." end>Home</NavLink>
      <NavLink className={active => toggleActiveLink(active)} to="courses">Courses</NavLink>
      <NavLink className={active => toggleActiveLink(active)} to="about">About</NavLink>
      <NavLink className={active => toggleActiveLink(active)} to="contacts">Contacts</NavLink>
    </nav>
  )
}

export default Menu