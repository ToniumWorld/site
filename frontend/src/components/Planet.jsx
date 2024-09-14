import { debounce } from "lodash";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
    addPlanetToUser,
    createWalletElement,
    updateUser,
    updateUserPlanet,
    updateWalletElement,
} from "../utils/axios";
import { fetchDefaultUser } from "../assets/js/getUser";
import BorderAnimation from "../assets/js/animatedBorder";
import Timer from "./Timer";

export default function Planet({ idx, planet, update }) {
    const {
        id,
        name,
        element,
        img,
        speed,
        updatePrice,
        userPlanets,
        forLaboratory,
    } = planet;

    const [userPlanet, setUserPlanet] = useState();

    const getInitState = () => {
        setValue(
            window?.user?.wallet?.value?.find(
                (bal) => bal.element === element.id
            )?.value
        );
    };
    const [value, setValue] = useState(0);

    const [click, setClick] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const animated = useRef(null);

    const updateFn = debounce(async (val) => {
        if (isLoading) {
            setTimeout(() => {
                updateFn(val);
            }, 200);
            return;
        }

        if (window.user?.wallet) {
            const balance = window.user?.wallet?.value;

            const currentElem = balance?.find(
                (item) => item.element === element.id
            );

            if (currentElem?.element) {
                setIsLoading(true);
                currentElem.value = parseFloat(
                    (currentElem.value + val).toFixed(10)
                );
                const data = [
                    ...balance.filter((bal) => bal.element !== element.id),
                    { ...currentElem },
                ];
                setValue(currentElem.value);
                await putWallet(window.user.wallet, data);

                setIsLoading(false);
            } else {
                let data;
                if (window.user.wallet.value?.length) {
                    data = [
                        ...window.user.wallet.value,
                        {
                            element: element.id,
                            value: val,
                            name: element.name,
                            img: element.img,
                            symbol: element.symbol,
                            rare: element.rare,
                        },
                    ];
                } else {
                    data = [
                        {
                            element: element.id,
                            value: val,
                            name: element.name,
                            img: element.img,
                            symbol: element.symbol,
                            rare: element.rare,
                        },
                    ];
                }
                setValue(val);
                await putWallet(window.user.wallet, data);
            }
            await fetchDefaultUser();
        }
    }, 50);
    const debounceFn = useCallback((click) => updateFn(click), []);

    const putWallet = async (walletId, value) => {
        await updateWalletElement(walletId, value);
    };

    const walletUpdate = async (e) => {
        if (e.target.tagName.toLowerCase() === "button") return;

        const plusIcon = document.createElement("div");
        plusIcon.textContent = "+";
        plusIcon.classList.add("plus-icon");
        plusIcon.style.left = `${e.pageX}px`;
        plusIcon.style.top = `${e.pageY}px`;

        document.body.appendChild(plusIcon);
        plusIcon.addEventListener("animationend", () => plusIcon.remove());

        setClick(click + 1);
        
        if(userHasPlanet()) {
            const level = window?.user?.userPlanets.find((item) => item.planetId === id).level
            console.log(level, typeof(level))
            let update;
                if (level == 1)
                    update = 0.05
                if (level == 2)
                    update = 0.5
                if (level == 3)
                    update = 1
                    
            debounceFn(update)
        } else {
            debounceFn(0.00005);
        }
        
       
    };

    useEffect(() => {
        getInitState();
    }, [isLoading, window?.user]);

    useEffect(() => {
        new BorderAnimation(animated.current);
    }, []);

    const userHasPlanet = () => {
        if (window?.user?.userPlanets?.length) {
            const planets = window.user.userPlanets;
            if (planets.some((item) => item.planetId === id)) {
                const planet = planets.find((item) => item.planetId === id);
                //setUserPlanet(planet);
                return true;
            }
        }
        if (window?.user?.nft) {
            const arr = window.user.nft;
            const fullName = `${name}(${element?.symbol}) - Planet #${idx}`;
            const item = arr?.find((item) => item.metadata.name === fullName);
            if (item?.length && window.user.userPlanets?.length) {
                const planets = window.user.userPlanets;
                const planet = planets.find((item) => item.planetId === id);
                if (!planet?.id) {
                    addPlanetToUser(id);
                }
            }
            return item?.length;
        }
        return false;
    };

    const updatePlanetSpeed = async (e) => {
        console.log(window.user.coins)
        if (window.user.coins >= 3) {
            const userPlanet = window.user.userPlanets.find(
                (item) => item.planetId === id
            );
            if(userPlanet.level === 2) {
                return
            }
            await updateUserPlanet(userPlanet.id, +userPlanet.level + 1);
            await updateUser({ coins: window.user.coins - 3 })
            window.user.coins = window.user.coins - 3;
        }
    };

    return (
        <div
            className={`planets__planet animated-border-container with_To rotate ${
                forLaboratory && !userHasPlanet()
                    ? "ver3"
                    : userHasPlanet()
                    ? "ver1"
                    : "ver2"
            }`}
            onClick={(e) => walletUpdate(e)}
        >
            <div className="animated-border" ref={animated}>
                <div
                    className="planet__img"
                    style={{ "--planet-bg": `url(/img/icon/${element.img})` }}
                >
                    <img src={`/img/planet/${img}`} alt="" />
                </div>
                <div className="planet__information">
                    <h4 className="planet__title">
                        {name}({element?.symbol}) - Planet #{idx}
                    </h4>
                    <p className="planet__lvl">level 1</p>
                    <p className="planet__speed">
                        Speed:{" "}
                        {userHasPlanet()
                            ? 
                              window.user.userPlanets.find(
                                  (item) => item.planetId === id
                              ).level == 2 ? 0.5 : 0.05
                            : 0.00005}{" "}
                        ({element?.symbol})/час
                    </p>
                    <p className="planet__description">
                        The extracted resourse is {element?.name}(
                        {element?.symbol})
                    </p>
                    <p className="planet__gc">
                        {value ?? "0.000"} {element?.symbol}
                    </p>
                </div>
                <div className="planet__price">
                    Стоимость апгрейда <span>3 GC</span>
                </div>
                <div className="planet__row">
                    {userHasPlanet() ? (
                        <button
                            className="btn upgrade"
                            onClick={updatePlanetSpeed}
                        >
                            Обновить
                        </button>
                    ) : (
                        <button className="btn buy">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                                href=""
                            >
                                Купить
                            </a>
                        </button>
                    )}

                    {forLaboratory ? (
                        <div className="planet__time-block">
                            {/* <!-- Если нужны английские подписи к числам, то добавь к этому блоку класс eng --> */}
                            <div className="time-block__timer">
                                <Timer />
                            </div>
                            <div className="time-block__text">
                                участвует в объединении тониума
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
