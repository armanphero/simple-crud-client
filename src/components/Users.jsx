import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    console.log(users);

    const handleUserDelete = id => {
        fetch(`https://simple-crud-server-mu.vercel.app/user/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    setUsers(users.filter(user => user._id!== id))
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='max-w-screen-xl mx-auto my-5'>
            <Link to='/' className='text-blue-500'>Home</Link>
            <br />
            <h1 className='text-3xl text-blue-500 font-bold'>This is users page</h1>
            {
                users.map((user) => {
                    return (
                        <div key={user._id} className='border border-purple-500 my-2 p-2 flex justify-between'>
                            <div>
                                <h2><span className='font-semibold'>Name: </span>{user.name}</h2>
                                <h5><span className='font-semibold'>Email: </span>{user.email}</h5>
                            </div>
                            <div>
                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleUserDelete(user._id)}>Delete</button>
                                <Link to={`/user/${user._id}`}>
                                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;