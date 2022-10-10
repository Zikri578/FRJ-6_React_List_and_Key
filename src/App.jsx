import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

export default function App() {
    // state
    const [users, setUsers] = useState([]);

    // Komponent did Mount
    useEffect(() => {

        // hit api json placeholder
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.info(res.data)
                setUsers(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);


    return (
        // JSX
        <div>
            <h1>React JS - List and Key</h1>

            {/* Template Literal / Menampilkan data */}
            <UserCard users={users} />

        </div>
    )
}