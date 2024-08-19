import './List.css';

const List = (props) => {
    return (
        <div className="List">
            <label>{props.label}</label>
            <select onChange={event => props.aoAtt(event.target.value)} required={props.mandatory} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
}

export default List;