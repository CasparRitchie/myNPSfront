import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';

const Users = () => {
    
    const [usersFromApi, setUsers] = useState([]);

    useEffect((usersFromApi) => {
        (async () => {
            const response = await fetch("http://localhost/api/users");
            const usersFromApi = await response.json();
            setUsers(usersFromApi);
        })();
    }, []); 

    return (
        
        <div>
       <Header/>
            <h2>User list</h2> 
            {usersFromApi.map((user) => {
                return (
                    <article>
                        <Link to={"/users/" + user.id}>View user details</Link>
                        <p>{user.id}</p>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                        <p>{user.email}</p>
                    </article>
                )
            })}
        </div>
    )
}



export default Users


