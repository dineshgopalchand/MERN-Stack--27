import React, { useMemo, useState } from 'react'

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
const SampleUseMemo = () => {

    const [todos, setTodos] = useState([]);

    const [count, setCount] = useState(0);
    
    // const calculation = expensiveCalculation(count);

    // console.log('outside memo -top');
    const calculation = useMemo(() => {
        // console.log('inside memo');
        return expensiveCalculation(count);
    }, [count]);
    // console.log('outside memo - bottom');

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};


export default SampleUseMemo;