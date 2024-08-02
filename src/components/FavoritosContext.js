import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para los favoritos
const FavoritosContext = createContext();

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id, data) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: { isFavorite: !prev[id]?.isFavorite, data },
        }));
    };

    return (
        <FavoritosContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritosContext.Provider>
    );
};
