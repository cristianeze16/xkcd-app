import { Header } from "./Header";
import {Footer} from "./Footer"


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-xl m-auto"  >{children}</main>
      <Footer />
    </>
  );
}
