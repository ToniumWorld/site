import { useCallback, useEffect, useState } from "react";
import { getPlanet, updateWalletElement } from "../utils/axios";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { ColorRing } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
import { debounce } from 'lodash';

export default function Detail() {
	const { planetId } = useParams();
	const [planet, setPlanet] = useState();
	const [loading, setIsLoading] = useState(false);
    const [value, setValue] = useState(0);
    const [resource, setResource] = useState(false)
    const [click, setClick] = useState(0)

	const { t } = useTranslation();

	const fetchPlanet = async () => {
		const a = await getPlanet(planetId, window?.user?.id);
        setPlanet(a);
        setIsLoading(false);
	};

    const getInitState = () => {
        setValue(
            window?.user?.wallet?.value?.find(
                (bal) => bal.element === planet?.element?.id
            )?.value
        );
    };
    

	useEffect(() => {
        document.addEventListener('getUser', () => {
            setIsLoading(true);
            getInitState();
            fetchPlanet();
        })

	}, [window, localStorage.getItem('user')]);

	const userHasPlanet = () => {
		if (planet?.user_planets) {
			const plData = planet.user_planets;
			const idx = plData?.find(
				(item) =>
					item?.planetId === planet?.id &&
					item?.userId === window?.user?.id
			);
			if (idx?.id) {
				return true;
			}
		}
		if (window?.user?.userPlanets?.length) {
			const planets = window.user.userPlanets;
			if (planets.some((item) => item.planetId === planet?.id)) {
				const planeta = planets.find(
					(item) => item.planetId === planet?.id
				);
				//setUserPlanet(planet);
				return true;
			}
		}
		if (window?.user?.nft) {
			const arr = window.user.nft;
			const fullName = `${planet?.name}(${planet?.element?.symbol}) - Planet #${planet?.element?.index}`;
			const item = arr?.find((item) => item.metadata.name === fullName);
			if (item?.length && window.user.userPlanets?.length) {
				const planets = window.user.userPlanets;
				const planeta = planets.find(
					(item) => item.planetId === planet?.id
				);
				if (!planeta?.id) {
					//addPlanetToUser(id);
				}
			}
			return item?.length;
		}
		return false;
	};

    const putWallet = async (walletId, value) => {
        await updateWalletElement(walletId, value);
    };

    const updateFn = debounce(async (val) => {
        if (loading) {
            setTimeout(() => {
                updateFn(val);
            }, 200);
            return;
        }

        if (window.user?.wallet) {
            const balance = window.user?.wallet?.value;

            const currentElem = balance?.find(
                (item) => item.element === planet?.element?.id
            );

            if (currentElem?.element) {
                setIsLoading(true);
                currentElem.value = parseFloat(
                    (parseFloat(currentElem.value) + val).toFixed(10)
                );
                const data = [
                    ...balance.filter((bal) => bal.element !== planet?.element?.id),
                    { ...currentElem },
                ];
                setValue(currentElem.value);
                await putWallet(window.user.wallet, data);

                setIsLoading(false);
            } else {
                let data;
                console.log(planet, planetId)
                if (window.user.wallet.value?.length) {
                    data = [
                        ...window.user.wallet.value,
                        {
                            element: planet?.element.id,
                            value: val,
                            name: planet?.element.name,
                            img: planet?.element.img,
                            symbol: planet?.element.symbol,
                            rare: planet?.element.rare,
                        },
                    ];
                } else {
                    data = [
                        {
                            element: planet?.element.id,
                            value: val,
                            name: planet?.element.name,
                            img: planet?.element.img,
                            symbol: planet?.element.symbol,
                            rare: planet?.element.rare,
                        },
                    ];
                }
                setValue(val);
                await putWallet(window.user.wallet, data);
                window.user.wallet.value = data;
            }
            //await fetchDefaultUser();
        }
    }, 50);
    const debounceFn = useCallback((click) => updateFn(click), []);

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
        if (!window?.user?.id && click >= 2) {
            showModal(e, 'wallet')
        }

        if (userHasPlanet()) {
            const level = window?.user?.userPlanets.find(
                (item) => item.planetId === id
            ).level;
            console.log(level, typeof level);
            let update;
            if (level == 1) update = 0.05;
            if (level == 2) update = 0.5;
            if (level == 3) update = 1;

            debounceFn(0.00005);
        } else {
            debounceFn(0.00005);
        }
    };

	return (
		<Layout without>
			<div className="main__inner">
				{!planet?.id ? (
					<div className="color-ring-wrapper planets-ring">
						<ColorRing
							visible={true}
							height={1000}
							width={500}
							colors={[
								"#e15b64",
								"#f47e60",
								"#f8b26a",
								"#abbd81",
								"#849b87",
							]}
						/>
					</div>
				) : (
					<div className="planet__detail">
						<Link style={{textDecoration: 'none'}} to='/planets' className="header-back">
							<div className="back-title">
								<span>
									Вернуться <br /> назад
								</span>{" "}
								<br />
							</div>
							<img src="/builds/back.png" alt="Вернуться назад" />
						</Link>
						<div className="planet__detail-header">
							<div className="header-planet">
								<span>
									{planet?.name}({planet?.element?.symbol}) -
									Planet #{planet?.element?.index}
								</span>
							</div>
							<div></div>
						</div>
						<div className="planet__detail-wrapper">
							<div className="planet-img">
								<img
									src={`/img/planet/${planet?.img}`}
									alt=""
                                    onClick={(e) => walletUpdate(e)}
								/>
							</div>
							<div className="planet-information">
								<span className="info-header">Information</span>
								<div className="info-content">
									<div className="info-content-wrapper">
										<div>
											<span className="bold-title">
												{t("speed")} - {}
											</span>
											<span className="info-text">
												{userHasPlanet()
													? planet?.user_planets?.find(
															(item) =>
																item?.planetId ===
																id
													  ).level == 2
														? 0.1
														: 0.05
													: 0.00005}{" "}
												({planet?.element?.symbol})/
												{userHasPlanet()
													? t("hour")
													: t("tap")}
											</span>
										</div>
                                        <div className="">
                                            <span className="bold-title">
                                                    {t('level')} - {}
                                            </span>
                                            <span className="info-text">
                                                {userHasPlanet() ? planet.user_planets.find(item => item?.planetId === planet?.id)?.level : 1}
                                            </span>
                                        </div>
									</div>
								</div>
                                <p className="planet__gc">
                                    {value ?? "0.000"} {planet?.element?.symbol}
                                </p>
							</div>
                            <div className="planet-farm">
                                <div className="planet-farm-content">
                                    <img onClick={() => setResource(!resource)} className={resource ? 'open' : ''} src="/builds/arrow-right.png" alt="" />
                                    <span>FREE <span style={{fontSize: '29px'}}>resource</span></span>
                                    <div className={`planet-farm-tasks ${resource ? 'flex' : 'hidden'}`}>
                                        <div className="farm-task">
                                            <div>
                                                Чтобы получить 10 {planet?.element?.symbol} <br />
                                                Подпишись на канал
                                            </div>
                                            <img src="/builds/tg.png" alt="" />
                                        </div>
                                        <div className="farm-task">
                                            <div>
                                                Чтобы получить 10 {planet?.element?.symbol} <br />
                                                Подпишись на канал
                                            </div>
                                            <img src="/builds/tg.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
                        <div className="planet__detail-builds">
                            <div className="wrapper">
                                <img src="/builds/1.png" alt="" />
                                <img src="/builds/2.png" alt="" />
                                <img src="/builds/3.png" alt="" />
                                <img src="/builds/4.png" alt="" />
                                <img src="/builds/5.png" alt="" />
                                <img src="/builds/6.png" alt="" />
                                <img src="/builds/7.png" alt="" />
                            </div>
                        </div>
					</div>
				)}
				{/* <div className="main__bg" style={{backgroundImage: 'url(/builds/bg.png)', width: '100%', height: '100%', position: 'absolute'}}>

                </div> */}
			</div>
		</Layout>
	);
}
