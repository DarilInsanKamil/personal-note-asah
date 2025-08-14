import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './page/HomePage';
import Layout from './page/Layout';
import ArchivePage from './page/ArchivePage';
import AddPage from './page/AddPage';
import DetailNotePage from './page/DetailNotePage';
import EditNotePage from './page/EditNotePage';
import NotFound from './page/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/archive' element={<ArchivePage />} />
        <Route path='/add-note' element={<AddPage />} />
        <Route path='/detail/:id' element={<DetailNotePage />} />
        <Route path='/edit-note/:id' element={<EditNotePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
