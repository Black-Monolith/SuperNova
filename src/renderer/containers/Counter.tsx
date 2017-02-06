import { connect, Dispatch } from 'react-redux'
import returnof from 'returnof'
import { State } from '../reducers'
import Counter from '../components/Counter'
import { increment, decrement } from '../actions/counter'

const mapStateToProps = (state: State) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

const mapStateReturn = returnof(mapStateToProps)
const mapDispatchReturn = returnof(mapDispatchToProps)

export type MappedProps =
  & typeof mapStateReturn
  & typeof mapDispatchReturn

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
