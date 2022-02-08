import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Switch>
      <Route exact path="/prueba-tecnica/" component={Home} />
      <Route path="/detail-product/:id" component={Detail} />
    </Switch>
  );
}

export default App;
