import { connect } from 'react-redux'
import Filecontent from 'site/Filecontent'
import { addRow } from 'actions/Button.js'

const mapStateToProps = (state, ownProps) =>{
    return{
        titleList:state.titleList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRow: ()=>dispatch(addRow())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filecontent)

