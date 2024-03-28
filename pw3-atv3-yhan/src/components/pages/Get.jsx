import { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'

export default function Get() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
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
            <h1>Bem vindo à pagina de GET</h1>

            <div className="boxL">
                <h1>Nesta página é possível encontrar todos os elementos contidos no JSON fornecido pela api através do GET.</h1>
            </div>{/* boxL */}

                <div className="boxR" >
                    {
                            <div className='card' key={users.id}>
                                <h1 className='card-title'>{users.title}</h1>
                                <p className='card-body'>{users.body}</p>
                            </div>
                    }
            </div>{/* boxR */}
        </>
    )
}