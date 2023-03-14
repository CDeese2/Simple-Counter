import React from "react";

 const myClockBG = {
   background: "black",
   color: "white",
   width: "500px",
   height: "150px",
   textAlign: "Center",
   paddingTop: "50px",
 };

 const ActualTimer = (props) => {
   return (
     <div className="d-flex flex-row">
       <div className="boxes" style={myClockBG}>
       <h1><i class="fas fa-clock"></i></h1>
       </div>

       <div className="boxes" style={myClockBG}>
         <h1>0</h1>
       </div>

       <div className="boxes" style={myClockBG}>
         <h1>0</h1>
       </div>

       <div className="boxes" style={myClockBG}>
         <h1>0</h1>
       </div>

       <div className="boxes" style={myClockBG}>
         <h1>0</h1>
       </div>
     </div>
   );
 };

 export default ActualTimer;