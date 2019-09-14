import { createAppContainer, createStackNavigator } from "react-navigation";

import Profile from "./src/screens/Profile";
import Acceleration from "./src/screens/Acceleration";

const StackRouterRoot = createStackNavigator(
  {
    Acceleration: Acceleration,
    Profile: Profile
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const App = createAppContainer(StackRouterRoot);

export default App;
