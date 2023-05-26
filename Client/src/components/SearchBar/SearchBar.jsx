import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar = ({onSearch}) =>{

   const [id, setId] = useState('');
   
   const handleChange = (event) =>{
      setId(event.target.value);
   }
   
   return (
      <div className={style.contenedor}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
export default SearchBar;