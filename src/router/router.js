import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import BookList from "../container/bookList";
import BookDetails from "../container/bookDetails";
// import Header from "../components/headerBlack";
import Header from "../components/headerWhite";

const Router = (props) => {
  console.log("router props ", props);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:categoryId" component={BookList} />
        {/* <Route
          exact
          path="/category/:categoryId/:isbn"
          component={BookDetails}
        /> */}
        <Route
          exact
          path="/category/:categoryId/:isbn"
          render={(props) => {
            console.log("router in action with ", props);
            return <BookDetails {...props.history.location.state} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
