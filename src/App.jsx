import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const handleAddNewUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    form.reset();
    console.log(newUser);
    fetch('https://simple-crud-server-kohl.vercel.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  return (
    <>
      <div className='max-w-screen-xl mx-auto my-5'>
        <h1>simple crud client</h1>
        <form onSubmit={handleAddNewUser}>
          <input type="text" placeholder='name' name='name' required />
          <br />
          <br />
          <input type="email" placeholder='email' name='email' required />
          <br />
          <br />
          <input type="submit" value='Add New User' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer' />
        </form>
        <br />
        <Link to='/users' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Go to Users</Link>
      </div>
    </>
  )
}

export default App
