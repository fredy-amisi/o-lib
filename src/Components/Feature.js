import React from "react";

const Feature=()=>{
    return(
        <div>
               <div className="feature">
    <div className="our-feature">
        
    <h1>OUR <span>FEATURE</span></h1>
</div>
<div className="vertical">
    
</div>
<p>Discover the exceptional features that make our online library a rich and interactive 
    resource hub.<br/> Explore a diverse collection, enjoy 24/7 access,
     and engage<br/> in interactive learning experiences.</p>

    <div className="overall">
    <div className="container">
        <div className="small-container">
            <h2>Wide Selection</h2>
  <p>Explore a vast collection of books, articles, and resources spanning various genres and subjects.</p>
        </div>
        <div className="small-container">
            <h2>24/7 Access</h2>
            <p>Enjoy the convenience of accessing our online library anytime, anywhere, with 24/7 availability.</p>
        </div>
        <div className="small-container">
            <h2>Interactive Learning</h2>
  <p>Engage in interactive learning experiences, discussions, and virtual events to enhance your knowledge.</p>
        </div>


    </div>
    <div className="container-b">
        <p>You can Search any Book<br/>Product Buying.</p>
        <form className="f-form">
            <div>
            <input type="text" id="key-word" placeholder="Your Key Word"/>
        </div>
        <div>
            <input type="text" id="category" placeholder="Choose Category"/>
        </div>
        <div>
            <input type="text" id="price" placeholder="Select price"/>
        </div>
        <button className="f-button">Search Now</button>
        </form>
        
    </div>
</div>
</div>
        </div>
    )
}
export default Feature;