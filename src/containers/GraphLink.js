import { connect } from 'react-redux'
import Graph from 'site/Graph'

const mapStateToProps = (state, ownProps) =>{
    return{
        foregroundColor:"#4dbec4",
        duration: 750,
        percentComplete:0.3,
        id:"d3-arc"

    }
}
//http://bootstraplovers.com/templates/float-admin-v1.1/light-version/index.html
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph)

