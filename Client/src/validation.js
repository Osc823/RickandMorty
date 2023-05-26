const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validacion = (userData) =>{
    const errors = {};

    if (!regexEmail.test(userData.email)) {
        errors.email = 'Rey/Reyna el email ingresado no es valido'
    }
    if (!userData.email) {
        errors.email = 'Debe ingresar un email'
    }
    if (userData.email.length > 35) {
        errors.email = 'El email no debe superar los 35 caracteres'
    }

    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'la contraseña tiene que tener al menos un número.'
    }
    if (userData.password.length < 6 && userData.password.length > 10) {
        errors.password ='la contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }

    return errors;
}
export default validacion;