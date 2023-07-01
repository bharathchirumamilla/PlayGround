import React from 'react';
import Chips from '../components/Chips';

function ComponentFactory(props){

  switch (props.com) {
      case "CHECKBOX":
      return <Chips data={props.componentlist.CheckBox}/>;
      case "EMAIL":
      return <Chips data={props.componentlist.Email}/>;
      case "PARAGRAPH":
      return <Chips data={props.componentlist.Paragraph}/>;
      case "IMAGE":
      return <Chips data={props.componentlist.Image}/>;
      case "TEXTBOX":
      return <Chips data={props.componentlist.TextBox}/>;
      case "HEADER":
      return <Chips data={props.componentlist.Header}/>;
      case "BUTTON":
      return <Chips data={props.componentlist.Button}/>;
      case "TOOLTIP":
      return <Chips data={props.componentlist.Tooltip}/>;
      case "PROGRESSBAR":
      return <Chips data={props.componentlist.ProgressBar}/>;
      case "SELECTBOX":
      return <Chips data={props.componentlist.SingleSelectListBox}/>;
      case "DIALOG":
      return <Chips data={props.componentlist.Dialog}/>;
      case "FILEUPLOAD":
      return <Chips data={props.componentlist.FileUpload}/>;
      case "IMAGECARD":
      return <Chips data={props.componentlist.ImageCard}/>;
                            
      default:
        return <div>Reload...</div>;
  }

}

export default ComponentFactory;
