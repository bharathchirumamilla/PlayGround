const basicComponent = {
	"BasicComponents": {
		"Button": {
			"commonprops": {
				"disabled": false,
				"type": "button",
				"className": "my-button"
			},
			"specialprops": {
				"style": {
					"backgroundColor": "blue",
					"color": "white"
				},
				"id": "my-button-id",
				"name": "my-button-name",
				"value": "Button Value",
				"aria-label": "My Button",
				"aria-haspopup": true,
				"aria-expanded": false
			}
		},
		"Header": {
			"commonprops": {
				"title": "My Header"
			},
			"specialprops": {
				"subtitle": "Welcome to my website"
			}
		},
		"TextBox": {
			"commonprops": {
				"value": "",
				"placeholder": "Enter your text",
				"disabled": false
			},
			"specialprops": {
				"onChange": "handleInputChange"
			}
		},
		"Image": {
			"commonprops": {
				"src": "image.jpg",
				"alt": "Image description"
			},
			"specialprops": {
				"width": "100px",
				"height": "auto"
			}
		},
		"Paragraph": {
			"commonprops": {
				"text": "This is a paragraph of text.",
				"className": "my-paragraph",
				"id": "my-paragraph-id",
				"onClick": "handleClick"
			},
			"specialprops": {
				"style": {
					"color": "blue",
					"fontSize": "16px"
				}
			}
		},
		"Email": {
			"commonprops": {
				"value": "",
				"placeholder": "Enter your email",
				"disabled": false
			},
			"specialprops": {
				"onChange": "handleEmailChange"
			}
		},
		"CheckBox": {
			"commonprops": {
				"checked": false,
				"label": "Check me"
			},
			"specialprops": {
				"onChange": "handleCheckboxChange"
			}
		},
	},
	"list": ["CheckBox", "Email", "Paragraph", "Image", "TextBox","Header", "Button"]
};


const advancedComponent = {
	"AdvancedComponents": {
		"ImageCard": {
			"commonprops": {
				"imageSrc": "card-image.jpg",
				"imageAlt": "Card Image"
			},
			"specialprops": {
				"title": "Card Title",
				"description": "This is a description for the image card."
			}
		},
		"FileUpload": {
			"commonprops": {
				"onChange": "handleFileUpload"
			},
			"specialprops": {
				"accept": ".jpg,.png,.pdf",
				"multiple": false
			}
		},
		"Dialog": {
			"commonprops": {
				"open": false,
				"title": "Dialog Title",
				"content": "This is the content of the dialog."
			},
			"specialprops": {
				"onOpen": "handleDialogOpen",
				"onClose": "handleDialogClose"
			}
		},
		"SingleSelectListBox": {
			"commonprops": {
				"options": [{
						"value": "option1",
						"label": "Option 1"
					},
					{
						"value": "option2",
						"label": "Option 2"
					},
					{
						"value": "option3",
						"label": "Option 3"
					}
				],
				"value": "option1"
			},
			"specialprops": {
				"onChange": "handleSelectChange",
				"disabled": false
			}
		},
		"ProgressBar": {
			"commonprops": {
				"value": 50,
				"min": 0,
				"max": 100,
				"variant": "primary",
				"className": "my-progress-bar"
			},
			"specialprops": {
				"style": {
					"backgroundColor": "green",
					"height": "10px"
				}
			}
		},
		"Tooltip": {
			"commonprops": {
				"content": "This is a tooltip",
				"position": "top",
				"trigger": "hover",
				"delay": 200,
				"disabled": false,
				"className": "my-tooltip"
			},
			"specialprops": {
				"style": {
					"backgroundColor": "yellow",
					"color": "black"
				}
			},
		},
	},
	"list": ["Tooltip", "ProgressBar", "SelectBox", "Dialog", "FileUpload","ImageCard"]
};

const reducer = (state = basicComponent, action) => {
  switch(action.type) {
    case "basic":
						return Object.assign({}, basicComponent, { "pageType": "basic", "load" : true});
    case "advance": 
						return Object.assign({}, advancedComponent, { "pageType": "advance",  "load" : true});
    case "exportComponent": return Object.assign({}, {"pageType": "exported",  "load" : true});
    case "exportForm":  return Object.assign({}, {"pageType": "exportedForms",  "load" : true});
    default: return state;
  }
};

export default reducer;