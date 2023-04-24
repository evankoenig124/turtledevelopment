import './App.js';

test('Load user information', () => {
  const accountPage = new AccountPage();
  accountPage.loadUserInformation();

  const expectedUsername = 'testuser';
  const expectedEmail = 'testuser@gmail.com';
  const expectedPassword = 'test123';

  expect(accountPage.getUsername()).toBe(expectedUsername);
  expect(accountPage.getEmail()).toBe(expectedEmail);
  expect(accountPage.getPassword()).toBe(expectedPassword);
});

import './App.js';

test('Back button functionality', () => {
  const accountPage = new HomePage();
  const result = accountPage.HomePage();

  expect(result).toBe(true);
});

import './App.js';

test('Empty settings validation', () => {
  const accountPage = new AccountPage();
  const result = accountPage.saveUserInformation();

  expect(result).toBe(false);
  expect(accountPage.getErrorMessage()).toBe('Please fill in all required fields');
});

import './App.js';

test('User overwrites old settings', () => {
  const accountPage = new AccountPage();
  accountPage.setUsername('testuser');
  accountPage.setEmail('testuser@gmail.com');
  accountPage.setPassword('test123');
  accountPage.saveUserInformation();

  accountPage.setUsername('newuser');
  accountPage.saveUserInformation();

  expect(accountPage.getUsername()).toBe('newuser');
  expect(accountPage.getEmail()).toBe('testuser@gmail.com');
  expect(accountPage.getPassword()).toBe('test123');
  expect(accountPage.getSuccessMessage()).toBe('Settings saved successfully');
});

import './App.js';

test('User adds account settings successfully', () => {
  const Login = new AccountUser();
  Login.setUsername('testuser');
  Login.setEmail('testuser@gmail.com');
  Login.setPassword('test123');

  const result = accountPage.saveUserInformation();

  expect(result).toBe(true);
  expect(accountPage.getSuccessMessage()).toBe('Settings saved successfully');
});