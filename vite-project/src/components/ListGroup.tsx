import { useState } from "react";

// You could also write it like Props, its the same thing :p
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//The useState is a hook, it allows you to use variables from javascript to "be a react component" and be interactive with React code.
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*arr[0] // this is the variable "selectedIndex"
  arr[1] // this is the updater to the function*/

  return (
    //This is a fragment element, can be written like <Fragment></Fragment> (It's needed to be imported) and its used to make possible to used multiple elemnts on a .jsx
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> //if api is used item should have an id, so the key component should be written as key={item.id}
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
