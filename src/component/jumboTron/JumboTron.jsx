import "./jumboTron.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import{} from 'react-bootstrap';
import Lottie from "lottie-react";
import Dinosaurus from "./dinosaurus.json";

export default function JumboTron() {
  return (
    <div className="jumboTronWrapper">
      <div className="left">
        <h1>Website ini dibuat dengan React <br />sebagai tugas HTML to Framework</h1>
      </div>
      <div className="right">
        <div className="lottie">
          <Lottie className="lottieItem"  animationData={Dinosaurus}></Lottie>
        </div>
      </div>
      
    </div>
    
  )
}
