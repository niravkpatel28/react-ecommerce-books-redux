import React from "react";
import axios from "axios";
import { categoriesUrl } from "../api/apiRoutes";
import Category from "../components/category";
// import BookList from "../container/bookList";
import "./home.style.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [], // book categories
    };
  }

  navigateToBooks = (id) => {
    console.log("navaigate to ", id);
    console.log(this.props.history);
    this.props.history.push(`/category/${id}`);
  };

  // api call for books api
  componentDidMount = async () => {
    let categories = await axios.get(categoriesUrl);
    this.setState({
      categories: categories.data,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Home Page</h1>
        <div className="categoryContainer">
          {this.state.categories.map((category) => {
            return (
              <Category
                category={category}
                key={category.categoryId}
                onClick={this.navigateToBooks}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
