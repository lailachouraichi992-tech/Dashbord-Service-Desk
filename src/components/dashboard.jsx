import "../styles/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {


  return (



    <>


<div className="mid-section">
 
  
  <Link id="link-D" to="/Dashboard"> Dashboard</Link> <br />
  <Link id="link-D" to="/Nombres-des-Tickets">nombres des Tickets </Link>  <br />
  <Link id="link-D" to="/Diagramme-attendue"> diagramme attendue</Link>  <br />
 

</div>




<div className="section">

      <h1> Dashboard </h1> <br />

     <div className="boxes">

  <div className="box">
    <p>Total Tickets Waiting Supplier</p>
    <h3>05 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Waiting Business Information</p>
    <h3>02 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Waiting</p>
    <h3>09 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Resolved</p>
    <h3>21 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Refused</p>
    <h3>03 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets In Progress</p>
    <h3>124 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Closed</p>
    <h3>4245 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Canceled</p>
    <h3>39 Tickets</h3>
  </div>

  <div className="box">
    <p>Total Tickets Before Being Taken</p>
    <h3>28 Tickets</h3>
  </div>

   </div>
  </div>

        

<div className="Border2"> 

      <h1 className="Title"> Diagrame Et Statistique : Data Fevrier</h1> 
      <Link id="link-K" to="/ticketsenattente"> Ticketsenattente </Link> <br /> <br />
  
  </div>

    </>
  );
}

