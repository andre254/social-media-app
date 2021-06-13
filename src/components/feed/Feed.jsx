import { Posts } from '../../dummyData'
import Share from '../../pages/home/share/Share'
import Post from '../post/Post'
import './feed.css'

const Feed = () => {
    return (
        <div className="feed">
           <div className="feedWrapper">
               <Share/>
               {Posts.map((p) => (
                <Post key={p.id} post={p}/>
               ))}
           </div>
        </div>
    )
}

export default Feed
