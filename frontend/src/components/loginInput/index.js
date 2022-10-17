import './styles.css';

const LoginInput = ({ type, id, name }) => {
    return (
        <div className='input-div'>
            <input type={type} id={id} placeholder='this will not show'/>
            <label htmlFor={id}>{name}</label>
        </div>
    );
}

export default LoginInput;