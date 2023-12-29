import "./Panel.css";
import InputLabel from "./InputLabel.js";
import Button from "./Button.js";

export default function Panel(){
    return(
        <div className="intern-panel">
            <span className="change">Change your World</span>
            <table>
                <tbody>
                    <InputLabel label="Login" type="text" id="login" name="login" />    
                    <InputLabel label="Password" type="password" id="password" name="password" />
                </tbody>
            </table>
            <Button className="custom-button">Login</Button>
        </div>
    )
}