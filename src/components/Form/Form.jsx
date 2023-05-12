import {useState} from 'react'
import validacion from '../../validation';
import style from'./Form.module.css';

const Form = ({login}) =>{

    const [ userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) =>{
       setUserData({
        ...userData,
        [event.target.name]: event.target.value
       });

       setErrors(validacion({
        ...userData,
        [event.target.name]: event.target.value
       }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <div>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <img src="https://wallpaperaccess.com/full/637645.jpg" alt="" />
                <label htmlFor="email" >Email</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                <hr/>
                <label htmlFor="password" >Password</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;