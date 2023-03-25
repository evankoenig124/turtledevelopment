import React, { useState } from 'react';



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

const HomePage = ({ user, onLogout,onViewTasks, onViewCalendar, onViewAccount }) => {
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
          </div>
        </div>
        <div className="home-content"></div>
      </div>
    </div>
  );
};


const TaskPage = ({onViewTasks}) =>{
<div>
  <h1>Hello!</h1>
</div>

onViewTasks();

}

const CalendarPage = ({onViewCalendar}) =>{
  <div>
    <h1>Hello!</h1>
  </div>
  
  onViewCalendar();
  
  }

const AccountPage = ({onViewAccount}) =>{
  <div>
    <h1>Hello!</h1>
  </div>
    
  onViewAccount();
    
  }

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
        <HomePage user={user} onLogout={handleLogout} onViewTasks={handleTasks} onViewCalendar={handleCalendar} onViewAccount={handleAccount}/>
      )}
      {view === 'tasks'&&(
        <TaskPage/>
      )}
      {view === 'calendar'&&(
        <CalendarPage/>
      )}
      {view === 'account'&&(
        <AccountPage/>
      )}
    </div>
    
    </section>
    
  );
};

export default App;
