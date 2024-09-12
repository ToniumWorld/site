import {
    useTonAddress,
    useTonWallet,
    useIsConnectionRestored,
} from "@tonconnect/ui-react";
import Footer from "./Footer";
import Header from "./Header";
import { createContext, useEffect, useState } from "react";
import BorderAnimation from "../assets/js/animatedBorder";
import marketAdaptiv from "../assets/js/marketAdaptiv";
import customSelect from "../assets/js/customSelect";
import popups from "../assets/js/popups";
import scroll from "../assets/js/scroll";
import input from "../assets/js/input";
import newCustomSelect from "../assets/js/newCustomSelect";
import { createUser, getNfts, getUser } from "../utils/axios";
import { fetchDefaultUser } from "../assets/js/getUser";
import axios from "axios";

export const DataContext = createContext();
export default function Layout({ children }) {
    const adress = useTonAddress();
    const wallet = useTonWallet();
    const connectionRestored = useIsConnectionRestored();
    const [isLoading, setIsLoading] = useState(false);
    const [isFetched, setIsFetched] = useState(false);

    window.adress = adress;
    const fetchUser = async () => {
        setIsLoading(true);
        await fetchDefaultUser();
        window.user.nft = await getNfts(wallet.account.address);
    };

    useEffect(() => {
        
        if (connectionRestored && adress && !isFetched) {
            setIsFetched(true);
            fetchUser().then(() => setIsLoading(false));
            console.log(wallet)
            // const apiUrl = `https://tonapi.io/v2/accounts/${wallet.account.address}/nfts?collection=EQDfb4GXKIaToaFUDihPgB_lGePg-yeYjwrkZZAeKZ7m9xOQ&limit=1000&offset=0&indirect_ownership=false`;
            // const resp = axios.get(apiUrl);
        }
    }, [connectionRestored]);

    useEffect(() => {
        if(!isLoading) {

            marketAdaptiv();
            customSelect();
            popups();
            scroll();
            input();
            newCustomSelect();
        }
    }, [isLoading]);
    
    return (
        !isLoading && (
            <>
                <Header />
                <main className="main">
                    <div className="container">{children}</div>
                </main>
                <Footer />
            </>
        )
    );
}
