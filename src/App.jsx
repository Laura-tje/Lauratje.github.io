import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
      <Header />
      <header className="bg-(--surface)">
      </header>

      <Outlet />
      <main className="flex-1 container mx-auto">
      </main>

      <Footer />
      <footer className="bg-(--surface) p-4 border-t border-(--bordercolor)">
      </footer>
    </div>
  );
}