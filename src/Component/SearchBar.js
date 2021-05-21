import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    term: "",
  };
  inputChangeHandler = (event) => {
    this.setState({ term: event.target.value });
  };
  OnformSubmit = (event) => {
    event.preventDefault();
    this.props.OnFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.OnformSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.inputChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
