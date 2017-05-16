import { connect } from 'react-redux'
import { fetchContent } from 'actions/Button';
import Sidebar from 'site/Sidebar'

const mapStateToProps = (state, ownProps) =>{
    return{
        spin:state.state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(fetchContent());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

