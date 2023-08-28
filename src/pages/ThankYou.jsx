import { Link } from "react-router-dom";
import "./About.css";

const ThankYou = () => {
    return ( 
        <div>
            <h1>Tak fordi du tilmeldte dig vores nyhedsbrev!</h1>
            <Link to="/">Tilbage til forsiden</Link>
        </div>
     );
}
 
export default ThankYou;