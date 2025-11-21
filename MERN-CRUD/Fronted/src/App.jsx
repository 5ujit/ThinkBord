// App.jsx
import { Routes, Route } from "react-router-dom";
import { toast } from "react-hot-toast";

import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage"; // <-- fix this path

const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("Congrats!")}>Click</button>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
