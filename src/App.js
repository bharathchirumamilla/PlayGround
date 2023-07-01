import './App.css';
import { ButtonContainer } from './containers/ButtonContainer';
import { NavContainer } from './containers/NavConatiner';
import { ComponentContainer} from './containers/ComponentContainer';
import { Route, Routes } from "react-router-dom";
import { ComponentContainerMatch } from './containers/ComponentContainerMatch';
import { Audio } from  'react-loader-spinner'
// import { useState, CSSProperties } from "react";
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux"
import Spinner from './components/spinner';


function App() {

const [load, setLoading] = useState(true);

const buttonList = useSelector((state) => state.page.list);


    useEffect(() => {
      setTimeout(() => {setLoading(load => !load)},
      2500)
    },[]);

  return (
    <div className="App">

      
            <div className='app-container'>
            <NavContainer />
            {load === true ?  <Spinner /> :  
            <div className='container'>
                <div>
                    <ButtonContainer />
                </div>
                <div className='container1'>
               <div>
                  <ComponentContainer/>
                </div>
            </div>
            </div>
      }
        </div>
      
    
     {/* <ClipLoader
        color={'red'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}


      

    
      <div>
      <Routes>
      <Route exact path='/basic' element={<ComponentContainerMatch />} />
      <Route exact path='/advance' element={<ComponentContainerMatch />} />
      <Route exact path='/export' element={<ComponentContainerMatch />} />
      <Route exact path='/exportForms' element={<ComponentContainerMatch />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
