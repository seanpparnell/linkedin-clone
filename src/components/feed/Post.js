import { Avatar } from '@material-ui/core';
import '../styles/Post.css';
import InputOption from '../feed/InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({name, desc, message, photoUrl}) => {
  return(
    <>
      <div className="post">
        <div className="post__header">
          <Avatar />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color='grey' />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color='grey' />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color='grey' />
          <InputOption Icon={SendOutlinedIcon} title="Send" color='grey' />
        </div>
      </div>
    </>
  )
}

export default Post;