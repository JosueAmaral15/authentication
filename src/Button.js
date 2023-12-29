import "./Button.css";
export default function Button({className, children}){
    return(
        <button className={`button ${className}`}>{children}</button>
    )
}