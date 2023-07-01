
export const showpageType = (pageType) => {
  return (dispatch) => {
      dispatch({
          type: pageType
      });
  }
}


export const buttonActionType = (loadType) => {
  return (dispatch) => {
      dispatch({
          type: loadType
      });
  }
}

// export const loader = (loadType) => {
//   return (dispatch) => {
//     dispatch({
//         type: loadType
//     });
// }
// }