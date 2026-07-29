import "../styles/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {


  return (

    <>



<div className="Border">

<h1> <b>Dashboard Service Desk</b>  </h1>


      <p> Total Tickets Waiting Supplier           <h3><b> 05 Tickets </b> </h3>     </p> <br />
      <p>Total Tickets  Waiting Business information   <h3><b> 02 Tickets </b></h3>   </p> <br />
      <p>Total Tickets Waiting              <h3> <b>09 Tickets</b></h3>  </p>
      <p>Total Tickets Resolved             <h3><b>21 Tickets</b> </h3>  </p>
      <p>Total Tickets Refused              <h3><b>03 Tickets</b></h3>   </p>
      <p> Total Tickets In Progress         <h3><b>124 Tickets</b></h3>    </p> <br />
      <p> Total Tickets Closed              <h3><b>4245 Tickets</b></h3>  </p> <br />
      <p> Total Tickets Conceled           <h3><b>39 Tickets</b>  </h3>   </p> <br />
      <p> Total Tickets Befor Beging Taken   <h3><b>28 tickets</b></h3>   </p> <br />
            <p> Total Tickets              <h3 className="Title-2" ><b>4476</b></h3>  </p> <br />



</div>

<div className="Border2"> 

      <h1 className="Title"> Diagrame Et Statistique : Data Fevrier</h1> 
      <Link id="link-D" to="/ticketsenattente"> Graphique </Link> <br /> <br />
  
  </div>
    </>
  );
}