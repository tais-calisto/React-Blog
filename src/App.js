import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './app-shell/AppShell'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppShell />}>
          <Route exact path='category/:catId' element={<AppShell />}></Route>
          <Route
            path='category/:catId/post/:postId'
            element={<AppShell />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
