import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// Added 2nd argument to input into Link, changed variable names to be generic for either snacks or drinks
function Menu({ items, isSnacksOrDrinks }) {
  // Added logic to change the title of the menu based on food or drink
  let title = "Food Menu"
  if (isSnacksOrDrinks === "drinks") {
    title = "Drink Menu"
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${isSnacksOrDrinks}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
