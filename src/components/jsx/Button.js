// Use JSX

const Button = ({ text, clickHandler, style }) =>
  <div
    className='counter-btn'
    onClick={clickHandler}
    style={style}
  >
    {text}
  </div>

export default Button
