import React, {useState} from 'react';

const UserForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    
    
    const processSubmit = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        setHasBeenSubmitted(true)
        clearForm ()
    }

    const clearForm = () => {
        setFirstName("");
        setLasttName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    }


    return(

        <div>

            {
                hasBeenSubmitted?
                <h1>Thank you for submitting the form!</h1>:
                <h1>Please fill in the form!</h1>
            }

            <h3>Form</h3>

            <form onSubmit={processSubmit}>

                <div>
                    <label> First Name: </label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                </div>

                <div>
                    <label> Last Name: </label>
                    <input type="text" name="" onChange={(e) => setLasttName(e.target.value)} value={lastName}></input>
                </div>

                <div>
                    <label> Email: </label>
                    <input type="text" name="" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>

                <div>
                    <label> Password: </label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>

                <div>
                <label> Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                </div>

                {/* <button>Submit</button> */}

                {/* or */}

                <input type="submit" value="Submit"></input>

            </form>

            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>


        </div>

    );
}

export default UserForm;