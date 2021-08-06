import Nav from './nav';
import Body from './Body';
import Provider from "./CONTEXT"

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

