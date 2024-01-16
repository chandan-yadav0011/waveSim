import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import './index.css'

function Cardcomp(props) {
  return (
    <div style={{borderStyle:"hidden", padding:25}}>

    <div
    className="card-div"
    style={{
        cursor: "pointer",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,    
        backgroundImage:
        props.bgim,
        objectFit:"cover",
        width: "300px",
        backgroundRepeat: "no-repeat",
        height: "420px",
      }}
      >
      <br></br>
      <center><Typography
        variant="h4"
        style={{ color: "white", fontFamily: "Poppins", width:"270px" }}
        >
        {props.title}
                <hr style={{
                  width:"250px", 
                  height:"1.5px", 
                  background:"white", 
                  transform:"translate(0px, -10px)"}}/>
      </Typography></center>
      <Typography
        style={{
          color: "#e4e4e5",
          fontFamily: "Poppins",
          fontSize: "17px",
          overflowWrap: "break-word",
          transform:"translate(0px, 30px)"
        }}
        >
        <center>{props.description}</center>
      </Typography>
    </div>
        </div>
  );
}
export default Cardcomp;
