//Add new component
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from "./DishdetailComponent";

//1. Extend component - Name of new component is "Menu"
class Menu extends Component {

    //2. Define constructor
    constructor(props) { // Props made available from App.js
        super(props);

        this.state = {
            selectedDish: null  //selected dish will be set to the dish that we click
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish}); // When we need to change the state, must use setState()
    }


    //3. Implement render function - returns whats need to be displayed on UI
    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
    
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>

                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <DishDetail dish={this.state.selectedDish}/>    
                
            </div>

        );
    }
}

//4. Export this component from this file, so that we can import it when we need it
export default Menu;