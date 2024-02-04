import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({children}) => {
    const INITIAL_STATE = {
        chatId:"null",
        user:{}
    }
    return(
        <ChatContextProvider value={{currentUser}}>
            {children}
        </ChatContextProvider>
    )
}