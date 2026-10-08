import "../styles/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {


  return (



    <>


<div className="mid-section">
 
  
  <Link id="link-D" to="/Dashboard"> Dashboard</Link> <br />
  <Link id="link-D" to="/tautauxdestickets">TautauxdesTickets </Link>  <br />
  <Link id="link-D" to="/diagramme"> Diagramme </Link>  <br />
 

</div>


      <h1> Dashboard Des KPI Du Mois Fevrier </h1> <br />


<div className="section">


     <div className="boxes">

  <div id="box">
    <p>Total Tickets Waiting Supplier</p>
    <h3>05 Tickets</h3>
  </div>

  <div id="box">
    <p>Total Tickets Waiting Business Information</p>
    <h3>02 Tickets</h3>
  </div>

  <div id="box">
    <p>Total Tickets Waiting</p>
    <h3>09 Tickets</h3>
  </div>

  <div id="box">
    <p>Total Tickets Resolved</p>
    <h3>21 Tickets</h3>
  </div>

  <div id="box">
    <p>Total Tickets Refused</p>
    <h3>03 Tickets</h3>
  </div>

  <div id="box">
    <p>Total Tickets In Progress</p>
    <h3>124 Tickets</h3>
  </div>

  <div id="box">
    <p>Total Tickets Canceled</p>
    <h3>39 Tickets</h3>
  </div>



  <div id="box">
    <p>Total Tickets Befor Beging Taken</p>
    <h3>28 Tickets</h3>
  </div>

  

  <div id="box">
    <p>Total Tickets Closed</p>
    <h3>4245 Tickets</h3>
  </div>
   </div>
  </div>

        

<div className="Border2"> 

      <h1 className="Title"> Diagrame Et Statistique : Data Fevrier</h1> 
      <Link id="link-K" to="/diagramme"> Diagramme </Link> <br /> <br />
  
  </div>

    </>
  );
}

