type Product = {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    title?: string;
    description?: string;
    typeId?: string;
    type?: object;
    colorId?: string;
    color?: object;
    price?: number;
    ratingsId?: string;
    ratings?: object;
    promotion?: number;
    image?: string;
    ordersId?: string;
    orders?: object;
  }

const initialState = {
products : []
}

const productReducer = (state = initialState, action) => {

    switch(action.type){
        case "SET_PRODUCTS":
            console.log({
                ...state, 
                products : action.payload
                
            })
            return {
                ...state, 
                products : action.payload
                
            }
    }

return state


}

export default productReducer;