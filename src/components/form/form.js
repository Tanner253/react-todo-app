import { Button, Icon } from "@blueprintjs/core";

export default function form(props){

  return(
    <form onSubmit={props.handleSubmit}>

    <h2>Add To Do Item</h2>

    <label>
      <span>To Do Item</span>
      <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
    </label>

    <label>
      <span>Assigned To</span>
      <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
    </label>

    <label>
      <span>Difficulty</span>
      <input onChange={props.handleChange} defaultValue={props.defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
    </label>

    <label>
      <Button icon='add' type="submit" intent="success" />
    </label>
  </form>
  )
} 



