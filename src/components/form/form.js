import React, { useState } from 'react';
import { Button, Icon, FormGroup, InputGroup, Slider } from "@blueprintjs/core";

export default function form(props) {
  const [value, setValue] = useState(4)
  return (
    <form onSubmit={props.handleSubmit}>

      <h2>Add To Do Item</h2>
      <FormGroup
        inline={'true'}
        helperText="enter task information"
        label="To Do Item"
        labelFor="item-name"
        labelInfo="(required)"
      >
        <InputGroup onChange={props.handleChange} id="item-name" placeholder="To Do Item Details" />
      </FormGroup>
      <FormGroup
        inline={true}
        helperText="assign task to someone"
        label="Assignee"
        labelFor="assigned-name"
        labelInfo="(required)"
      >
        <InputGroup onChange={props.handleChange} id="assigned-name" placeholder="To Do Item Details" />
      </FormGroup>
      <Slider
                    min={0}
                    max={5}
                    stepSize={1}
                    onChange={(value)=> {setValue(value)}}
                    showTrackFill={true}
                    value={value}
                    vertical={'vertical'}
                    name='difficulty' 
                    id='difficulty'
                />


      <label>
        <Button icon='add' type="submit" intent="success" />
      </label>
    </form>
  )
}



