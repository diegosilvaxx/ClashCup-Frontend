import { connect } from 'react-redux';
import * as actionAuthCreators from '~/store/modules/auth/auth.actions';
import * as actionClienteCreators from '~/store/modules/cadastros/ranking/ranking.actions';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...actionAuthCreators,
      ...actionClienteCreators,
    },
    dispatch
  );
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
