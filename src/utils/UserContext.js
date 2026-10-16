import { createContext } from "react";


const UserContext = createContext({
    name: "default name",
    email: "default@example.com"
})

export default UserContext;