import { Button, Card, Elevation, Icon, ButtonGroup, Alignment } from "@blueprintjs/core";
import React, { useState, useEffect } from 'react'

export default function List(props) {

  const [idx, setIdx] = useState(0);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    renderItems(idx)
    console.log(props.list);
  }, [])


  function renderItems(idx) {
    setNewList(props.list[idx]);
  }

  const getElevation = (num) => {
    // if (num === 2) {
    //   return Elevation.ONE;
    // }
    // if (num === 3) {
    //   return Elevation.TWO;
    // }
    // if (num === 4) {
    //   return Elevation.THREE;
    // }
    // if (num === 5) {
    //   return Elevation.FOUR;
    // }
    // else return Elevation.ZERO;
    return Elevation.FOUR;
  }
  let pos = props.list[idx]
  console.log('pos', pos);
  return (
    <div className='list'>
      {
        pos ?
          pos.map(item => (

            <div id={item.id}>
              <Card interactive={true} elevation={getElevation(item.difficulty)} className='m-4'>
                <h5 className="text-center">{item.text}</h5>
                <p className="text-center">Assigned to: {item.assignee}</p>
                <p className="text-center">Difficulty: {item.difficulty}</p>
                <Button className='justify-content-center' rightIcon='confirm' intent={item.complete ? 'success' : 'warning'} onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString().toUpperCase()} | Mark complete </Button>
              </Card>
              <hr />
              {/* <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr /> */}
            </div>
          )) : null}
      {idx === 0 ?
        <div id="buttons">
          <ButtonGroup fill={true}>
            <Button onClick={() => setIdx(idx + 1)}>Next</Button>
          </ButtonGroup>
          <ButtonGroup fill={true}>
            <Button disabled={true}>{idx + 1}/{props.list.length}</Button>
          </ButtonGroup>
        </div>
        :
        <div id="buttons">
          <ButtonGroup fill={true}>
            <Button onClick={() => setIdx(idx + 1)}>Next</Button>
            <Button onClick={() => setIdx(idx - 1)}>Previous</Button>
          </ButtonGroup>
          <ButtonGroup fill={true}>
            <Button disabled={true}>{idx + 1}/{props.list.length}</Button>
          </ButtonGroup>
        </div>
      }


    </div>
  )
}