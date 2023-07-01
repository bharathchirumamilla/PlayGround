const reducer = (state = {}, action) => {
  switch(action.type) {
        case "CHECKBOX":
        return Object.assign({}, { "pageType": "basic", "componentToRender": "CHECKBOX", "load": true});
        case "EMAIL":
        return Object.assign({}, { "pageType": "basic", "componentToRender": "EMAIL", "load": true});

        case "PARAGRAPH":
        return Object.assign({},  { "pageType": "basic", "componentToRender": "PARAGRAPH", "load": true});

        case "IMAGE":
        return Object.assign({}, { "pageType": "basic", "componentToRender": "IMAGE" , "load": true});

        case "TEXTBOX":
        return Object.assign({},  { "pageType": "basic", "componentToRender": "TEXTBOX", "load": true});

        case "HEADER":
        return Object.assign({},  { "pageType": "basic", "componentToRender": "HEADER", "load": true});

        case "BUTTON":
        return Object.assign({},  { "pageType": "basic", "componentToRender": "BUTTON", "load": true});

        case "TOOLTIP":
        return Object.assign({},  { "pageType": "advance", "componentToRender": "TOOLTIP", "load": true});

        case "PROGRESSBAR":
        return Object.assign({},  { "pageType": "advance", "componentToRender": "PROGRESSBAR", "load": true});

        case "SELECTBOX":
        return Object.assign({},  { "pageType": "basic", "componentToRender": "SELECTBOX", "load": true});

        case "DIALOG":
          return Object.assign({},  { "pageType": "basic", "componentToRender": "DIALOG", "load": true});

        case "FILEUPLOAD":
          return Object.assign({},  { "pageType": "basic", "componentToRender": "FILEUPLOAD", "load": true});

        case "IMAGECARD":
        return Object.assign({},  { "pageType": "basic", "componentToRender": "IMAGECARD", "load": true});

    default: return state;
  }
};

export default reducer;