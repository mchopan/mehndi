import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './components/Context/UserAuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './Main' 
import ProtectedRoute from './ProctedRoute'
const App = () => {
    return(
        <>
            <UserAuthContextProvider>
            <Routes >
                <Route path="/" element={ <Main />} />
                <Route path="/admin" 
                    element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>
                    } />
            </Routes> 
        </UserAuthContextProvider>
        </>
    )
}

export default App;