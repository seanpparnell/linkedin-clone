import '../styles/Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAcountIcon from '@material-ui/icons/SupervisorAccount';
import NavbarOption from './NavbarOption.js'; 

const Navbar = () => {

  return(
    <>
      <div className="navbar">
          <div className="navbar__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="">

            </img>
            <div className="navbar__search">
            <SearchIcon />
            <input type="text" />
            </div>
          </div>

          <div className="navbar__right">
            <NavbarOption Icon={HomeIcon} title="Home" />
            <NavbarOption Icon={SupervisorAcountIcon} title="My Network" />
            <NavbarOption Icon={BusinessCenterIcon} title="Work" />
            <NavbarOption Icon={ChatIcon} title="Messaging" />
            <NavbarOption Icon={NotificationsIcon} title="Notifications" />
            <NavbarOption avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" title="me" />
          </div>
      </div>
    </>
  )
}

export default Navbar;