import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, Restaurants } from '../../pages';
import { ROUTES } from '../../ts/enums';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.RESTAURANTS} component={Restaurants} />
      </Switch>
    </BrowserRouter>
  );
};
