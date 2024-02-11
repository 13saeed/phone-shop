import { useState } from "react";
import { Navbar } from './navbar';
import { Section } from './section';
import { SideBar } from './sidebar';
import { Section2} from './section2';
import { Product } from './product';
import './App.css';



function App() {

    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(2000);
    
  return (
    <div>
      <Navbar/>
      <Section/>

      <div className="flex bg-slate-200">
        <SideBar setMin={setMinValue} setMax={setMaxValue} min={minValue} max={maxValue}/>
        <div className=" w-full overflow-auto">
        <Section2/>
        <div className="flex flex-wrap m-5 justify-center">
        <Product min={minValue} max={maxValue}/>
        </div>




        </div>
        
      </div>
      



    </div>

  );
}

export default App;
