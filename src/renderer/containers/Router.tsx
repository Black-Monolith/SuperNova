import { connect, Dispatch } from 'react-redux'
import returnof from 'returnof'
import { State } from '../reducers'
import Router from '../components/Router'

const mapStateToProps = (state: State) => ({
  routing: state.routing
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({

})

const mapStateReturn = returnof(mapStateToProps)
const mapDispatchReturn = returnof(mapDispatchToProps)

export type MappedProps =
  & typeof mapStateReturn
  & typeof mapDispatchReturn

export default connect(mapStateToProps, mapDispatchToProps)(Router)
