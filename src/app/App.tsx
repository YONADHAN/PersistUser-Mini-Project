import { Toaster } from 'react-hot-toast';
import UserList from '../features/users/components/UserList';
const App = () => {
  return (
    <div>
     
      <UserList />
      <Toaster />
    </div>
  )
}

export default App