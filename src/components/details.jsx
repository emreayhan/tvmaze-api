import React, { Component } from "react";
import { connect } from "react-redux";
import { requestDetailData } from "../store/actions/movieDetailActions";
import "./details.scss";
class Details extends Component {
  state = {
    data: {},
    image: {},
    rating: {},
    summary: ""
  };

  async componentWillMount() {
    await this.props.requestMovieDetailsData();
    console.log(this.props.detailsResponse, "res");
    await this.props.detailsResponse.then(res =>
      this.setState({
        data: res.data,
        image: res.data.image,
        rating: res.data.rating,
        summary: res.data.summary.replace(/(<([^>]+)>)/gi, "")
      })
    );
  }
  render() {
    return (
      <div className="details">
        <div className="header">
          <span>{this.state.data.name}</span>({this.state.data.premiered})
        </div>

        <div className="rate">
          {this.state.rating.average}
          <span> ⭐️ </span>
        </div>

        <img src={`${this.state.image.medium}`} />
        <div className="summary">{this.state.summary}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ detailsResponse: state.detailsResponse });

const mapDispatchToProps = (dispatch, props) => {
  return {
    requestMovieDetailsData: () => {
      dispatch(requestDetailData(props.match.params.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
