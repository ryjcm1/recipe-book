import { Fragment } from "react";
import "./App.css";
import Header from "./component/layout/Header"
import Recipes from "./component/Recipes/Recipes";

function App() {
  

  return (
    <Fragment>
      <Header/>
      <Recipes  />
    </Fragment>
  )

}

export default App;
