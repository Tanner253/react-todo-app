import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
import List from '../list/list.js'
import Form from '../form/form.js';
import Header from '../header/header.js';
import { Col, Row } from 'react-bootstrap';

const ToDo = () => {

  const defaultValues = {
    difficulty: 4,
  }

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
    <div className='filler'>
    </div>
      <Header incomplete={incomplete} />
    <Row>
      <Col>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} defaultValues={defaultValues} />
      </Col>
      <Col>
      <List list={list} />
      </Col>
    </Row>
    </>
  );
};

export default ToDo;
