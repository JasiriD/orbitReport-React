
import satData from "./satData";
import id from '../App';
import './styling.css';


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className = "flex-container">

      {/*Given code*/}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      
        {/*onClick function that points to setSat function with satData passed to it*/}
        <button onClick={() => setSat(satData)} key={id}>All Orbits</button>
    </div>
  );
};

export default Buttons;