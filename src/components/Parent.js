import { useState } from 'react'
import $ from 'jquery';
import Child from './Child'

const Parent = () => {
    var set= 0;
    var html = $("<div />").append($("#dropdown-second").clone()).html();
    var strip = html.replace(/<(.|\n)*?>/g, '');

    const [fruits,setFruit] = useState('')
    const [vegetables,setVegetables] = useState('')
    const onChangeFruit = () => {
        var x = document.getElementById("Fruits").value;
        setFruit(x);
        $('#dropdown-second').append('<option value='+x+'>'+x+'</option>');
        alert("Pupulated to second dropdown :" + x);
      
    }
    const onChangeVegetables = () => {
        var x = document.getElementById("Vegetables").value;
        $('#dropdown-second').append('<option value='+x+'>'+x+'</option>');
        setVegetables(x);
        alert("Populated to second dropdown :" + x);
    }
 
     
    
    return (
        <form className="container" >
            <h3>Parent</h3>
            <h3>Dropdown 1</h3>
            <select name="Fruits" id="Fruits" onChange={onChangeFruit}>
            <option>Fruits</option>
                <option value="Mango">Mango</option>
                <option value="Peach">Peach</option>
                <option value="Grapes">Grapes</option>
                <option value="Strawberry">Strawberry</option>
                <option value="Orange">Orange</option>
            </select> 
            <select name="Vegetables" id="Vegetables" onChange={onChangeVegetables}>
            <option value="#">Vegetables</option>
                <option value="Brocolli">Brocolli</option>
                <option value="Lettuce">Lettuce</option>
                <option value="Carrot">Carrot</option>
                <option value="Potato">Potato</option>
                <option value="Cabbage">Cabbage</option>
            </select>
            <h3>Dropdown 2</h3>
            <select name="dropdown-second" id="dropdown-second">
                <option value="#"></option>
            </select>
            <div className="form-control">
            <button type="button" id="submit" value="Add">Add</button>  
            </div> 
            <Child html={strip} />
        </form>
      

    )
}

export default Parent
