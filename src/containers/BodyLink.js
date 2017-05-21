import { connect } from 'react-redux'
import Body from 'site/Body'

const mapStateToProps = (state, ownProps) =>{
    return{
        showModal:state.modal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body)

