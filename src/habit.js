import { useState } from "react"

export default function Habit({ id, text, startDate, endDate,habitCategory, onDelete }) {
    return (
        <div>
            <p>Habit: {text}</p>
            <p>Start: {startDate}</p>
            <p>End: {endDate}</p>
            <p>Category: {habitCategory}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}