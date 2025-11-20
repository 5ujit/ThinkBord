
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/CreatePage";

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.success("congraats")  }></button>
      <Routers>
        <Route path="/" element={Homepage} />
        <Route path="/create" element={CreatePage} />
        <Route path="/note/:id" element={NoteDetailPage} />
        

      </Routers>
    </div>
  );
};

export default App;
