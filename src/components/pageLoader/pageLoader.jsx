import React, { Component } from 'react';
import loaderImg from 'assets/img/loading.gif';
import { connect } from 'react-redux';

class PageLoader extends Component {
  state = {};
  render() {
    const { loading } = this.props;

    if (!loading) return null;

    return (
      <div className="loading-container">
        <div>
          <img alt={'Loading...'} style={{ border: '6px solid #000', borderRadius: 15 }} src={loaderImg}></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ loading: state.loading.loading });

export default connect(mapStateToProps)(PageLoader);
