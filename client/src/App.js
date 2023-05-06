import Home from './Home';
import ChatScreen from './chatbot/ChatScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
