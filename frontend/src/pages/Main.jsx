import { TonConnectButton } from "@tonconnect/ui-react";
import { useEffect, useRef, useState } from "react";
import { slides } from "./data/main";
import { Link, useNavigate } from "react-router-dom";
export default function Main() {
    const text = useRef(null);
    const title = useRef(null);
    const img = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    function changeSlide(slide) {
        console.log(slide)
        if(slide === 5) {
            navigate('/planets')
        }
        if(slide === -1) {
            return
        }
        text.current.classList.add('fade-out');
        title.current.classList.add('fade-out');
        img.current.classList.remove('fade-out');
        
        setTimeout(() => {
            setCurrentSlide(slide)
            text.current.classList.remove('fade-out');
            title.current.classList.remove('fade-out');
            img.current.classList.add('fade-out');
        }, 400)
    }

    return (
        <>
            <header className="app-header">
                <div className="container">
                    <div className="header__inner">
                        
                    </div>
                </div>
            </header>
            <main className="main mt">
                <div className="container">
                    <div className="main__inner index">
                        <div className="main__imgs" ref={img}>
                            <img className="fade-out" src={slides[currentSlide].image} alt="" />
                        </div>
                        <div className="main__content">
                            <>
                                <div className="main__title" ref={title}>
                                    {slides[currentSlide].title}
                                </div>
                                <div className="main__text" ref={text}>
                                    {slides[currentSlide].text}
                                </div>
                                <div className="main__btns">
                                    <button
                                        onClick={() =>{
                                            changeSlide(currentSlide - 1)
                                        }
                                        }
                                        className="main__btn prev"
                                    >
                                        Назад
                                    </button>
                                    <button
                                        className="main__btn next"
                                        onClick={() =>{
                                            changeSlide(currentSlide + 1)
                                        }
                                        }
                                    >
                                        Далее
                                    </button>
                                    <Link to='/planets' className="main__btn">
                                        Пропустить
                                    
                                    </Link>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
