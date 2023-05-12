import axios from "axios";
import { useParams, Link  } from "react-router-dom";
import { useState , useEffect } from "react";
import style from './Detail.module.css';


const Detail = () =>{
    const [character , setCharacter] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return(
        <div className={style.container} >

            <div>
              <div>
                <h1>{character?.name}</h1>
              </div>

              <div className={style.detail} >
                

                <div>
                  <label htmlFor="status">Status: </label>
                  <p>{character?.status}</p>
                  <label htmlFor="specie">Specie: </label>
                  <p>{character?.species}</p>
                  <label htmlFor="gender">Gender: </label>
                  <p>{character?.gender}</p>
                  <label htmlFor="origin">Origin: </label>
                  <p>{character?.origin?.name}</p>
                </div>
                <div className={style.containerImg} >
                  <img src={character?.image} alt={character?.name} />
                </div>
              </div>
            </div>
        </div>
    )
}
export default Detail;