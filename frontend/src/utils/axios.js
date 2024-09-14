import axios, { Axios } from 'axios';

const instance = new Axios({
    headers: {
        Authorization: window.adress
    },
    transformRequest: [...axios.defaults.transformRequest]
});

export const url = 'http://localhost:8000'

export const getUser = async () => {
    const user = await instance.get(`${url}/api/users?filter=${JSON.stringify({adress: window.adress})}`);
    if(user?.data?.length > 2) {
        return JSON.parse(user.data)[0]
    } else {
        console.log(undefined)
        return undefined
    }
}

export const createUser = async () => {
    const data = {adress: window.adress}
    let user = await instance.post(`${url}/api/users`, { ...data });
    const wallet = await instance.post(`${url}/api/wallet`, {userId: JSON.parse(user.data).id})
    user = {...JSON.parse(user.data), wallet: JSON.parse(wallet.data)}
    return user;
}

export const getPlanets = async (range, laboratory) => {
    let rang = range ?? [0,9]
    const filters = () => {
        if(laboratory) {
            return {
                active: 1,
                forLaboratory: 1
            }
        } else {
            return {
                active: 1
            }
        }
    }
    const planets = await instance.get(`${url}/api/planets?range=${JSON.stringify(rang)}&filter=${JSON.stringify(filters())}`);
    return JSON.parse(planets.data)
}

export const createWalletElement = async (elementId) => {
    const data = {
        userId: window.user.id
    }
    const created = await instance.post(`${url}/api/wallet`, {...data});
    return JSON.parse(created.data);
}


export const updateWalletElement = async (wallet, value) => {
    const updated = await instance.put(`${url}/api/wallet/${wallet.id}`, {...wallet, value: value});
    return updated.data;
}

export const getUserWallet = async () => {
    const userWallet = await instance.get(`${url}/api/wallet?filter=${JSON.stringify({userId: window.user.id})}`);
    return JSON.parse(userWallet.data);
}

export const auth = async ({login, password}) => {
    const auth = await instance.post(`${url}/api/user/auth`, {email: login, password});
    return auth.status === 200;
}

export const getNfts = async(adress) => {
    const apiUrl = `https://tonapi.io/v2/accounts/${adress}/nfts?collection=EQDfb4GXKIaToaFUDihPgB_lGePg-yeYjwrkZZAeKZ7m9xOQ&limit=1000&offset=0&indirect_ownership=false`;
    const data = await instance.get(apiUrl);
    return JSON.parse(data.data).nft_items;
}

export const updateUser = async(val) => {
    const user = await instance.put(`${url}/api/users/${window.user.id}`, {...val})
    return user;
}

export const addPlanetToUser = async(planetId) => {
    const isOk = await instance.post(`${url}/api/userPlanets`, {userId: window.user.id, planetId});
    return isOk
}

export const updateUserPlanet = async(id, level) => {
    const isOk = await instance.put(`${url}/api/userPlanets/${id}`, {level});
    return isOk
}