import { useState } from "react"

export default function Habit({ id, text, startDate, endDate, onDelete }) {
    return (
        <div>
            <p>Habit: {text}</p>
            <p>Start: {startDate}</p>
            <p>End: {endDate}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}