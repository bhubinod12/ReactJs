import { useState } from 'react'
// import './App.css'

function App() {
  const [taskArr, setTaskArr] = useState([]);

  function addTask(inputVale) {
    let newtask = inputVale;
    if (newtask.length == 0) {
      return;
    }
    let newTaskArr = [...taskArr, newtask];
    setTaskArr(newTaskArr);
  }

  return (
    <>
    <h1>toDo List</h1>
    <InputBox addTask = {addTask}></InputBox>
    <List taskArr = {taskArr}></List>
    </>
  )
}
function InputBox (props) {

  const [inputVale, setInputVale] = useState('');
  function handleChange (e) {
    setInputVale(e.target.value);
  }
  function addTask () {
    props.addTask(inputVale);
    setInputVale('');
  }
  return (
    <div>
      <input type='text' value= {inputVale} onChange={handleChange}/>
      <button onClick={addTask}>Add task</button>
      <button>delete task</button>
    </div>
  )
}
function List (props) {
  const {taskArr} = props; 
  return (
    <div className='list'>
      <ul>
        {taskArr.map((item, index) => {
          return <li key ={index} >{item}</li>
        })}
      </ul>
    </div>
  ) 

}
export default App
