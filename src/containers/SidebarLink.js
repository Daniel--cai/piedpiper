import { connect } from 'react-redux'
import { fetchContent } from 'actions/Button';
import Sidebar from 'site/Sidebar'

const mapStateToProps = (state, ownProps) =>{
    return{
        spin:state.state
    }
}
//http://bootstraplovers.com/templates/float-admin-v1.1/light-version/index.html
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

