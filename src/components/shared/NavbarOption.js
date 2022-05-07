import '../styles/NavbarOption.css';
import { Avatar } from '@material-ui/core';

const NavbarOption = ({avatar, Icon, title}) => {
  return(
    <>
      <div className='navbarOption'>
        {Icon && <Icon className="navbarOption__icon" />}
        {avatar && (
        <Avatar className="navbarOption__icon" src={avatar} />
        )}
        <h3 className='navbarOption__title'>{title}</h3>
      </div>
    </>
  )
}

export default NavbarOption;