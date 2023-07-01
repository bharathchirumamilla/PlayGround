import React from 'react';
import '../styles/exportforms-styles.css';

const ExportFormCoantainer = () => {
  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'row'}}>

        <div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
            <a href="#" className="tag" style={{background:'rgba(96,188,94,0.2)',color:'rgb(96,188,94)'}}>TextBox</a>
            <a href="#" className="tag" style={{background:'rgba(130,134,217,0.2)',color:'rgb(130,134,217)'}}>Mobile</a>
            <a href="#" className="tag" style={{background:'rgba(82,178,135,0.2)',color:'rgb(82,178,135)'}}>Email</a>
            <a href="#" className="tag" style={{background:'rgba(163,159,81,0.2)',color:'rgb(163,159,81)'}}>Select</a>
            <a href="#" className="tag" style={{background:'rgba(175,102,193,0.2)',color:'rgb(175,102,193)'}}>Checkbox</a>
            <a href="#" className="tag" style={{background:'rgba(193,102,135,0.2)',color:'rgb(193,102,135)'}}>Radio</a>
            <a href="#" className="tag" style={{background:'rgba(190,154,84,0.2)',color:'rgb(190,154,84)'}}>Option</a>
            </div>
        </div>

        <div style={{marginLeft: '150px', cursor:'pointer'}}>
            <h2> Drag and Drop Functinality here</h2>
        </div>

    </div>
    
    </>
    
  )
}

export default ExportFormCoantainer;
