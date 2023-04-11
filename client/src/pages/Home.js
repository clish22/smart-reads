import React from 'react';
import './Home.css';

// home page with boostrap stylings
const Home = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Smart Reads!</h1>
            <p className="lead">
              This is a simple MERN stack application that allows you to search for books and save
              them to a list.
            </p>
            <hr className="my-4" />
            <p>
              This app uses the Google Books API to search for books and the MongoDB database to
              store your saved books.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/search" role="button">
                Search for Books
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
