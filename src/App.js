import Nav from './TODO/nav';
import Body from './TODO/Body';
import Provider from "./TODO/CONTEXT"

function App() {

  return (
    <Provider>
      <>
        <Nav />
        <Body />

      </>
    </Provider>
  );
}

export default App;

