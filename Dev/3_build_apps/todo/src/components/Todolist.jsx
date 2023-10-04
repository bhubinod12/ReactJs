import { useState } from "react"

function Todolist () {
    const [inputval, setInputVale] = useState('');
    const [listArr, setListArr] = useState([]);
    function handleInputVal (e) {
        setInputVale(e.target.value);
    }
    function handleAddTask () {
        const newItem = inputval;
        if (newItem.length <= 0) {
            return;
        }
        const newTaskArr = [...listArr, newItem]
        setListArr(newTaskArr);
        setInputVale('');
    }
    return (
    <>
        <h1>todoList App!!</h1>
        <div className="textField">
            <input type="text" value={inputval} onChange={handleInputVal}/>
            <button onClick={handleAddTask}>Add task</button>
        </div>
        <div className="list">
            <ul>
                {listArr.map((item, index) => {
                    return <li key = {index} id = {index}>{item}</li>
                })}
            </ul>
        </div>

    </>
    )

}

export default Todolist