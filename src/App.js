import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './pages/AppShell'
import Home from './pages/Home'
import { MantineProvider } from '@mantine/core'
import theme from './style/theme'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='blog' element={<AppShell />}>
            <Route exact path='category/:catId' element={<AppShell />}></Route>
            <Route
              path='category/:catId/post/:postId'
              element={<AppShell />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
