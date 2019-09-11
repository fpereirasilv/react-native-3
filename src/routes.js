import { createAppContainer, createStackNavigator } from "react-navigation";

import Profile from "./screens/Profile";
import Acceleration from "./screens/Acceleration";
import Details from "./screens/Details";

const Router = createAppContainer(
  createStackNavigator(
    {
      Acceleration: Acceleration,
      Profile: Profile,
      Details: Details
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Router;
