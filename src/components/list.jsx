import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestData } from "../store/actions";
import { NavLink } from "react-router-dom";

class List extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    await this.props.requestData();
    await this.props.response.then(res => this.setState({ data: res.data }));
  }

  render() {
    return <div>
    {this.state.data.map(el => (
      <li
        key={el.show.id}
        style={{
          listStyle: "none"
        }}
      >
        <NavLink
          to={`${el.show.id}`}
          exact
          style={{
            marginLeft: "20px",
            marginBottom: "100px",
            color: "dodgerblue"
          }}
        >
          <div
            style={{
              padding: "10px"
            }}
          >
            <img
              width="80"
              height="80"
              src={`${el.show.image.medium}`}
              alt="el.show.name"
            />
            <span
              style={{
                marginLeft: "10px",
                marginBottom: "20px",
                fontWeight: "bolder",
                fontFamily:
                  "Franklin Gothic Medium, Arial Narrow', Arial, sans-serif"
              }}
            >
              {" "}
              {el.show.name}
            </span>
          </div>
        </NavLink>
      </li>
    ))}
  </div>;
  }
}

const mapStateToProps = state => ({ response: state.response });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
