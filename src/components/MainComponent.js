// MainComponent.js acts as a container component for the application
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {                   // MainComponent to track the selected dish (responsible for tracking the state)
    this.setState({selectedDish: dishId}); // Tracks DishId, not entire dish. When we need to change the state, must use setState()
}

  render() {
    return (
      <div>
        {/*Navbar component*/}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        {/*Render Menu Component*/}
        <Menu dishes={this.state.dishes}
            onClick = {(dishId) => this.onDishSelect(dishId)}/> {/*Make dishes available as props to the Menu component */}

        {/*Render DishDetail Component*/}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
       
      </div>
    );
  }
}

export default Main;