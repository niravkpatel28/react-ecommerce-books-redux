//this container will be rendered when the user clicks on one of the
// categories. The url will be /category/categoryId
// this will render all the books within that category
// the component will have to fetch all books within the given category
// ideally category based api call will be implemented in the back end server.
// since we are using json file we will use filter method on the data array
// this state contains list of books pertaining to a category
import React from "react";
import axios from "axios";
import { booksUrl } from "../api/apiRoutes";
import BookCard from "../components/bookCard";
import "./bookList.style.css";
class BookList extends React.Component {
  // booklist will get a prop

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categoryId: this.props.match.params.categoryId,
    };
  }

  componentDidMount = async () => {
    let categoryId = this.props.match.params.categoryId;
    let response = await axios.get(booksUrl);
    // this fetches all the books, we need only those books which match the relevant
    //category id
    // also the required list is in filteredList[0].books array of the filtered list
    let filteredList = response.data.filter(
      (category) => category.categoryId === categoryId
    );

    // console.log("fetched book", filteredList[0].books);
    this.setState({
      books: filteredList[0].books,
    });
  };

  navigateBookDetails = (isbn) => {
    let currentPath = this.props.history.location.pathname;

    // book details to be sent out with history props
    let bookDetail = this.state.books.filter((book) => book.isbn === isbn);
    console.log(" book to be sent ", bookDetail[0]);

    //attach book details to history props

    this.props.history.push({
      pathname: `${currentPath}/${isbn}`,
      state: { book: bookDetail[0] },
    });
    // this.props.history.push(`${currentPath}/${isbn}`);
  };
  render() {
    return (
      <div className="bookContainer">
        <h1> Book list for category </h1>
        <div className="allBooks">
          {this.state.books.map((book) => {
            return (
              <BookCard
                book={book}
                key={book.isbn}
                onClick={this.navigateBookDetails}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BookList;
