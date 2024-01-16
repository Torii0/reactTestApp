import { Fragment, useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
//import styles from './ListGroup.module.css' // vite tworzy unikalne css klasy za nas zeby przy tworzeniu kodu class sie nie nakładały na siebie
//import { MouseEvent } from "react";
interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}
interface ListItemProp{
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li<ListItemProp>`
  padding: 5px 0;
  background: ${(props) => props.active ? 'blue': 'gray'};
`;
function ListGroup({ items, heading, OnSelectItem }: Props) {
  //const handleClick = (event: MouseEvent) => console.log(event);
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Fragment>
      <h1>{heading}</h1>
      {/*items.length === 0?<p>No item found</p>: null*/}
      {items.length === 0 && <p>No item found</p>}
      <List className="list-group">
        {/*styles['list-group']- jesli chchcemy z obiektu style dostac sie do list-group z -
          {[styles.listGroup, styles.container].join(' ')} - jesli chcemy sie dostac do wielu styli*/}
        {items.map((item, index) => (
          <ListItem
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={index === selectedIndex}
            onClick={
              /*handleClick*/
              () => {
                setSelectedIndex(index);
                OnSelectItem(item);
              }
            }
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}
export default ListGroup;
