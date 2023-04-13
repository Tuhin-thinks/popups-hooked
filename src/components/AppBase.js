import ConfirmContextProvider from "../context/ConfirmContext";
import ConfirmModal from "./ConfirmModal";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

/**
 * Wraps the entire app in a context provider
 * Define the confirm modal here, so that it can be used anywhere in the app
 * @returns
 */
const AppBase = () => {
  return (
    <ConfirmContextProvider>
      <ConfirmModal />
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </ConfirmContextProvider>
  );
};

export default AppBase;
