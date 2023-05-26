import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css'
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = ({myFavorites}) =>{

    const [ aux, setAux ] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <h1 className={style.titulo}>Mis Favorites</h1>
                <select className={style.btn} onChange={handleOrder}>
                    <option value="A" className={style.btn1}>Ascendente</option>
                    <option value="D" className={style.btn1}>Descendente</option>
                </select>
                <select className={style.btn} onChange={handleFilter}>
                    <option value="Male" className={style.btn1}>Male</option>
                    <option value="Female" className={style.btn1}>Female</option>
                    <option value="Genderless" className={style.btn1}>Genderless</option>
                    <option value="unknown" className={style.btn1}>unknown</option>
                    <option value="allCharacters" className={style.btn1}>allCharacters</option>
                </select>
            <div className={style.container}>

                {
                    myFavorites?.map(fav => {
                        return(
                        <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                        /> 
                        )
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        myFavorites : state.myFavorites
    }
}   

export default connect(
    mapStateToProps,
    null
 )(Favorites);