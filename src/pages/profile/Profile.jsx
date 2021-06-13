import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profileContainer">
            <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/post/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Andrew Nyaware</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi rem quia ipsum corrupti ab ratione, repudiandae facere dignissimos accusamus ut vel libero architecto impedit autem dolorem, provident id iure commodi!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>            
            </div>
        </>
    )
}

export default Profile
