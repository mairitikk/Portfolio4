import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Mairi', age: 33 },
    { name: 'Leena', age: 33},
    { name: 'Liam', age: 33 }
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age:number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    }; 
    return <div>Otsi kasutajat
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} type="text" />
        <button onClick={onClick}>Otsi kasutajat</button>
        <div>{user && user.name}
            {user && user.age}
        </div>
</div>
};

export default UserSearch;