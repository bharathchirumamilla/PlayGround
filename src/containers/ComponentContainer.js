import React, { useEffect } from 'react';
import '../styles/component-styles.css';
import { useSelector} from "react-redux";
import ComponentFactory from './ComponentFactory';
import ExportFormCoantainer from './ExportFormConatiner';
import ExportContainer from './ExportContainer';


export const ComponentContainer = () => {

  const buttonSelected = useSelector((state) => state.button);

  const page = useSelector((state) => state.page);

  console.log('page...',page);
  console.log('pageAdvance....', page.advancedComponents);
  console.log('pageBasic....', page.BasicComponents);

  return(
    <div className='component-container'>
     {  page.pageType !== "exported" &&  page.pageType !== "exportedForms" && <div className='component-label'>ComponentContainer</div> }  
     {  page.pageType !== "exported" &&  page.pageType !== "exportedForms" && <div className='component-label'><h6>select component on left side list</h6></div> }
         
     { page.pageType === "exported" && <div> <h1> Exported Components</h1> <ExportContainer /> </div>}

     { page.pageType === "exportedForms" && <div> <ExportFormCoantainer /></div>}
      
        { !buttonSelected.load &&  page.pageType !== "exported" &&  page.pageType !== "exportedForms" && <marquee behavior="alternate" direction="right" width='100%' height='100%' loop='1'>  <i className="fas fa-hand-point-right red-color"></i><h1 style={{color: 'cornflowerblue'}}>Select the Component on Left Side to Customize</h1> </marquee>}

        { Object.keys(buttonSelected).length > 0  &&  page.pageType !== "exported" &&  page.pageType !== "exportedForms"  && <div style={{width: '40px'}}><ComponentFactory com={buttonSelected.componentToRender
} componentlist={page.pageType === "advance" ? page.AdvancedComponents : page.BasicComponents}/></div> }
    </div>
  )
}