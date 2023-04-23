import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle('');
    setDescription('');
  };

  const handleEdit = (index, newTitle, newDescription) => {
    const newTasks = [...tasks];
    newTasks[index].title = newTitle;
    newTasks[index].description = newDescription;
    setTasks(newTasks);
  };

  const handleChangeData = (index) => {
    const newTitle = prompt('Enter new title:', tasks[index].title);
    const newDescription = prompt('Enter new description:', tasks[index].description);
    handleEdit(index, newTitle, newDescription);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      <hr />
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ListGroup>
          {tasks.map((task, index) => (
            <ListGroup.Item key={index}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <Button variant="secondary" onClick={() => handleChangeData(index)}>
                Change Data
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TaskPage;