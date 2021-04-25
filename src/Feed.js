import React, { useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'

function Feed() {
    // create state variable for feed
    const [posts, setPosts] = useState([]);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type='submit' >Send</button>
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
            {posts.map((post) => (
                <Post />
            ))}

            <Post 
            name='Nakula Marvellio'
            description="This is a test"
            message="Wow this works well"
            />
        </div>
    )
}

export default Feed
