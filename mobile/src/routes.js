import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import LandingPage from './pages/LandingPage';
import PathFinderPage from './pages/PathFinderPage';

const Routes = createAppContainer( //o que estiver em primeiro será a página inicial
    createSwitchNavigator({
      LandingPage,
      PathFinderPage,
    })
);

export default Routes;