import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationsComponent } from '../../component/notifications/NotificationsComponent'
import { service } from '../../service'
import { ScrollView } from 'react-native'



const Info = () => {
  const dispatch = useDispatch()
  const notifs = useSelector((state) => state.notification.notifications)
  useEffect(() => {

    const apiProdvider = async () => {
      const { data } = await service.notifications.notificationsList({ skip: 0, take: 10 })
      dispatch({ type: "SET_NOTIFICATIONS", payload: data.paginatedResult })
      return data;
    }
    apiProdvider()
  }, [])

  const typeTest = [{
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask id="mask0_8082_3577" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_8082_3577)">
        <path d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V12C13 11.7167 12.9042 11.4792 12.7125 11.2875C12.5208 11.0958 12.2833 11 12 11C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#0856DB" />
      </g>
    </svg>,
    label: "info",
    color: "#EBF1FC"
  }]
  const infoNotifications = notifs?.filter(notification => notification.typeNotification === "info");

  return (
    <ScrollView>
      <View style={{ padding: "24px", flexDirection: 'column', gap: 24,backgroundColor: "white" }}>
        {
          infoNotifications?.map(notification => <NotificationsComponent
            style={{ gap: "24px" }}
            {...notification}
            icon={
              typeTest[0].icon
            }
            infoNotificationColor={
              typeTest[0].color
            }
          ></NotificationsComponent>)
        }
      </View>
    </ScrollView>

  )
}

export default Info

const styles = StyleSheet.create({})