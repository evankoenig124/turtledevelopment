import React, { useState } from 'react';

const AccountPage = () => {
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const updatedUser = {
      ...user,
      age: age || user.age,
      birthday: birthday || user.birthday,
      email: email || user.email,
      phoneNumber: phoneNumber || user.phoneNumber,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setAge('');
    setBirthday('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <section>
      <h1>Account</h1>
      <div>
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Birthday:</label>
        <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
    </section>
  );
};

export default AccountPage;