import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title} </li>
      );
    });
  }

  render() {
    return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      );
  }
}

//Take our app state as an argument
//App state right now is {books:[{},{}..], currentlySelectedBook:{}}
//glue betqwwn react + redux
function mapStateToProps(state) {
//Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

//Connect takes a function and a component and produces a container

// A container is aware of the state that is contained by react-redux

// mapStateToProps takes the state as the first argument, and then it returns  an object.
  //Whatever object is returned will be available to the component as this.props
  //We want to have access to this.props.books in our component
    //so -> we return an object with a key of "books", and a value of "state.books"
    //in "state.books", this is our reducer returning the propery of books from

//Take this component with map states to props and return a container


//TWO IMPORTANT POINTS
  //1. Whenever application state changes, (for example, if you get the list of books from a remote server or if on a user click, the list changes) IF our state EVER changes, this container will instantly re-render with the new list of books.

  //By using connect to create a cotainer, whenever the app state changes, the object in the state function will be assigned as props to the component.
export default connect(mapStateToProps)(BookList);