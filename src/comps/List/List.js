import './List.css'

const List= (props)=> {
    console.log (props.itens)
    return(
            <div class="List">
                <label>{props.label}</label>
                <select required={props.mandatory}>
                    {props.itens.map(item=> { 
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </div>
    );
}
export default List