import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import {useEffect, useState} from "react";
import {getBannersThunk} from "./redux/banners-reducer";
import {useAppDispatch} from "./redux/hooks";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBannersThunk());
    }, []);

    let [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
        setIsOpen(false);
    }

  return (
    <div className={isOpen ? "lock" : "App"}>
        {isOpen && <div onClick={closePopup} className="overlay"></div>}
        {
            isOpen && <div className="popup">
                <h2>Сайт на реконструкции!</h2>
                <p>В данный момент мы занимаемся реконструкцией сайта. Скоро вернёмся.</p>
            <div>
                <button onClick={closePopup}>Закрыть</button>
            </div>
            </div>
        }
      <div className='content'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
