import { useState, useEffect } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InputOption from './InputOption';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../feed/Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
    .orderBy( 'timestamp', 'desc')
    .onSnapshot((snapshot) => (
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'hiedi',
      desc: 'pants',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return(
    <>
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
            <form action="">
              <input value={input} onChange={e => setInput(e.target.value)} type="text" />
              <button onClick={sendPost} type='submit'>Send</button>
            </form>
          </div>
          <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
            <InputOption Icon={SubscriptionsIcon} title='Video' color='#B6D6A5' />
            <InputOption Icon={EventNoteIcon} title='Event' color='#E7A33E' />
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#FC9294' />
          </div>
        </div>

        {/* Posts */}
        {posts.map(({id, data: { name, desc, message, photoUrl }}) => (
          <Post 
            key={id}
            name={name}
            desc={desc}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
       
      </div>
    </>
  )
}

export default Feed;