// React
import React from 'react';
import { merge } from 'lodash/fp';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {indigoA700, indigo900} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const lightMuiTheme = getMuiTheme(merge(lightBaseTheme,
  {
    palette: {
      primary1Color: indigoA700,
      primary2Color: indigo900
    }
  })
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  getChildContext() {
    return { muiTheme: lightMuiTheme };
  }
  toggleDrawer() {
    console.log('in toggle');
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }
  render() {
    return (
      <div>
        <AppBar
          title="Stock List"
          iconElementLeft={<IconButton onClick={this.toggleDrawer}><Menu /></IconButton>}/>

        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={(drawerOpen) => this.setState({drawerOpen: drawerOpen})}>

          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App
