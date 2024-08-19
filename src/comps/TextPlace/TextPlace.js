import './TextPlace.css'



const TextPlace = (props) => {
    
    const digit=(event)=>{
        props.onAtt(event.target.value)
    }

    return(
        <div className="TextPlace">
            <label>{props.label}</label>
            <input value={props.valueA} onChange={digit} required={props.mandatory} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextPlace