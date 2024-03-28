import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Edit() {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const userId = 1

    function updateItem(event) {
        event.preventDefault();
        let item = JSON.stringify({ userId: userId, id: id, title: title, body: body });



        axios.put('https://jsonplaceholder.typicode.com/posts/1', item)
            .then((response) => {
                console.log(response)
                alert("Seus dados foram atualizados com sucesso")
            })
            .catch((error) => {
                console.log(error);
            })


    }

    function deleteItem(event){
        event.preventDefault()
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', id)
            .then((response) => {
                console.log(response)
                alert(`Item ${id} deletado com sucesso`)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function FilterId(id) {
        id = id.replace(/\D/g, "")
        setId(id)
    }

    return (
        <>
            <div className="form-card">
                <form onSubmit={updateItem} className='form'>
                    <h1>Editor de item</h1>

                    <input
                        type='text'
                        placeholder='Edite o título do seu item'
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }} />

                    <input
                        type='text'
                        placeholder='Edite o conteúdo do item'
                        value={body}
                        onChange={(event) => { setBody(event.target.value) }}
                    />

                    <input type='submit' className="form-button" value="EDIT"/>
                </form>
            </div>

            <div className="form-card">
                <form onSubmit={deleteItem} className='form'>
                    <h1>Delete item</h1>

                    <input
                        type='text'
                        placeholder='Insira o ID do item'
                        value={id}
                        onChange={(event) => { FilterId(event.target.value) }}
                    />

                    <input type='submit' className="form-button" value="DELETE"/>
                </form>
            </div>
        </>

    )
}