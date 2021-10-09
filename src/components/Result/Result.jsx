
import React from "react";
// importing image files
//import Header from '../Header/Header'
//import Footer from '../Footer/Footer'
import samplemap from '../../assets/images/resultsamplemap.JPG';
import spot1 from '../../assets/images/samplespotimage1-1.JPG';
import spot2 from '../../assets/images/samplespotimage1-2.JPG';
import spot3 from '../../assets/images/samplespotimage2-1.jpg';
import spot4 from '../../assets/images/spot2-2.JPG';
import spot5 from '../../assets/images/spot2-3.JPG';
import spot6 from '../../assets/images/spot3-1.JPG';
import spot7 from '../../assets/images/spot3-2.JPG';
import spot8 from '../../assets/images/spot4-1.JPG';
import styles from './result.module.css'; 

function Result() {
  return (
    <div className="result">
      {/*<Header></Header> */}
      {/* full width container for all the elements*/}
      <div class="container-fluid">
        {/* bootstrap 12 columnn row */}
        <div class ="row">
          {/* takes up all columns on all screen sizes*/}
          <div class="col-12 mapmargin">
            {/* inserting an an image, along with the alternative text for when the image can't be displayed*/}
            <img class ="samplemap" src={samplemap} alt="google map"/>
          </div>
        </div>
        {/* the second class "justify-conent-center" alignes the column to the center of the page*/}
        <div class="row justify-content-center">
          {/* take up 3 column on medium screen and 6 column on small sreen 
          so we have 4 columns on medium screen or larger and 2 column for smaller screens*/}
        
          <div class="col-md-3 col-xs-6">
            <div class = "row">
                <div class = "col-12">
                  <img src={spot1} alt="Jacky Fishingspot"/>
                </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                {/* some text info for the objects */}
                <h4>Jacky Fishingspot</h4>
                <h5>Rating: 3.5 </h5>
                
              </div>
            </div>
          </div>
          <div class="col-md-3 col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot2} alt="Lake Niagare"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4> Lake Niagara</h4>
                <h5>Rating: 3.6 </h5>
              </div>
            </div>
            
          </div>
          <div class="col-md-3 col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot3} alt="Lake Carlisle"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4>Lake Carlisle</h4>
                <h5>Rating: 4 </h5>
              </div>
            </div>
            
          </div>
          <div class="col-md-3 col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot4} alt="Paris Pond"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4>Paris Pond</h4>
                <h5>Rating: 3 </h5>
              </div>
            </div>
              
            
          </div>
          
        </div>
        <div class="row justify-content-center" >
          
          <div class="col-md-3 col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot5} alt="John's Fishing Spots"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4>John's Fishing Spots</h4>
                <h5>Rating: 5 </h5>
              </div>
            </div>
            
          </div>
          <div class="col-md-3  col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot6} alt="niapenco Fishing Sposts"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4>Niapenco Fishing Spots</h4>
                <h5>Rating: 2 </h5>
              </div>
            </div>
            
          </div>
          <div class="col-md-3  col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot7} alt="Jacky Fishingspot"/>  
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4>Jacky Fishingspot</h4>  
                <h5>Rating: 3 </h5>
              </div>
            </div>
            
          </div>
          <div class="col-md-3  col-xs-6">
            <div class = "row">
              <div class = "col-12">
                <img src={spot8} alt="Cooper Creek"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col-12">
                <h4>Cooper Creek</h4>
                <h5>Rating: 2.5 </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Footer></Footer> */}
    </div>
  );
}

export default Result;