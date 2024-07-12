import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import Feedbackstats from "./components/Feedbackstats";
import Feedbackform from "./components/Feedbackform";
import About from "./pages/About";
import{BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Abouticon from "./components/Abouticon";
import { FeedbackProvider } from "./CONTEXT/FeedbackContext";
function App() {
  
 


  
  return (
    <FeedbackProvider>
    <Router>
    <Header text='FeedBack UI'/>
     <div className='container'>
      <Routes>
        <Route exact path="/" element={
            <>
                <Feedbackform />
           <Feedbackstats />
           <Feedbacklist    /> 
            </>
        }>
           
        </Route>     
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Abouticon/>
    </div>
    </Router>
    </FeedbackProvider>
    
  )
}

export default App;
