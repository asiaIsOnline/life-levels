import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import PrivateRoute from './routes/PrivateRoute';

import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ManageTasks from './pages/Admin/ManageTasks';
import CreateTask from './pages/Admin/CreateTask';
import ManageRoles from './pages/Admin/ManageRoles';

import RoleDashboard from './pages/Role/RoleDashboard';
import RoleTasks from './pages/Role/RoleTasks';
import CreateRoleTask from './pages/Role/CreateRoleTask';
import TaskDetails from './pages/Role/TaskDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/admin/dashboard' element={<Dashboard />}/>
            <Route path='/admin/tasks' element={<ManageTasks />}/>
            <Route path='/admin/create-task' element={<CreateTask />}/>
            <Route path='/admin/roles' element={<ManageRoles />}/>
          </Route>

          {/* Role Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/role/dashboard' element={<RoleDashboard />}/>
            <Route path='/role/tasks' element={<RoleTasks />}/>
            <Route path='/role/create-task' element={<CreateRoleTask />}/>
            <Route path='/role/task-details/:id' element={<TaskDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App