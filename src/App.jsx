import Buttons from "./components/Buttons";
import Table from "./components/Table";

{/* Imports added by me */}
import Banner from "./components/Banner";
import useState from "react";
import satData from "./components/satData";

function App() {

  {/* Code copied from assignment. useState function takes satData as an input and it's output is set to the [sat, setSat] array */}
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  {/*filterByType function*/}
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <div>
      {/* Banner component nested within app */}
      <Banner />
      <Buttons 
      filterByType = {filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;