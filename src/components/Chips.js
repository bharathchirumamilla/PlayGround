
import React from "react";
import ReactDOM from "react-dom";

import "../styles/chips-styles.css"

class Chips extends React.Component {


  state = {
    items: [],
    value: "",
    error: null,
    itemsList : this.props
  };

  handleKeyDown = evt => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var value = this.state.value.trim();

      if (value && this.isValid(value)) {
        this.setState({
          items: [...this.state.items, this.state.value],
          value: ""
        });
      }
    }
  };

  handleChange = evt => {
    this.setState({
      value: evt.target.value,
      error: null
    });
  };

  handleDelete = item => {
    this.setState({
      items: this.state.items.filter(i => i !== item)
    });
  };

  handlePaste = evt => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter(email => !this.isInList(email));

      this.setState({
        items: [...this.state.items, ...toBeAdded]
      });
    }
  };

  isValid(email) {
    let error = null;

    if (this.isInList(email)) {
      error = `${email} has already been added.`;
    }

      //if (!this.isEmail(email)) {
      //error = `${email} is not a valid email address.`;
      //}

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }

  isInList(email) {
    return this.state.items.includes(email);
  }

  isEmail(email) {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }

  render() {

    // console.log('common received...', this.props.data.commonprops);
    // console.log('advanve received...', this.props.data.specialprops);
    return (
      <>
        {this.props.data !== undefined &&  Object.keys(this.props.data.commonprops).length > 0 &&  Object.keys(this.props.data.commonprops).map(item => (
          <div className="tag-item" key={item}>
            {item}
            <button
              type="button"
              className="button"
              onClick={() => this.handleDelete(item)}
            >
              &times;
            </button>
          </div>
        ))}

        <div
          className={" " + (this.state.error && " has-error")}
          value={this.state.value}
          placeholder=""
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          onPaste={this.handlePaste}
        />

       

        {this.state.error && <p className="error">{this.state.error}</p>}
        
        <span> <button disabled>add Extra Props</button></span>
        <span><button style={{backgroundColor:'cornflowerblue', border:'120px round', margin:'120px', cursor: 'pointer'}}>Export</button></span>
      </>
    );
  }
}


export default Chips;