import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = { txt: '' }
    this.update = this.update.bind(this)
  }
  update(e){
    // this.setState({ txt: e.target.value})
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App
