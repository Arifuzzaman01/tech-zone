"use client"

import { useSession } from "next-auth/react";


const UserInfo = () => {
    const user = useSession()
    console.log("User",user);
    return (
        <div>
            
        </div>
    );
};

export default UserInfo;