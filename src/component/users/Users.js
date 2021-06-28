import {useEffect, useState} from 'react';

export default function Users () {
    let [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersfromServer => {
                setUsers(usersfromServer);
            });
        }, []);






    return (
    <div>
        {
            users.map(user => <div>{user.id} - {user.name}</div>)

        }
        
    </div>)
    
}