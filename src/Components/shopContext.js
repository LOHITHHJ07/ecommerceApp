import React, { Children, createContext, useContext, useState } from 'react';

const ShopContext = createContext();


 export function ShopContextProvider({children}) {

    const [searchText,setSearchText]=useState("");
  return (
    <ShopContext.Provider value={{searchText,setSearchText  }}>
    {children}
  </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);


