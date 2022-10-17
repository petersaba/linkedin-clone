import './styles.css';
import LoginInput from '../loginInput';

const LoginSection = () => {
    return (
        <section className='main-section'>
            <div>
                <h1>Welcome to your professional community</h1>
                <LoginInput type="text" id="email" name='Email'/>
                <LoginInput type="password" id="password" name='Password'/>
                <button>Sign in</button>
            </div>
            <div>
                <img src="images/login_image.svg" alt="image is not showing" />
            </div>
        </section>
    );  
}

export default LoginSection;