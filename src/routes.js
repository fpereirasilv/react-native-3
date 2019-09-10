import { createAppContainer, createStackNavigator } from "react-navigation";

import Profile from "./screens/Profile";
import Acceleration from "./screens/Acceleration";

const Routes = createAppContainer(
  createStackNavigator({
    Acceleration: Acceleration,
    Profile: Profile
  },{
    defaultNavigationOptions: {
      header: null
    }
  }),
);


export default Routes;
