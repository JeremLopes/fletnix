import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavVertical from "./libs/ui/components/navigation/nav-vertical/nav-vertical";
import Home from "./pages/home/home";
import Media from "./pages/media/media";

function App() {
  const navigation = [
    {
      icon: "home-line",
      link: "/",
    },
  ];

  return (
    <BrowserRouter>
      <NavVertical navigation={navigation} />
      <main className="w-[calc(100%_-_72px)] ml-[72px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="media">
            <Route path=":type/:id" element={<Media />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
