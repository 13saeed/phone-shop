import { Navbar } from './navbar';
import { Section } from './section';
import { SideBar } from './sidebar';
import { Section2} from './section2';
import { Product } from './product';


import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>

      <div className="flex bg-slate-200">
        <SideBar/>
        <div className=" w-full overflow-auto">
        <Section2/>

        <Product/>
        </div>
        
      </div>
      



    </div>

  );
}

export default App;
