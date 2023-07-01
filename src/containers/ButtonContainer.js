import React from 'react';
import '../styles/button-styles.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from 'redux';

export const ButtonContainer = () => {

  const dispatch = useDispatch();
  const { buttonActionType } = bindActionCreators(actionCreators, dispatch);

  const buttonList = useSelector((state) => state.page.list);

  function doButtonAction(event){
    buttonActionType(event.target.innerText);
  }

  return(
    <div className="button-container">
      {buttonList && buttonList.map((item, index) => {
         return   <a className="btn btn-4" key={index} onClick={doButtonAction}>{item}</a>
      })}
</div>
  )
}