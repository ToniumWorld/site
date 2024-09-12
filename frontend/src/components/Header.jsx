import { TonConnectButton } from "@tonconnect/ui-react";
import { Link } from "react-router-dom";

export default function Header() {
    const isActive = (page) => {
        return window.location.pathname === page ? 'active' : '';
    }

    return (
        <>
            <header className="app-header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">
                            <Link to="/planets">
                                <img src="/images/logo.svg" alt="" />
                            </Link>
                        </div>
                        <div className="header__wallet">
                            <Link to="/wallet">
                                <svg
                                    width="26"
                                    height="24"
                                    viewBox="0 0 26 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.95684 0.0025109C2.83421 -4.3994e-05 2.70709 -0.00269243 2.59073 0.0147493C1.83224 0.0893663 1.16088 0.451746 0.675253 1.05392C0.340448 1.46899 0.0983316 2.0013 0.0332167 2.53726C-0.00470572 2.84959 -0.00141711 3.16988 0.00183497 3.4866C0.00265367 3.56634 0.00347004 3.64584 0.00362603 3.72494L0.00769857 5.47238L0.019915 11.3879L0.0199535 18.171L0.0191001 20.2944C0.0191001 20.3973 0.0175725 20.5012 0.0160382 20.6055C0.0116852 20.9015 0.00727931 21.201 0.0375603 21.4908C0.113418 22.216 0.523382 22.9152 1.07851 23.3638C1.12934 23.4053 1.18154 23.445 1.23511 23.4828C1.28865 23.5207 1.34345 23.5565 1.39951 23.5903C1.45553 23.6242 1.51267 23.656 1.57092 23.6857C1.62915 23.7154 1.68833 23.743 1.74847 23.7684C1.8086 23.7939 1.86956 23.8172 1.93132 23.8382C1.99306 23.8593 2.05545 23.8781 2.11849 23.8946C2.18154 23.9112 2.24508 23.9254 2.3091 23.9374C2.37314 23.9494 2.43751 23.959 2.50219 23.9663C2.83915 24.0036 3.18753 23.9972 3.53124 23.991C3.64488 23.9889 3.758 23.9868 3.87003 23.9864L6.00215 23.987L13.9349 23.9935L20.5433 23.9917L22.5647 23.9932C22.6589 23.9932 22.7545 23.9949 22.8508 23.9966C23.1287 24.0014 23.4121 24.0064 23.6814 23.9715C24.3885 23.8801 25.0225 23.4698 25.4531 22.8962C25.9703 22.2073 25.983 21.5613 25.9876 20.7332L25.9934 19.5284L26 16.8771L23.7083 16.877C23.5772 16.8772 23.449 16.8785 23.3236 16.8797C22.0795 16.8917 21.1014 16.9012 20.0927 15.8645C20.0733 15.8447 20.0543 15.8248 20.0354 15.8045C20.0166 15.7843 19.998 15.7638 19.9797 15.7431C19.9613 15.7224 19.9433 15.7015 19.9254 15.6803C19.9076 15.6592 19.89 15.6378 19.8727 15.6162C19.8554 15.5946 19.8383 15.5728 19.8215 15.5508C19.8047 15.5288 19.7882 15.5065 19.7719 15.4841C19.7556 15.4617 19.7396 15.439 19.7239 15.4162C19.7082 15.3933 19.6927 15.3703 19.6775 15.3471C19.6624 15.3239 19.6475 15.3005 19.6329 15.2769C19.6182 15.2533 19.6039 15.2295 19.5898 15.2056C19.5758 15.1816 19.5621 15.1575 19.5486 15.1332C19.5351 15.1089 19.5219 15.0844 19.509 15.0598C19.4961 15.0352 19.4836 15.0104 19.4713 14.9854C19.459 14.9605 19.447 14.9354 19.4353 14.9102C19.4236 14.8849 19.4122 14.8595 19.4012 14.834C19.3901 14.8085 19.3793 14.7828 19.3688 14.757C19.3584 14.7312 19.3482 14.7053 19.3384 14.6792C19.3285 14.6531 19.319 14.627 19.3098 14.6007C19.3006 14.5744 19.2917 14.548 19.2831 14.5215C19.2745 14.495 19.2662 14.4684 19.2583 14.4416C19.2503 14.4149 19.2427 14.3881 19.2354 14.3612C19.2281 14.3343 19.2211 14.3073 19.2144 14.2802C19.2078 14.2531 19.2015 14.2259 19.1954 14.1987C19.1894 14.1714 19.1838 14.1441 19.1784 14.1167C19.1731 14.0893 19.168 14.0619 19.1633 14.0344C19.1586 14.0069 19.1542 13.9793 19.1502 13.9517C19.1462 13.9241 19.1425 13.8964 19.1391 13.8687C19.1357 13.841 19.1327 13.8132 19.13 13.7854C19.1273 13.7576 19.1249 13.7298 19.1229 13.702C19.1208 13.6741 19.1191 13.6462 19.1177 13.6184C19.1163 13.5904 19.1153 13.5625 19.1146 13.5346C19.1139 13.5067 19.1135 13.4788 19.1135 13.4508C19.1165 12.5476 19.456 11.6967 20.0894 11.0631C20.1414 11.0107 20.195 10.9601 20.2502 10.9112C20.3054 10.8623 20.362 10.8153 20.4202 10.7701C20.4783 10.7249 20.5378 10.6817 20.5986 10.6403C20.6594 10.5991 20.7215 10.5598 20.7848 10.5225C20.848 10.4853 20.9124 10.4501 20.9779 10.4171C21.0434 10.384 21.1098 10.3532 21.1772 10.3245C21.2446 10.2958 21.3128 10.2693 21.3819 10.2451C21.451 10.2208 21.5207 10.1988 21.5911 10.1792C22.1363 10.032 22.7358 10.0434 23.3135 10.0544C23.4612 10.0572 23.6075 10.06 23.751 10.0601C23.9313 10.0603 24.1118 10.0597 24.2922 10.0592C24.7094 10.0579 25.1269 10.0567 25.5438 10.0637C25.689 10.0664 25.8342 10.0708 25.9793 10.0768L25.9833 4.70162L25.9839 3.47401C25.9839 3.41441 25.9844 3.35454 25.9848 3.2945C25.9873 2.96181 25.9899 2.62394 25.9225 2.29913C25.8138 1.77539 25.5471 1.25592 25.1763 0.876493C24.7852 0.47617 24.3183 0.207596 23.7785 0.0814764C23.4177 -0.00284762 23.05 0.000223808 22.6824 0.00329426C22.6293 0.00373771 22.5763 0.00418115 22.5232 0.00436127L21.3627 0.00630385L17.2259 0L6.68766 0.00321182L3.90889 0.00670072L3.07535 0.00428202C3.03669 0.00417442 2.99701 0.00334768 2.95684 0.0025109ZM16.7418 1.86113L2.82326 1.85955C2.50036 1.88278 2.23815 1.99693 2.02256 2.24718C1.70139 2.61997 1.72563 3.09976 1.7491 3.56414C1.75111 3.60392 1.75311 3.64359 1.75489 3.68307C2.35005 3.52425 3.21463 3.54 3.94956 3.55339C4.13512 3.55677 4.31241 3.56 4.47502 3.56024L7.95718 3.56357L23.2835 3.55782C23.5942 3.57336 23.8864 3.63085 24.177 3.7465C24.178 3.67269 24.1806 3.5977 24.1831 3.52217C24.1991 3.04852 24.2159 2.55349 23.8625 2.19469C23.6696 1.99875 23.4295 1.88829 23.1599 1.86224C22.9705 1.84391 22.7746 1.84879 22.5812 1.85361C22.5107 1.85536 22.4405 1.85711 22.3711 1.85772L21.056 1.86403L16.7418 1.86113Z"
                                        fill="white"
                                    />
                                </svg>
                                <span className="wallet__ton">{window?.user?.ton ?? 0}</span> To
                            </Link>
                        </div>
                        <div className="header__wallet ml">
                            <Link to="/wallet">
                                <svg
                                    width="26"
                                    height="24"
                                    viewBox="0 0 26 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.95684 0.0025109C2.83421 -4.3994e-05 2.70709 -0.00269243 2.59073 0.0147493C1.83224 0.0893663 1.16088 0.451746 0.675253 1.05392C0.340448 1.46899 0.0983316 2.0013 0.0332167 2.53726C-0.00470572 2.84959 -0.00141711 3.16988 0.00183497 3.4866C0.00265367 3.56634 0.00347004 3.64584 0.00362603 3.72494L0.00769857 5.47238L0.019915 11.3879L0.0199535 18.171L0.0191001 20.2944C0.0191001 20.3973 0.0175725 20.5012 0.0160382 20.6055C0.0116852 20.9015 0.00727931 21.201 0.0375603 21.4908C0.113418 22.216 0.523382 22.9152 1.07851 23.3638C1.12934 23.4053 1.18154 23.445 1.23511 23.4828C1.28865 23.5207 1.34345 23.5565 1.39951 23.5903C1.45553 23.6242 1.51267 23.656 1.57092 23.6857C1.62915 23.7154 1.68833 23.743 1.74847 23.7684C1.8086 23.7939 1.86956 23.8172 1.93132 23.8382C1.99306 23.8593 2.05545 23.8781 2.11849 23.8946C2.18154 23.9112 2.24508 23.9254 2.3091 23.9374C2.37314 23.9494 2.43751 23.959 2.50219 23.9663C2.83915 24.0036 3.18753 23.9972 3.53124 23.991C3.64488 23.9889 3.758 23.9868 3.87003 23.9864L6.00215 23.987L13.9349 23.9935L20.5433 23.9917L22.5647 23.9932C22.6589 23.9932 22.7545 23.9949 22.8508 23.9966C23.1287 24.0014 23.4121 24.0064 23.6814 23.9715C24.3885 23.8801 25.0225 23.4698 25.4531 22.8962C25.9703 22.2073 25.983 21.5613 25.9876 20.7332L25.9934 19.5284L26 16.8771L23.7083 16.877C23.5772 16.8772 23.449 16.8785 23.3236 16.8797C22.0795 16.8917 21.1014 16.9012 20.0927 15.8645C20.0733 15.8447 20.0543 15.8248 20.0354 15.8045C20.0166 15.7843 19.998 15.7638 19.9797 15.7431C19.9613 15.7224 19.9433 15.7015 19.9254 15.6803C19.9076 15.6592 19.89 15.6378 19.8727 15.6162C19.8554 15.5946 19.8383 15.5728 19.8215 15.5508C19.8047 15.5288 19.7882 15.5065 19.7719 15.4841C19.7556 15.4617 19.7396 15.439 19.7239 15.4162C19.7082 15.3933 19.6927 15.3703 19.6775 15.3471C19.6624 15.3239 19.6475 15.3005 19.6329 15.2769C19.6182 15.2533 19.6039 15.2295 19.5898 15.2056C19.5758 15.1816 19.5621 15.1575 19.5486 15.1332C19.5351 15.1089 19.5219 15.0844 19.509 15.0598C19.4961 15.0352 19.4836 15.0104 19.4713 14.9854C19.459 14.9605 19.447 14.9354 19.4353 14.9102C19.4236 14.8849 19.4122 14.8595 19.4012 14.834C19.3901 14.8085 19.3793 14.7828 19.3688 14.757C19.3584 14.7312 19.3482 14.7053 19.3384 14.6792C19.3285 14.6531 19.319 14.627 19.3098 14.6007C19.3006 14.5744 19.2917 14.548 19.2831 14.5215C19.2745 14.495 19.2662 14.4684 19.2583 14.4416C19.2503 14.4149 19.2427 14.3881 19.2354 14.3612C19.2281 14.3343 19.2211 14.3073 19.2144 14.2802C19.2078 14.2531 19.2015 14.2259 19.1954 14.1987C19.1894 14.1714 19.1838 14.1441 19.1784 14.1167C19.1731 14.0893 19.168 14.0619 19.1633 14.0344C19.1586 14.0069 19.1542 13.9793 19.1502 13.9517C19.1462 13.9241 19.1425 13.8964 19.1391 13.8687C19.1357 13.841 19.1327 13.8132 19.13 13.7854C19.1273 13.7576 19.1249 13.7298 19.1229 13.702C19.1208 13.6741 19.1191 13.6462 19.1177 13.6184C19.1163 13.5904 19.1153 13.5625 19.1146 13.5346C19.1139 13.5067 19.1135 13.4788 19.1135 13.4508C19.1165 12.5476 19.456 11.6967 20.0894 11.0631C20.1414 11.0107 20.195 10.9601 20.2502 10.9112C20.3054 10.8623 20.362 10.8153 20.4202 10.7701C20.4783 10.7249 20.5378 10.6817 20.5986 10.6403C20.6594 10.5991 20.7215 10.5598 20.7848 10.5225C20.848 10.4853 20.9124 10.4501 20.9779 10.4171C21.0434 10.384 21.1098 10.3532 21.1772 10.3245C21.2446 10.2958 21.3128 10.2693 21.3819 10.2451C21.451 10.2208 21.5207 10.1988 21.5911 10.1792C22.1363 10.032 22.7358 10.0434 23.3135 10.0544C23.4612 10.0572 23.6075 10.06 23.751 10.0601C23.9313 10.0603 24.1118 10.0597 24.2922 10.0592C24.7094 10.0579 25.1269 10.0567 25.5438 10.0637C25.689 10.0664 25.8342 10.0708 25.9793 10.0768L25.9833 4.70162L25.9839 3.47401C25.9839 3.41441 25.9844 3.35454 25.9848 3.2945C25.9873 2.96181 25.9899 2.62394 25.9225 2.29913C25.8138 1.77539 25.5471 1.25592 25.1763 0.876493C24.7852 0.47617 24.3183 0.207596 23.7785 0.0814764C23.4177 -0.00284762 23.05 0.000223808 22.6824 0.00329426C22.6293 0.00373771 22.5763 0.00418115 22.5232 0.00436127L21.3627 0.00630385L17.2259 0L6.68766 0.00321182L3.90889 0.00670072L3.07535 0.00428202C3.03669 0.00417442 2.99701 0.00334768 2.95684 0.0025109ZM16.7418 1.86113L2.82326 1.85955C2.50036 1.88278 2.23815 1.99693 2.02256 2.24718C1.70139 2.61997 1.72563 3.09976 1.7491 3.56414C1.75111 3.60392 1.75311 3.64359 1.75489 3.68307C2.35005 3.52425 3.21463 3.54 3.94956 3.55339C4.13512 3.55677 4.31241 3.56 4.47502 3.56024L7.95718 3.56357L23.2835 3.55782C23.5942 3.57336 23.8864 3.63085 24.177 3.7465C24.178 3.67269 24.1806 3.5977 24.1831 3.52217C24.1991 3.04852 24.2159 2.55349 23.8625 2.19469C23.6696 1.99875 23.4295 1.88829 23.1599 1.86224C22.9705 1.84391 22.7746 1.84879 22.5812 1.85361C22.5107 1.85536 22.4405 1.85711 22.3711 1.85772L21.056 1.86403L16.7418 1.86113Z"
                                        fill="white"
                                    />
                                </svg>
                                <span className="tap__wallet-amout">{window?.user?.coins ?? 0}</span> GC
                            </Link>
                        </div>
                        <div className="header__language custom-select">
                            <select>
                                <option value="0">RU</option>
                                <option value="1">EN</option>
                            </select>
                        </div>
                        <div id="ton-connect">
                            <TonConnectButton />
                        </div>
                        {/* <div>
                            <Link to="/admin">Админ панель</Link>
                        </div> */}
                    </div>
                </div>
            </header>
            <nav className="navigation__wrapper">
                <div className="container">
                    <ul className="nav__inner">
                        <li className={"nav__item" + ' ' + isActive('/planets')}>
                            <Link to="/planets">Главная</Link>
                        </li>
                        <li className={"nav__item" + ' ' + isActive('/market')}>
                            <Link to="/market">Рынок</Link>
                        </li>
                        <li className={"nav__item" + ' ' + isActive('/wallet')}>
                            <Link to="/wallet">Кошелёк</Link>
                        </li>
                        <li className={"nav__item" + ' ' + isActive('/laboratory')}>
                            <Link to="/laboratory">Лаборатория</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
