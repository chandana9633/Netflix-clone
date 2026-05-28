import { Routes,Route } from "react-router-dom";   
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Watch from "./pages/Watch/Watch"
import PrivateRoute from "./components/PrivateRoute"

function App(){
    return(
        <Routes>
            <Route path="/login" element={<Login />}/>

            <Route
            path="/"
            element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            }
            />

            <Route
                path="/watch"
                element={
                    <PrivateRoute>
                        <Watch/>
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}

export default App