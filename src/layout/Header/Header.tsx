import Profile from "../../components/common/Profile/Profile"
import NavList from "../../components/NavList/NavList"
import { mockProfile } from "./Header.static"

const HeaderLayout = () => {
    return (
        <div className="w-full h-full flex items-center gap-2">
            <a href="/" className="logo max-w-[100px] h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://i.ibb.co/NncBFhk/MyCV.png"
                    alt="logo"
                />
            </a>
            <div className="searchBar border">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                </label>
            </div>
            <div className="navbar mx-3"><NavList /></div>
            <div className="profile h-full py-2 font-semibold cursor-pointer"><Profile profile={mockProfile}/></div>
        </div>
    )
}

export default HeaderLayout
