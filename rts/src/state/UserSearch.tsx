import { useState } from 'react';

const users = [
    { name: 'Mairi', age: 33 },
    { name: 'Leena', age: 33},
    { name: 'Liam', age: 33 }
];

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');

    const onClick = () => {

    }; 
    return <div>Otsi kasutajat
        <input value={name} onChange={e => setName(e.target.value)} type="text" />
        <button onClick={onClick}>Otsi kasutajat</button>
</div>
};

export default UserSearch;