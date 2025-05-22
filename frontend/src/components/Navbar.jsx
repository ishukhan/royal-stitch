import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
const Navbar = ({containerStyles,onLinkClick }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={"/"}onClick={()=>{onLinkClick; handleClick()}} className={({isActive})=> isActive ? "active_link": ""}>
        <div className="flexCenter gap-x-1">
          <MdHomeFilled /> Home
        </div>
      </NavLink>
      <NavLink to={"/mens"} onClick={()=>{onLinkClick; handleClick()}}className={({isActive})=> isActive ? "active_link": ""}>
        <div className="flexCenter gap-x-1">
          <MdCategory /> Men
        </div>
      </NavLink>
      <NavLink to={"/womens"} onClick={()=>{onLinkClick; handleClick()}}className={({isActive})=> isActive ? "active_link": ""}>
        <div className="flexCenter gap-x-1">
          <MdShop2 /> Women
        </div>
      </NavLink>
      <NavLink to={"/kids"} onClick={()=>{onLinkClick; handleClick()}}className={({isActive})=> isActive ? "active_link": ""}>
        <div className="flexCenter gap-x-1">
          <MdContacts /> Kids
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
