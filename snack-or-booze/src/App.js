import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItemForm from "./AddItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  // Added additional state for drinks
  const [drinks, setDrinks] = useState([]);

  // Changed the function defined in useEffect to handle both snacks and drinks, and changed it to be defined outside of useEffect so that it could be called in addItem as well 

  async function fetchData() {
    setIsLoading(true);
    try {
      const [snacksData, drinksData] = await Promise.all([
        SnackOrBoozeApi.getSnacks(),
        SnackOrBoozeApi.getDrinks()
      ]);
      setSnacks(snacksData);
      setDrinks(drinksData);
    } catch (error) {
      console.error("Failed to fetch data:", error)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (snacks.length > 0 || drinks.length > 0) {
      setIsLoading(false);
    }
  }, [snacks, drinks])

  const addItem = async (item) => {
    setIsLoading(true);
    if (item.type === "snacks") {
      await SnackOrBoozeApi.addSnack(item);
    } else if (item.type === "drinks") {
      await SnackOrBoozeApi.addDrink(item);
    }
    await fetchData();
    // setIsLoading(false);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>

          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} isSnacksOrDrinks={"snacks"} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            {/* Added 2nd pair of routes for the drinks menu and individual drinks */}
            <Route exact path="/drinks">
              <Menu items={drinks} isSnacksOrDrinks={"drinks"} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add-item">
              <AddItemForm addItem={addItem} />
            </Route>
            {/* Added redirect for non-existent snacks or drinks */}
            <Redirect from="/snacks/*" to="/snacks" />
            <Redirect from="/drinks/*" to="/drinks" />
            <Route path="*">
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
