// React
import React from 'react';
import { merge } from 'lodash/fp';

// Material UI
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Button, IconButton } from 'react-toolbox/lib/button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    console.log('in toggle');
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    return (
      <div>
        <AppBar fixed>
          <Button mini floating accent icon="menu" />
        </AppBar>

        {/*<Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={(drawerOpen) => this.setState({drawerOpen})}>

          <MenuItem onClick={this.toggleDrawer}>Item 1</MenuItem>
          <MenuItem onClick={this.toggleDrawer}>Item 2</MenuItem>
        </Drawer>*/}
      </div>
    );
  }
}

// App.childContextTypes = {
//   muiTheme: React.PropTypes.object.isRequired,
// };

export default App
