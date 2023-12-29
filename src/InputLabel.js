import "./InputLabel.css";

export default function InputLabel(props){
    return (
        <tr className="input-label">
            <td className="td-label"><label htmlFor={props.name} className="label">{props.label}</label></td>
            <td className="td-input"><input className="input-text" type={props.type} id={props.id} name={props.name} /></td>
        </tr>
    )
}