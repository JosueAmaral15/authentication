import "./ExternLink.css";

export default function ExternLink({message, link}){
    return (
        <a href={link} className="message">{message}</a>
    )
}