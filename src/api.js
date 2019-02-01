export const getListAddress=()=>{
    return fetch('https://loft-taxi.glitch.me/addressList').then(response => response.json());
};

export const getRoute=(address1,address2)=>{
    return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`).then(response=>response.json());
}