import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);
    // console.log(user);
    const handleUpdateUserInfo = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email };
        form.reset();
        console.log(newUser);
        if (user.name !== newUser.name || user.email !== newUser.email) {
            fetch(`https://simple-crud-server-kohl.vercel.app/user/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('User info updated');
                        setUser(newUser)
                    }
                })
                .catch(error => console.log(error))
                return;

        }
        alert('No changes made');

    }
    return (
        <div className='max-w-screen-xl mx-auto my-5'>
            <Link to='/' className='text-blue-500'>Home</Link>
            <h1 className='text-3xl text-blue-500 font-bold my-5'>This is edit page</h1>
            <form onSubmit={handleUpdateUserInfo}>
                <input type="text" placeholder='name' name='name' defaultValue={user.name} required />
                <br />
                <br />
                <input type="email" placeholder='email' name='email' defaultValue={user.email} required />
                <br />
                <br />
                <input type="submit" value='Update User' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer' />
            </form>
        </div>
    );
};

export default UpdateUser;