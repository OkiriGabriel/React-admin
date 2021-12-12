import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLoader from './components/helpers/MainLoader'

// components: lazyload pages
const Home = React.lazy(() => import('./components/pages/Home'));

const App = (e) => {
  return(
    <>
    <Router>
    <Suspense fallback={MainLoader()}>
     <  Route exact path="/" component={Home} />
     </Suspense>
     </Router>
    </>
  )
} 
export default App;
