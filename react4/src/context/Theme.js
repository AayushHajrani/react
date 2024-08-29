import { useContext,createContext } from "react";

export const Themecontext = createContext({
    thememode : "light",
    darkmode : () => {},
    lightmode : () => {},
})

export const Themeprovider = Themecontext.Provider

export default function usetheme(){
    return useContext(Themecontext)
}
