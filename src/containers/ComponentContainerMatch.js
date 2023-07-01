import React from 'react';
import '../styles/component-styles.css';
import { useSelector } from "react-redux"

export const ComponentContainerMatch = () => {
  const pageType = useSelector((state) => state.page);
  console.log('basic component...', pageType);
 
  return null;
}