import './TextPlace.css'



const TextPlace = (props) => {

    return(
        <div className="TextPlace">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextPlace