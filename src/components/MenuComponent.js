//Add new component
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


//1. Extend component - Name of new component is "Menu"
class Menu extends Component {

    //2. Define constructor
    constructor(props) { // Props made available from App.js
        super(props);
    }


    //3. Implement render function - returns whats need to be displayed on UI
    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.props.onClick(dish.id)}>
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
            </div>

        );
    }
}

//4. Export this component from this file, so that we can import it when we need it
export default Menu;