import { Fragment } from "react";
import { useParams , Route, Link} from "react-router-dom";
import QuoteItem from "../components/quotes/QuoteItem";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1' , author: 'Max' , text: 'Learning React is Fun'},
    {id: 'q2' , author: 'Maxmillian' , text: 'Learning React is great'}
]

const QuoteDetails = ()=>{

    const param = useParams();

    const quote = DUMMY_QUOTES.filter( (item) => item.id === param.quoteId)

    if(quote.length === 0)
    return <p>No quote Found</p>

    return<Fragment>
        <HighlightedQuote text={quote[0].text} author={quote[0].author}/>
        <Route path={`/quotes/${param.quoteId}`} exact>
        <div className="centered">
            <Link className="btn--flat" to={`/quotes/${param.quoteId}/comment`}>Load Comments</Link>
        </div>
        </Route>
       
        <Route path={`/quotes/${param.quoteId}/comment`}>
            <Comments/>
        </Route>
    </Fragment>
}

export default QuoteDetails;