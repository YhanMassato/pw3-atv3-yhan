import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Create() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const userId = 1

    function createItem(event)
    {
        event.preventDefault();
        let item = JSON.stringify({title:title, body:body, userId:userId});
    


    axios.post('https://jsonplaceholder.typicode.com/posts', item)
        .then((response) => {
            console.log(response)
            alert(response)
        })
        .catch((error) =>{
            console.log(error);  
        })


    }

    return(
        <div className="form-card">
            <form onSubmit={createItem} className='form'>
                <h1>Criação de Itens</h1>

                <input 
                type='text'
                placeholder='Insira o título do seu item'
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}/>

                <input
                type='text'
                placeholder='Insira o conteúdo do item'
                value={body}
                onChange={(event) => {setBody(event.target.value)}}
                />

                <input type='submit' className="form-button" value="Criar"/>
            </form>
        </div>
    )
}