import './styles.css';
import IMAGE from './react.png';
import HOME from './home.svg';

const App = () => {
  return (
    <>
      <h1>React Typescript Webpack Template</h1>
      <img src={IMAGE} alt="React Logo" width="300" />
      <img src={HOME} alt="Home SVg" width="300" />
    </>
  );
};

export default App;
