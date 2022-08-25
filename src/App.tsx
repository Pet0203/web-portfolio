
import * as React from 'react';

interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
      return (
          <>
        <h1>
          Hello there!
        </h1>
      </>
    );
  }
}

export default App;
