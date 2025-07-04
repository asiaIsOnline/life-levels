import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

import PrivateRoute from './routes/PrivateRoute';

import GroupDashboard from './pages/Admin/GroupDashboard';
import InviteUser from './pages/Admin/InviteUser';
import ManageUsers from './pages/Admin/ManageUsers';
import CreateGroupRole from './pages/Admin/CreateGroupRole'
import ManageGroupRoles from './pages/Admin/ManageGroupRoles';
import ManageGroupTasks from './pages/Admin/ManageGroupTasks';
import CreateGroupTask from './pages/Admin/CreateGroupTask';
import GroupTaskDetails from './pages/Admin/GroupTaskDetails';

import UserDashboard from './pages/User/UserDashboard';
import CreateUserRole from './pages/User/CreateUserRole';
import ManageUserRoles from './pages/User/ManageUserRoles';
import CreateUserTask from './pages/User/CreateUserTask'; 
import ManageUserTasks from './pages/User/ManageUserTasks';
import UserTaskDetails from './pages/User/UserTaskDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/admin/dashboard' element={<GroupDashboard />}/>
            <Route path='/admin/invite-user' element={<InviteUser />}/>
            <Route path='/admin/users' element={<ManageUsers />}/>
            <Route path='/admin/create-role' element={<CreateGroupRole />}/>
            <Route path='/admin/roles' element={<ManageGroupRoles />}/>
            <Route path='/admin/create-task' element={<CreateGroupTask />}/>
            <Route path='/admin/tasks' element={<ManageGroupTasks />}/>
            <Route path='/admin/task-details/:id' element={<GroupTaskDetails />}/>
          </Route>

          {/* User Routes */}
          <Route>
            <Route path='/user/dashboard' element={<UserDashboard />}/>
            <Route path='/user/create-role' element={<CreateUserRole />}/>
            <Route path='/user/roles' element={<ManageUserRoles />}/>
            <Route path='/user/create-task' element={<CreateUserTask />}/>
            <Route path='/user/tasks' element={<ManageUserTasks />}/>
            <Route path='/user/task-details/:id' element={<UserTaskDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App