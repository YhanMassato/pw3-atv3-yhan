import { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'

export default function List() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => {
                    console.log(response);
                    setUsers(response.data)
                }
            )
            .catch(error => { console.log(error); })
    }, [])


    return (
        <>
            <h1>Bem vindo à pagina de LIST</h1>

            <div className="boxL">
                <h1>Nesta página é possível encontrar todos os elementos contidos no JSON fornecido pela api através do LIST.</h1>
            </div>{/* boxL */}

            <div className="boxR" >
                {
                    users.map(user => (
                        <div class='card' key={user.id}>
                            <h1 class='card-title'>{user.title}</h1>
                            <p class='card-body'>{user.body}</p>
                        </div>
                    ))
                }
            </div>{/* boxR */}
        </>
    )
}