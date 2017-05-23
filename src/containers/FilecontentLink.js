import { connect } from 'react-redux'
import Body from 'site/Body'
import { addRow } from 'actions/Button.js'

const mapStateToProps = (state, ownProps) =>{
    return{
        showModal:state.modal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRow: dispatch(addRow())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body)

