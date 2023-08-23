import { useState } from 'react'

const lists = [
  {id: crypto.randomUUID(), title: 'Coding', completed: true},
  {id: crypto.randomUUID(), title: 'Eating', completed: false},
  {id: crypto.randomUUID(), title: 'Sleeping', completed: false},
  {id: crypto.randomUUID(), title: 'Sleeping', completed: false},
];

function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([])

  const changeInputHandler = (e) =>  setNewItem(e.target.value);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodo( currentTodo =>{
      return [...currentTodo,
      {id: crypto.randomUUID(), title: newItem, completed: false}]
    });
    setNewItem('')
  }

  const toggleTodo = (id, completed) =>{
    setTodo(currentTodo =>{
      return currentTodo.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }else {
          return todo;
        }
      })
    })
  }

  return (
    <div className='flex items-center justify-center h-[100vh] shadow-lg'>
      <div className="bg-[#2b2b2b] w-[50rem] h-[50rem] text-white rounded-md">
        <h1 className='text-center text-[3rem]'>Todo list</h1>
          <form onSubmit={handleSubmit} className='flex items-center justify-center'>
            <div className="form-group px-5">
              <input className='px-4 py-2 focus:outline-none text-black'
                type="text" 
                placeholder='Type a text...' 
                value={newItem} 
                onChange={changeInputHandler}
              />
            </div>
              <button 
              className='bg-white text-black px-4 py-2 rounded'
              >Save</button>
          </form>
          <div className='lists pt-10'>
            <ul className='mx-[15rem]'>
              {todo.map(list =>{
                return (
                  <li className='flex gap-2 py-2 w-full' key={list.id}>
                    <input type="checkbox"
                    checked={list.completed} 
                    onChange={e => toggleTodo(list.id, e.target.checked)}/>
                    <div className='flex items-center justify-between py-2 w-full'>
                      <p>{list.title}</p> 
                      <div className='list__btns flex gap-2'>
                        <button className='bg-red-600 rounded-md text-black px-2 py-1'>Remove</button>
                        {/* <button className='bg-green-600 rounded-md text-black px-2 py-1 text-dark'>Edit</button> */}
                      </div>
                    </div>
                  </li>
                )
              })}

              {/* <li className='flex items-center justify-between py-2'>
                <input type="checkbox" name="" id="" />
                <p>Eating</p> 
              <div className='list__btns flex gap-2'>
                <button className='bg-red-600 rounded-md text-black px-2 py-1'>Remove</button>
                <button className='bg-green-600 rounded-md text-black px-2 py-1 text-dark'>Edit</button></div>
              </li>
              <li className='flex items-center justify-between py-2'>
                <input type="checkbox" name="" id="" />
                <p>Playing</p> 
              <div className='list__btns flex gap-2'>
                <button className='bg-red-600 rounded-md text-black px-2 py-1'>Remove</button>
                <button className='bg-green-600 rounded-md text-black px-2 py-1 text-dark'>Edit</button></div>
              </li> */}
              
            </ul>
          </div>
      </div>
    </div>
  )
}

export default App
