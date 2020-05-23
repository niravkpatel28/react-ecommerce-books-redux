// this container will display the book details. Each book contains the following information ,
// books details can be sent as a part of history.location.state props
// Alternatively it can be queried from the database

import React from "react";
import "./bookDetails.style.css";
const BookDetails = ({ book }) => {
  return (
    <div className="bookDescription">
      <h1> {book.title}</h1>
      <img src={book.thumbnailUrl} alt="thumbnail" />
      <p> {book.longDescription}</p>
    </div>
  );
};

//in case the book details have to be queried from the server back end then use a class component

// class BookDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       book: [],
//     };
//   }
//   render() {
//     let bookDetails = this.props.book;
//     console.log("props contain book", this.props);
//     return (
//       <div>
//         {" "}
//         <h1> Book Details </h1>
//         <p> {bookDetails.longDescription}</p>
//       </div>
//     );
//   }
// }

export default BookDetails;
