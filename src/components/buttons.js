import React, { useContext } from 'react'
import { Context } from '../context/contexts'

const Buttons = () => {

    const {
        handleClear, handleNum, handleOpr, handleRes,
    } = useContext(Context)

    return (

        <div className='buttons grid grid-cols-4 p-1 text-white text-center h-[400px]'>
            <div className='col-span-2 bg-red-500' onClick={handleClear} id='clear'>AC</div>
            <div className='opr' id="divide" onClick={handleOpr}>/</div>
            <div className='opr' id="multiply" onClick={handleOpr}>x</div>
            <div className='num' id="seven" onClick={handleNum}>7</div>
            <div className='num' id="eight" onClick={handleNum}>8</div>
            <div className='num' id="nine" onClick={handleNum}>9</div>
            <div className='opr' id="subtract" onClick={handleOpr}>-</div>
            <div className='num' id="four" onClick={handleNum}>4</div>
            <div className='num' id="five" onClick={handleNum}>5</div>
            <div className='num' id="six" onClick={handleNum}>6</div>
            <div className='opr' id="add" onClick={handleOpr}>+</div>
            <div className='num' id="one" onClick={handleNum}>1</div>
            <div className='num' id="two" onClick={handleNum}>2</div>
            <div className='num' id="three" onClick={handleNum}>3</div>
            <div className='row-span-2 bg-blue-900' id="equals" onClick={handleRes}>=</div>
            <div className='col-span-2 num' id="zero" onClick={handleNum}>0</div>
            <div className='num' id="decimal" onClick={handleNum}>.</div>



        </div>
    )
}

export default Buttons