import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <App />
  </StrictMode>
)
// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve JSX files with the correct MIME type
// app.get('*.jsx', (req, res, next) => {
//     res.type('text/javascript');
//     next();
// });

// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
