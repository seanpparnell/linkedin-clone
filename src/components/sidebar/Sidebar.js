import { Avatar } from '@material-ui/core';
import '../styles/Sidebar.css';


const Sidebar = () => {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return(
    <>
      <div className="sidebar">
        
        <div className='sidebar__top'>
          <img src='https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmJvd3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' alt='background'/>
          <Avatar className='sidebar__avatar'/>
          <h2>Alex Balboa</h2>
          <h4>alex.a.balboa@email.com</h4>
          
        </div>

        <div className='sidebar__stats'>
          <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>1,576</p>
          </div>
          <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>398</p>
          </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
            
        </div>
      </div>
    </>
  )
}

export default Sidebar;