import { createContext, useState } from "react";

const Context = createContext()

const Contexts = ({ children }) => {
    const [inputText, setInputText] = useState('')
    const [prevInput, setPrevInput] = useState('')
    const [output, setOutput] = useState('0')
    const [isStart, setIsStart] = useState(true)
    const [num, setNum] = useState('')

    function handleClear() {
        setInputText('')
        setOutput('0')
        setPrevInput('')
        setIsStart(true)
        setNum('')
    }
    function handleNum(event) {
        let n = event.target.innerText

        if (!inputText && n === '0') return
        if (((n === '.') && (num.includes('.'))) ||
            (n === '.' && num === '')) return

        if (isStart) {
            setOutput(n)
            setNum(n)
            setInputText(a => a + n)
            setIsStart(false)
            setPrevInput('')
            return
        }

        setNum(a => a + n)
        setOutput(a => a + n)
        setInputText(a => a + n)
    }

    function handleOpr(event) {
        let n = event.target.innerText
        if (num[num.length - 1] === '.' ||
            inputText === '') return

        if (prevInput === '') setPrevInput(inputText)

        if (inputText.includes('=')) {
            setPrevInput(output)
            n === 'x' ? setInputText(output + '*') : setInputText(output + n)
            setOutput(n)
            return
        }

        if (isStart && n !== '-') {
            n === 'x' ? setInputText(prevInput + '*') : setInputText(prevInput + n)
            setOutput(n)
            return
        }
        else if (isStart && n === '-' && inputText[inputText.length - 1] !== '-') {
            n === 'x' ? setInputText(a => a + '*') : setInputText(a => a + n)
            setOutput(n)
            return
        }


        if (!isStart) {
            n === 'x' ? setInputText(a => a + '*') : setInputText(a => a + n);
            setNum('')
            setOutput(n)
            setIsStart(true)
        }
    }


    function handleRes() {

        if (!isStart) {
            if (!eval(inputText)) return
            setOutput(eval(inputText))
            setInputText(a => a + `=${eval(inputText)}`)
            setIsStart(true)
            setPrevInput('')
            setNum('')
        }
    }


    return (
        <Context.Provider value={
            {
                inputText, output,
                handleClear, handleNum, handleOpr, handleRes
            }}>
            {children}
        </Context.Provider>
    )
}

export { Context };
export default Contexts

