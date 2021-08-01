// MainComponent.js acts as a container component for the application
import React, { Component } from 'react';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home/>
      );
    }


    return (
      <div>
        {/*Render Header Component*/}
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />

          {/*Anything that does not match the above routes will be redirrected to Home*/}
          <Redirect to="/home"/>
        </Switch>

        {/*Render Footer Component*/}
        <Footer/>
       
      </div>
    );
  }
}

export default Main;