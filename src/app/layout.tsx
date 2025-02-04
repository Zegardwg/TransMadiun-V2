// app/layout.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './styles/Css/globals.css';
import './styles/Css/animasi.css';
// import './styles/JavaScrips/eggar.js';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}