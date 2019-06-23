import React, { Component } from "react";
import { connect } from "react-redux";
import { requestData } from "../store/actions/movieActions";
import { NavLink } from "react-router-dom";
import "./list.scss";
class List extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    await this.props.requestMovieData();
    await this.props.response.then(res => this.setState({ data: res.data }));
  }

  render() {
    return (
      <div className="list">
        {this.state.data.map(el => (
          <li key={el.show.id}>
            <NavLink className="link" to={`${el.show.id}`} exact>
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
                <span className="spanForName">{el.show.name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ response: state.response });

const mapDispatchToProps = dispatch => {
  return {
    requestMovieData: () => {
      dispatch(requestData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
