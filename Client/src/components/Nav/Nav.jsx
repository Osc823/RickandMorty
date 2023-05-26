import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'

const Nav = ({onSearch}) =>{
    return(
        <div className={style.nav}>
            <button className={style.boton} >
                <Link to='/home'>Home</Link>
            </button>
            <button className={style.boton}>
                <Link to='/about'>About</Link>
            </button>
            <button className={style.boton} >
                <Link to='/favorites'>Favorites</Link>
            </button>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;