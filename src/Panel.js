import "./Panel.css";
import InputLabel from "./InputLabel.js";
import Button from "./Button.js";
import {useEffect, useState, useRef} from "react";
import ExternLink from "./ExternLink.js";

export default function Panel(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [disapproved, setDisapproved] = useState(false);
    const timeOutRef = useRef(null);

    function onSubmit(event){
        
        if (username.length == 0 || password.length == 0){
            setDisapproved(true);
            event.preventDefault();
        } else {
            setPassword("ENCRYPTED :^)");
        }
    }

    useEffect(()=> {
        timeOutRef.current = setTimeout(() =>{setDisapproved(false)},8000);
        return () => clearInterval(timeOutRef.current);
    }, [disapproved]);

    return(
        <section className="extern-panel">
            <form action="https://www.google.com.br" method="get" className="intern-panel" onSubmit={onSubmit}>
                <span className="change">Change your World</span>
                <table>
                    <tbody>
                        <InputLabel label="Login" type="text" id="login" name="login" value={username} onChange={(event)=> setUserName(event.target.value)} />    
                        <InputLabel label="Password" type="password" id="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                    </tbody>
                </table>
                {disapproved && <div className="complete-login-message">Complete the username and password</div>}
                <Button className="custom-button">Login</Button>
            </form>
            <div className="extern-links">
            <ExternLink message="Forgot your password?" link="https://www.google.com.br" />
            <ExternLink message="Don't have an account?" link="https://www.google.com.br" />
            </div>
        </section>
        
    )
}