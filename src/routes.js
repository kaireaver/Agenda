import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from '~/pages/Main';
import NewContact from '~/pages/NewContact';
import UpdateContact from '~/pages/UpdateContact';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Home: {
        screen: Main,
      },
      NewContact: {
        screen: NewContact,
      },
      UpdateContact: {
        screen: UpdateContact,
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
);

export default Routes;
