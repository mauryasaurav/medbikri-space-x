import { Route, Switch, BrowserRouter } from "react-router-dom"
import Dashboard from './component/dashboard/Dashboad.tsx';
import DashboardView from './component/dashboard/DashboardView.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:id" component={DashboardView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
