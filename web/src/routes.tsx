import * as React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home/Home'
import Signup from './pages/signup/signup'
import More from './pages/more/more'
import MemberPage from './pages/memberPage/memberPage'
// import Errorpage from './pages/errpages/errpages'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path= '/more' component={More} />
                <Route exact path='/main/memberpage' component={MemberPage} />
            </Router>
        )
    }
}
export default Routes