// Use JSX
import { Button } from '../../components'
import { increment, decrement, reset } from '../../actions'

const resetStyle = {
  background: 'rgb(177, 136, 136)',
  margin: '40px 0',
}

const Counter = ({ title, subtitle, count }) =>
  <div>
    <Button text='Reset' clickHandler={reset} style={resetStyle} />
    <Button text='-' clickHandler={decrement} />
    <h1>{count}</h1>
    <Button text='+' clickHandler={increment} />
  </div>

export default Counter
