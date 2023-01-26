import { useRouter } from "next/router";
import { createContext,useCallback,useContext } from "react";
import en from "../translations/en.json"
import es from "../translations/es.json";



const I18NContext = createContext();
const languages = { es, en }

export function I18NProvider({ children }) {
  const { locale } = useRouter();
  const t = useCallback((key,...args)=>{
    
    let translations = languages[locale][key]
    if(args.length === 0) return translations
    args.forEach((value,index)=> {
      translations= translations.replace(`\${${index + 1}}`,value)
    })
    return translations
  },[locale])

  return <I18NContext.Provider value={{t}}>{children}</I18NContext.Provider>;
}

export function useI18N(){

  const context = useContext(I18NContext)
  if(context === undefined){
    throw new Error ("useI18N must be used within in a I18NProvider")
  }
  return context
}