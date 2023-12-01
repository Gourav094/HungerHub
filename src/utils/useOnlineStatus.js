import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",() => {
            setOnlineStatus(false);
        })
        window.addEventListener("online",() => {
            setOnlineStatus(true);
        })
    },[])
    //boolean that show online or not
    return OnlineStatus;
}
export default useOnlineStatus;