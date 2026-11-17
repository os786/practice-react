//Named exports- open file can export small components
//Import them with curly braces- import{Badge, Button} from'./ui.jsx'
export function Badge({text, color = 'warm'}){
    return <span className={`badge badge-${color}`}>{text}</span>
}

export function Button({label}){
    return(
        <button type="button" className="btn">
            {label}
        </button>
    )
}