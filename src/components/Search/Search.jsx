
import React from "react";
import './search.module.css';
//import Header from '../Header/Header'
//import Footer from '../Footer/Footer'

function Search() {
  return (
    <div className="search">
      {/* <Header></Header> */}
      <div class="container"> 
        <div class="myform">
          {/* header for the form*/}
          <h2>Search</h2>
          {/*action is currently not implemented for part one */}
          <form action="/action_page.php">
            <div class="form-group">
              <input type="text" placeholder="Search Term" class="form-control" id="searchterm"/>
            </div>
            {"form-group sets the width to 100%"}
            <div class="form-group">
                <label for="searchrating">Search Rating</label>
                {/* select gives a dropdown list*/}
                <select class="form-control" id="searchratings"  name="searchratings">
                    {/* options for the dropdown list*/}
                    <option value="all">all</option>
                    <option value="one">1 Star</option>
                    <option value="two">2 Star</option>
                    <option value="three">3 Star</option>
                    <option value="four">4 Star</option>
                    <option value="five">5 Star</option>
                </select>
                <h6 for="searchrating">Choose your search rating</h6>
            </div>
            {/* button for submission */}
            <button type="submit" class="btn btn-default">Search</button>
          </form>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
    
  );
}

export default Search;