//import Alert from "./components/Alert";
import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";
function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("clicked")}>
        Button
      </Button>
    </div>
  );

  /*  <div>
  <Alert>
    Alert
  </Alert>
</div>*/

  /*  let items = ["a", "b", "c", "d"];

const handleSelectItem = (item: string) => {
  console.log(item);
}

  return (
    <div>
      <ListGroup items={items} heading="letters" onSelectItem={handleSelectItem}></ListGroup> 
    </div> // In this case cities does not go with braces because its not necesary, since "heading" is already a static value. 
  );*/
}

export default App;
