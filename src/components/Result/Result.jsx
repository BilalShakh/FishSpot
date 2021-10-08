
import React from "react";
import samplemap from '../../assets/images/resultsamplemap.jpg';
import spot1 from '../../assets/images/samplespotimage1-1.jpg';
import spot2 from '../../assets/images/samplespotimage1-2.jpg';
import spot3 from '../../assets/images/samplespotimage2-1.jpg';
import spot4 from '../../assets/images/spot2-2.jpg';
import spot5 from '../../assets/images/spot2-3.jpg"';
import spot6 from '../../assets/images/spot3-1.jpg"';
import spot7 from '../../assets/images/spot3-2.jpg"';
import spot8 from '../../assets/images/spot4-1.jpg"';
import styles from './result.module.css'; 

function Result() {
  return (
    <div className="result">
      <div class="container-fluid">
      <div class ="row">
        <div class="col-12 mapmargin">
          <img class ="samplemap" src={samplemap} alt="google map result"/>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 col-xs-6">
          <div class = "row">
              <div class = "col-12">
                <img src={spot1} alt="google map result"/>
              </div>
          </div>
          <div class = "row">
            <div class = "col-12">
              <h4>Jacky Fishingspot</h4>
              <h5>Rating: 3.5 </h5>
              
            </div>
          </div>
        </div>
        <div class="col-md-3 col-xs-6">
          <div class = "row">
            <div class = "col-12">
              <img src={spot2} alt="google map result"/>
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
              <img src={spot3} alt="google map result"/>
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
              <img src={spot4} alt="google map result"/>
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
              <img src={spot5} alt="google map result"/>
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
              <img src={spot6} alt="google map result"/>
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
              <img src={spot6} alt="google map result"/>  
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
              <img src={spot8} alt="google map result"/>
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
    </div>
  );
}

export default Result;