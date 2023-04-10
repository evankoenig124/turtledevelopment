import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
    const [text, setText] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [habitCategory, setHabitCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddHabit(text, startDate, endDate, habitCategory)
        setText("")
        setStartDate("")
        setHabitCategory("")
        setEndDate("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter habit name" value={text} onChange={e => setText(e.target.value)} />
            <input type="text" placeholder="Enter start date" value={startDate} onChange={e => setStartDate(e.target.value)}/>
            <input type="text" placeholder="Enter end date" value={endDate} onChange={e => setEndDate(e.target.value)}/>
            <input type="text" placeholder="Enter habit category" value={habitCategory} onChange={e => setHabitCategory(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    )
}