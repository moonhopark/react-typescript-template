import './styles.css'
import IMAGE from './react.png'
import HOME from './home.svg'
import ClickCounter from './ClickCounter'

const App = () => {
  return (
    <>
      <h1>
        Edited Hello React Typescript Webpack Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" />
      <img src={HOME} alt="Home SVg" width="300" />
      <ClickCounter />
    </>
  )
}

export default App
