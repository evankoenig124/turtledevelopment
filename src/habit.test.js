import HabitForm from './habitform.js';
import {render} from '@testing-library/react'


const handleAddHabit = (text, startDate, endDate) => {
    const habit = {
      text,
      startDate,
      endDate,
    }
  }

test('habit renders correctly', () => {
    const testHabit = render(<HabitForm onAddHabit={handleAddHabit}/>)
    expect(testHabit).toMatchSnapshot();
});







