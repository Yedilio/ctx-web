import logo from "../../assets/ctx-logo.jpg"
import {HiSearch} from "react-icons/hi";
import {useState} from "react";
import {AiFillHome} from "react-icons/ai";
import {BsFillBriefcaseFill, BsFillPeopleFill} from "react-icons/bs";
import {BiMessageDetail} from "react-icons/bi";
import {IoMdNotifications} from "react-icons/io";
import userPhoto from "./../../assets/user.jpg"
import {Link, NavLink} from "react-router-dom";

// @ts-ignore
const setActiveLink = ({isActive}) => isActive ? 'global-nav__primary-item-link active' : 'global-nav__primary-item-link';

const Header = () => {
  const [inputActive, setInputActive] = useState(false);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  return (
    <header className="global-nav">
      <div className="global-nav__content">
        <Link to="/">
          <div className="global-logo">
            <img src={logo} alt=""/>
          </div>
        </Link>

        <div className="global-nav-search">
          <div className={`search-global-typeahead` + (inputActive ? ' search-global-typeahead-focused' : '')}>
            <div className="global-nav-typeahead">
              <input className="global-nav-typeahead__input" placeholder="Поиск" role="combobox"
                     onFocus={handleInputFocus}
                     onBlur={handleInputBlur}
                     aria-autocomplete="list" aria-label="Поиск" aria-activedescendant="" aria-expanded="false"
                     type="text"/>
              <div className="global-nav-search-icon">
                <HiSearch/>
              </div>
            </div>

            <button className="search-global-typeahead-btn">
              <HiSearch/>
              <div className="search-global-typeahead-btn-text">Search</div>
            </button>
          </div>
        </div>

        <nav className="global-nav__nav">
          <ul className="global-nav__primary-items">
            <li className="global-nav__primary-item">
              <NavLink to="/feed"  className={setActiveLink}>
                <AiFillHome/>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="global-nav__primary-item">
              <NavLink to="/mynetwork"  className={setActiveLink}>
                <BsFillPeopleFill/>
                <span>My Network</span>
              </NavLink>
            </li>
            <li className="global-nav__primary-item">
              <NavLink to="/jobs"  className={setActiveLink}>
                <BsFillBriefcaseFill/>
                <span>Jobs</span>
              </NavLink>
            </li>
            <li className="global-nav__primary-item">
              <NavLink to="/messaging"  className={setActiveLink}>
                <BiMessageDetail/>
                <span>Messaging</span>
              </NavLink>
            </li>
            <li className="global-nav__primary-item">
              <NavLink to="/notifications"  className={setActiveLink}>
                <IoMdNotifications/>
                <span>Notifications</span>
              </NavLink>
            </li>
            <li className="global-nav__primary-item">
              <button className="global-nav__primary-item-link-btn">
                <img src={userPhoto} alt=""/>
                <span>Profile</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header