import React from "react";
import RestaurantDropdown from "./RestaurantsDropDown";
import RestaurantMenu from "./RestaurantMenu";

class AddContact extends React.Component {
  constructor(props) {

    //showMenu=false;
    super(props);
    this.state = {
      SearchType: "PNR",
      SearchValue: "",
    };
    localStorage.removeItem("Station");
    localStorage.removeItem("menuIndex");
  }
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  onValueChange = (e) => {
    this.setState({
      SearchValue: "",
      SearchType: e.target.value,
    });
  };
  handleSubmit = (e) => {
if(this.state.SearchType == "Station"){
  localStorage.setItem("station","1");
}
else{//PNR
  localStorage.setItem("station","2");
}

console.log(this.SearchType);

  };
  render() {
    return (
      <div className="ui main">
        <h2>Customer Dash Board</h2>
        <a href="#">View Orders</a>
        <div>
              <input
                type="radio"
                value="PNR"
                checked={this.state.SearchType === "PNR"}
                onChange={this.onValueChange}
              />
              <label htmlFor="PNR">PNR</label>
              <input
                type="radio"
                value="Station"
                checked={this.state.SearchType === "Station"}
                onChange={this.onValueChange}
              />
              
              <label htmlFor="Station">Station</label>
        </div>
        <form className="demoForm" onSubmit={this.handleSubmit}>
            <div className="field">
                {/* <label>PNR No.  </label> */}
                <input
                  type="text"
                  name="pnr"
                  placeholder={this.state.SearchType}
                  value={this.state.SearchValue}
                  onChange={(e) => this.setState({ SearchValue: e.target.value })}
                />


                <input
                      type="submit"
                      value="Search"
                      disabled={!this.state.SearchValue}
                    />
            </div>
        </form>
        <div className="field">
          <label>Select the Restuarant  </label>

          <RestaurantDropdown />
              {/* <select>
                <option value="A2B">A2B</option>
                <option value="KFC">KFC</option>
                <option value="Malabar">Malabar</option>
              </select> */}
          </div>
        <div>
        </div>
      <div>
      </div>
      </div>
    );
  }
}

export default AddContact;
