import './App.css';
import styles from "./homeworkTracker.module.css";

import { Calendar, dateFinsLoaclizer, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";


const LoginPage = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the user is registered
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = registeredUsers.find(u => u.username === username && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    
    <section>
    <div class="form-box">
      <div>
      <h1>Login Page</h1>
      <div class="inputbox">
      <input type="text"  value={username} onChange={e => setUsername(e.target.value)} />
      <label for="">Username</label>
      </div>
      <div class="inputbox">
      <input type="password"  value={password} onChange={e => setPassword(e.target.value)} />
      <label for="">Password</label>
      </div>
      <button onClick={handleLogin}>Login</button>
      <div class="register">
      <p>Don't have an account? <a href="#" onClick={() => onRegister()}>Register here</a></p>
      </div>
      </div>
    </div>
    </section>
    
  );
};


const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Save the user's info to local storage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    registeredUsers.push({ username, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    onRegister({ username, password });
  };

  return (
    <section>
    <div class="form-box">
    <div>
      <h1>Register Page</h1>
      <div class="inputbox">
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div class="inputbox">
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
    </div>
    </section>
  );
};


const HomePage = ({ user, onLogout,onViewTasks, onViewCalendar, onViewAccount, onViewHomework }) => {
  return (
    <div>
    <div className="home-container">
      <div className="home-header">
        <h3 className="home-title">Welcome, {user.username}!</h3>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
      <div className="home-body">
        <div className="home-sidebar">
          <button className="sidebar-button" onClick={() => onViewTasks()}>Tasks</button>
          <button className="sidebar-button" onClick={onViewCalendar}>Calendar</button>
          <button className="sidebar-button" onClick={onViewAccount}>Account</button>
          <button className="sidebar-button" onClick={onViewHomework}>Homework</button>
          </div>
        </div>
        <div className="home-content"></div>
      </div>
    </div>
  );
};




const locales = {
  "en-US": require("date-fns/locale/en-US"),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
      title: "Habit 1",
      allDay: true,
      start: new Date(2023, 3, 0),
      end: new Date(2023, 3, 0),
  },
  {
      title: "Habit 2",
      start: new Date(2023, 3, 7),
      end: new Date(2023, 3, 10),
  },
  {
      title: "Habit 3",
      start: new Date(2023, 3, 20),
      end: new Date(2023, 3, 23),
  },
];

const CalendarPage = ({ onViewCalendar}) => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""});
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    for (let i = 0; i<allEvents.length; i++){
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if (
        ( (d1 <= d2) && (d2 <= d3) ) || ( (d1 <= d4) && (d4 <= d3))
      )
      {
        alert("Clash");
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <h2>Add New Habit</h2>
      <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin:"50px"}} />
    </div>
  );
}


const HomeworkPage = ({onViewHomework }) => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""});
  const [allEvents, setAllEvents] = useState(events)
  function handleAddEvent() {
    for (let i = 0; i<allEvents.length; i++){
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if (
        ( (d1 <= d2) && (d2 <= d3) ) || ( (d1 <= d4) && (d4 <= d3))
      )
      {
        alert("Clash");
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="homework">
      <h1>Homework</h1>
      <h2>Keep track of your homework assignments here!</h2>

      <div>
        <input type="text" placeholder="What class is this for?" style={{ width: "30%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="When is it due?" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Assignment
                </button>
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login');

  const handleLogin = (user) => {
    setUser(user);
    setView('home');
  };

  const handleRegister = () => {
    setView('register');
  };

  const handleLogout = () => {
    setUser(null);
    setView('login');
  };
  const handleTasks = () =>{
    setView('tasks');
  }
  const handleCalendar = () =>{
    setView('calendar');
  }
  const handleAccount = () =>{
    setView('account');
  }
  const handleHomework = () =>{
    setView('homework');
  }

  return (
    <section>
    
    <div>
      {view === 'login' && (
        <LoginPage onLogin={handleLogin} onRegister={handleRegister} />
      )}
      {view === 'register' && (
        <RegisterPage onRegister={() => setView('login')} />
      )}
      {view === 'home' && (
        <HomePage user={user} onLogout={handleLogout} onViewTasks={handleTasks} onViewCalendar={handleCalendar}
         onViewAccount={handleAccount} onViewHomework={handleHomework}/>
      )}
      {view === 'calendar'&&(
        <CalendarPage/>
      )}
      {view === 'homework'&&(
        <HomeworkPage/>
      )}
    </div>
    
    </section>
    
  );
};


export default App;
