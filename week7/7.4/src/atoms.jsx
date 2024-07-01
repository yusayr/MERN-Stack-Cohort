import { atom, selector } from "recoil";
import axios from 'axios'

export const networkAtom = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data.network;
        } 
    })
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: selector({
        key: "jobsAtomSelector",
        get: async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data.jobs;
            
        } 
    })
})



export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data.notifications;
            
        } 
    })
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: selector({
        key: "messagingAtomSelector",
        get: async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data.messaging;
            
        } 
    })
});


export const totalNotificationsCountSelector = selector({
    key: "totalNotificationsCountSelector",
    get: ({ get }) => {
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notifications = get(notificationsAtom);
        const messaging = get(messagingAtom);

        return network + jobs + notifications + messaging;
    }
});