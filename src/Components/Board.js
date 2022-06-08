import React, { useState } from 'react'
import Cell from './Cell'
import '../Styles/Board.css'
function Board() {
    const [hasWon, setHasWon] = useState(false)
    const nrows = 5
    const ncols = 5
    const lit_prob = 0.25
    const createBoard = () => {
        let board = []
        for (let i = 0; i < nrows; i++) {
            let row = []
            for (let j = 0; j < ncols; j++) {
                row.push(Math.random() < lit_prob)
            }
            board.push(row)
        }
        return board
    }
    const [board, setBoard] = useState(createBoard())
    const handleFlip = (coord) => {
        let _board = [...board]
        const [x, y] = coord.split('-').map(Number)
        const flipCells = (x, y) => {
            if (x >= 0 && y >= 0 && x < nrows && y < ncols) {

                _board[x][y] = !_board[x][y]
            }

        }
        flipCells(x, y)
        flipCells(x - 1, y)
        flipCells(x, y - 1)
        flipCells(x, y + 1)
        flipCells(x + 1, y)

        let _hasWon = _board.every(row => row.every(cell => !cell))
        setHasWon(_hasWon)
        setBoard(_board)
    }
    const gameBoard = []
    for (let i = 0; i < nrows; i++) {
        let row = []
        for (let j = 0; j < ncols; j++) {
            let coord = `${i}-${j}`
            row.push(<Cell key={coord} isLit={board[i][j]} onClick={() => console.log("Click")} flipCells={() => handleFlip(coord)} />)
        }
        gameBoard.push(<tr key={i}>{row}</tr>)
    }
    if (hasWon) {
        return <div className={"flux"}>Won!</div>

    }
    return (

        <div className={'board'}>
            <div className={"container"}>
                <div className={"neon"}>Lights World!</div>
            </div>
            <table>
                <tbody>
                    {gameBoard}
                </tbody>
            </table>
        </div>

    )
}

export default Board