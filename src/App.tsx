import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import GetStartedPage from './pages/GetStartedPage';
import FoundationsPage from './pages/FoundationsPage';
import ComponentsPage from './pages/ComponentsPage';
import ToolsPage from './pages/ToolsPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/foundations" element={<FoundationsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
