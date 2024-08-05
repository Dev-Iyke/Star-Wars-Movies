import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config"
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Send the form data to the server
        if (email.length > 7 && password.length > 5){
            createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
            const user = userCredential.user
            console.log(user.email)
           })
           .catch((error) => {
            let errorMessage = error.message;
            console.log(errorMessage)
            });
        }
        //console.log('Email:', email, 'Password:', password)
    }
    return ( 
        <div className="sign-up">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label><br/>
                    <input type="password" id="pwd" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to='/'>Login</Link></p>
        </div>
     );
}
 
export default SignUp;