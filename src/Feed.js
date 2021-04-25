import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'

function Feed() {
    // create state variable for feed
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    // connect to firebase
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot)=> 
            setPosts(
                snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Nakula Marvellio',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type='submit' >Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7fc15e'/>
                </div>
            </div>


            {/* Posts */}
            {/* everytime i had post, i wanna render out in the screen */}
            {posts.map(({ id, data:{name, description, message, photoUrl }  }) => (
                <Post 
                key= {id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
