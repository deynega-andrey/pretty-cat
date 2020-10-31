import React from "react";
import "./app.scss";
import Cards from "./components/cards/cards";
import Title from "./components/title/title";
import { connect } from "react-redux";
import { selectedCat, hoverCat, leaveCat } from "./redux/actions";

function App(props) {
  return (
    <div className="app">
      <div className="app__pattern">
        <Title />
        <Cards {...props}/>
      </div>
    </div>
  );
}
let a = 2;

const mapStateToProps = ( state ) => {
  return { state };
};
const mapDispatchToProps = {
  selectedCat,
  hoverCat,
  leaveCat
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
