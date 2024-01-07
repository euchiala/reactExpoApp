import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationsComponent } from '../../component/notifications/NotificationsComponent'
import { service } from '../../service'
import { ScrollView } from 'react-native'



const Promotions = () => {
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

  const typeTest = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_8082_1451" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_8082_1451)">
          <path d="M14.25 21.4C13.8667 21.7833 13.3917 21.975 12.825 21.975C12.2583 21.975 11.7833 21.7833 11.4 21.4L2.6 12.6C2.41667 12.4167 2.27083 12.2 2.1625 11.95C2.05417 11.7 2 11.4333 2 11.15V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H11.15C11.4333 2 11.7 2.05417 11.95 2.1625C12.2 2.27083 12.4167 2.41667 12.6 2.6L21.4 11.425C21.7833 11.8083 21.975 12.2792 21.975 12.8375C21.975 13.3958 21.7833 13.8667 21.4 14.25L14.25 21.4ZM12.825 20L19.975 12.85L11.15 4H4V11.15L12.825 20ZM6.5 8C6.91667 8 7.27083 7.85417 7.5625 7.5625C7.85417 7.27083 8 6.91667 8 6.5C8 6.08333 7.85417 5.72917 7.5625 5.4375C7.27083 5.14583 6.91667 5 6.5 5C6.08333 5 5.72917 5.14583 5.4375 5.4375C5.14583 5.72917 5 6.08333 5 6.5C5 6.91667 5.14583 7.27083 5.4375 7.5625C5.72917 7.85417 6.08333 8 6.5 8Z" fill="#08C754" />
        </g>
      </svg>,
      label: "promotion",
      color: "#EBFBF1"
    }]
  const promotionsNotifications = notifs?.filter(notification => notification.typeNotification === "promotion");
  return (
    <ScrollView>
      <View style={{ padding: "24px", flexDirection: 'column', gap: 24,backgroundColor: "white" }}>
        {
          promotionsNotifications?.map(notification => <NotificationsComponent
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

export default Promotions

const styles = StyleSheet.create({})