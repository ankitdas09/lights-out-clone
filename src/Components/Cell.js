import React from 'react'
import '../Styles/Cell.css'
const Cell = (props) => {
    const { isLit, flipCells } = props

    const createCellClass = () => {
        return `cell ${isLit ? 'lit' : ''}`
    }
    const handleClick = () => {
        flipCells()
    }
    // console.log(createCellClass())
    return (
        <>
            <td className={createCellClass()} onClick={handleClick} />
        </>
    )
}

export default Cell