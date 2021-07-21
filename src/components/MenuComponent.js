//Add new component
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenuItem({dish, onClick}){ //As the props coming in is a JavaScript object, we can specify the properties that are part of the object
    return(
        <Card onClick = {() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>

            <CardImgOverlay body className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>

        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return(
            <div key = {dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick = {props.onClick}/>
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

//4. Export this component from this file, so that we can import it when we need it
export default Menu;