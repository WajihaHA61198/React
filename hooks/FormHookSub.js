import React, { useState, useEffect } from 'react';

function FormHookSub(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [player, setPlayer] = useState('')
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        var user={
            name: name,
            age: age,
            player: player
        }

        console.log(user)
    }

    // form submit by hooks
    return<>
        <h1>React Hooks form Submission</h1>

        <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <br />

        <label>Enter your age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
        <br />

        <label>Enter your fav player:</label>
        <input type="text" value={player} onChange={(e) => setPlayer(e.target.value)}/>
        <br />
        <br />
        <button type='submit'>Submit</button>
        </form>

    </>
}
export default FormHookSub