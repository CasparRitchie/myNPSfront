import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from '../components/Header';

const ViewUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([null]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost/api/users/" + id);
            const user = await response.json();
            setUser(user);
        })();
    }, [id]); 

    return (        
        <>
            <Header/>
            <h2>User details</h2> 
            <div>
                <article>
                    <p>User ID : {user.id}</p>
                    <p>First name : {user.first_name}</p>
                    <p>Last name : {user.last_name}</p>
                    <p>Email address : {user.email}</p>
                </article>
            </div>            
        </>
    );
};

export default ViewUser


