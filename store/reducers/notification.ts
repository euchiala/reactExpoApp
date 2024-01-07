export type NotificationType = {
  id: string,
  createdAt?: string,
  updatedAt?: string,
  deletedAt?: string,
  typeNotification?: string,
  userId?: string,
  user?: object,
  value?: string
}
const notifications : NotificationType[] = [{
  id:"55555",
  type : "Order",
  subTitle : "Dictumst aliquam placerat praesent nibh. Id aenean mauris pulvinar adipiscing mi." ,
  title: "test"
},
{
  id:"55555",
  type : "Promotion",
  subTitle : "Dictumst aliquam placerat praesent nibh. Id aenean mauris pulvinar adipiscing mi." ,
  title: "test"
}]
const initialState = {
    notifications:[]
}


const notificationReducer = (state=initialState, action)=> {
  switch(action.type){
    case "SET_NOTIFICATIONS":
        return {
            ...state, 
            notifications : action.payload
            
        }
        case "UPDATE":
          return {
              notifications : [{
                  type : "Order",
                  subTitle : "Dictumst aliquam placerat praesent nibh. Id aenean mauris pulvinar adipiscing mi." ,
                  title: "test 2"
                },
                {
                  type : "Promotion",
                  subTitle : "Dictumst aliquam placerat praesent nibh. Id aenean mauris pulvinar adipiscing mi." ,
                  title: "test 2"
                }]
          }
        default:
          return state  
}


}

export default notificationReducer