import {useEffect, useState} from 'react';
import {getUsers} from './component/API';
import Users from './component/users/Users';

export default function App() {
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers(value.data));
    }, [])
    return (
    <div>
        {
            <Users items={users}/>
        }
        
    </div>
    );
    
}
