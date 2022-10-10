import React from "react";
import { Table } from 'react-bootstrap';

export default function UserCard(props) {

    console.log(props);

    return (
        <div>
            <Table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user) => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}

// export default function UserCard({ id, name, email, phone }) {
//     return (
//         <div>
//             <p>{id}</p>
//             <p>{name}</p>
//             <p>{email}</p>
//             <p>{phone}</p>
//         </div>
//     )
// }