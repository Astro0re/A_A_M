export default function sign_up(){
    return(
        <>
         <div>
            <h3>Sign Up</h3>
            <p>Sign up to this amazing platform for more content and support.</p>
            <div>
                <p>Username</p>
                <input type="text" placeholder="Username" itemID="cust_user_name"></input>
                <p>Email</p>
                <input type="email" placeholder="email" itemID="cust_email"></input>
                <p>Password</p>
                <input type="password" placeholder="Create Password" itemID="cust_password"></input>
                <p>Confirm Password</p>
                <input type="password" placeholder="Confirm Password" itemID="confirm_pass"></input>
                <button type="submit" onClick={pass_confirm}></button>
            </div>
            <p>Courtesy of __ Group</p>
         </div>
        </>
    )
}

function pass_confirm(){
       if (document.getElementById('cust_password') != document.getElementById('confirm_pass'))
        return alert("Password does not match...")
}