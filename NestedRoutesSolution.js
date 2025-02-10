```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId?" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function Users() {
  let { userId } = useParams();
  return (
    <div>
      <h1>Users</h1>
      {userId ? <p>User ID: {userId}</p> : <p>All Users</p>}
    </div>
  );
}
export default App;
```