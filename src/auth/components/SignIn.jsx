import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../config"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux-toolkit/slices/AuthenticationSlice";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // Handle form submission event and authentication using Firebase Auth
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.length > 7 && password.length > 5){
            signInWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
            const user = userCredential.user
            dispatch(login(user.email))
            navigate('/movies')
            console.log(user.email)
           })
           .catch((error) => {
            let errorMessage = error.message;
            const format = errorMessage.split(' ').pop().replace('(', ' ')
            alert(format.replace(')', ''))

            });
        }
    }

    return ( 
        <div className="sign-in">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label><br/>
                    <input type="password" id="pwd" name="pwd" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
     );
}
 
export default SignIn;