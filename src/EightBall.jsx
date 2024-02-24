import React, { useState } from "react"


const EightBall = (props)=>{
    const answers = props.answers
    const random = () => Math.floor(Math.random() * answers.length) 
    const randAnswer = answers[random()]

    const newAnswer = ()=>{
        setColor(randAnswer["color"])
        setMsg(randAnswer["msg"])
    
}
    const [color, setColor] = useState("black")
    const [msg, setMsg] = useState("Think of a Question")
  
    return (
        <div className="EightBall" style={{backgroundColor : color}} onClick={newAnswer}>
            <div className="EightBall-button" >{msg}</div>
        </div>
    )
}

export default EightBall;