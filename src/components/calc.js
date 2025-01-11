import React, { useContext } from 'react';
import { Context } from '../context/contexts';
import Buttons from './buttons';

const Calc = () => {
    const {output, inputText} = useContext(Context)

    return (
        <div className='bg-black w-[350px] rounded-md overflow-hidden'>
            <div className='text-yellow-300 px-1 text-right h-[60px] mt-1'>
                <p className='font-light h-[20px]'>{inputText}</p>
                <p id="display" className='text-white text-[1.7rem]'>{output}</p>
            </div>

            <Buttons />


            <div className='bg-blue-300'></div>
        </div>
    )
}
export default Calc;
