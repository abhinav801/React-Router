import {Redirect, Route , Switch} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';
import Layout from './components/layout/Layout'
import HighlightedQuote from './components/quotes/HighlightedQuote'

function App() {
  return (
    <Layout>
     <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>

      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
     
      
      <Route path='/quotes/:quoteId'>
        <QuoteDetails/>
      </Route>
      <Route path='/new-quote'>
        <NewQuote/>
      </Route>
      <Route path='*'>
        <h3>Page Not Found</h3>
      </Route>
     </Switch>
     </Layout>
  );
}

export default App;
