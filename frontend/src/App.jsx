import {
BrowserRouter,
  RouterProvider,
  Routes,Route
} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

const App = () => {

  return (
    <div>
      <BrowserRouter>     
     <Routes>
      <Route exact path="/" Component={Join}></Route>
      <Route path="/chat" Component={Chat} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App