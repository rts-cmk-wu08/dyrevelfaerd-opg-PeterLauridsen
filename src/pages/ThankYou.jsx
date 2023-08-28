import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
    return ( 
        <div className="containerThankYou">
            <h1>Tak fordi du tilmeldte dig vores nyhedsbrev!</h1>
            <Link to="/">Tilbage til forsiden</Link>
        </div>
     );
}
 
export default ThankYou;