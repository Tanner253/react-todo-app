import { Button, Card, Elevation, Icon, ButtonGroup, Alignment } from "@blueprintjs/core";

export default function List(props) {

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

  return (
    <>
      {props.list.map(item => (
        <div key={item.id}>
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
      ))}
      <ButtonGroup fill={true}>
        <Button>Next</Button>
        <Button>Previous</Button>
      </ButtonGroup>
    </>
  )
}