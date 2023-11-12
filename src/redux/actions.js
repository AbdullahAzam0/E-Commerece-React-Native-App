export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  
  export const addToFavorites = (product) => ({
    type: 'ADD_TO_FAVORITES',
    payload: product,
  });
  
  export const removeFromFavorites = (productId) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: productId,
  });
  