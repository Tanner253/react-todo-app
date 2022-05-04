export default function Header(props) {
  return (
    <header>
      <h1 className="text-center">To Do List: {props.incomplete} items pending</h1>
    </header>
  );
}