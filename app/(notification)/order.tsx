import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationsComponent } from '../../component/notifications/NotificationsComponent'
import { service } from '../../service'
import { ScrollView } from 'react-native'

const Order = () => {
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
        <mask id="mask0_8082_3251" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_8082_3251)">
          <path d="M6 22C5.16667 22 4.45833 21.7083 3.875 21.125C3.29167 20.5417 3 19.8333 3 19V17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H6V2.725C6 2.575 6.06667 2.48333 6.2 2.45C6.33333 2.41666 6.46667 2.46666 6.6 2.6L7.5 3.5L8.65 2.35C8.75 2.25 8.86667 2.2 9 2.2C9.13333 2.2 9.25 2.25 9.35 2.35L10.5 3.5L11.65 2.35C11.75 2.25 11.8667 2.2 12 2.2C12.1333 2.2 12.25 2.25 12.35 2.35L13.5 3.5L14.65 2.35C14.75 2.25 14.8667 2.2 15 2.2C15.1333 2.2 15.25 2.25 15.35 2.35L16.5 3.5L17.65 2.35C17.75 2.25 17.8667 2.2 18 2.2C18.1333 2.2 18.25 2.25 18.35 2.35L19.5 3.5L20.4 2.6C20.5333 2.46666 20.6667 2.4125 20.8 2.4375C20.9333 2.4625 21 2.55833 21 2.725V19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22H6ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19V5H8V16H16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17V19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20ZM9.975 9C9.69167 9 9.45833 8.90416 9.275 8.7125C9.09167 8.52083 9 8.28333 9 8C9 7.71666 9.09583 7.47916 9.2875 7.2875C9.47917 7.09583 9.71667 7 10 7H14C14.2833 7 14.5208 7.09583 14.7125 7.2875C14.9042 7.47916 15 7.71666 15 8C15 8.28333 14.9042 8.52083 14.7125 8.7125C14.5208 8.90416 14.2833 9 14 9H9.975ZM9.975 12C9.69167 12 9.45833 11.9042 9.275 11.7125C9.09167 11.5208 9 11.2833 9 11C9 10.7167 9.09583 10.4792 9.2875 10.2875C9.47917 10.0958 9.71667 10 10 10H14C14.2833 10 14.5208 10.0958 14.7125 10.2875C14.9042 10.4792 15 10.7167 15 11C15 11.2833 14.9042 11.5208 14.7125 11.7125C14.5208 11.9042 14.2833 12 14 12H9.975ZM17 9C16.7167 9 16.4792 8.90416 16.2875 8.7125C16.0958 8.52083 16 8.28333 16 8C16 7.71666 16.0958 7.47916 16.2875 7.2875C16.4792 7.09583 16.7167 7 17 7C17.2833 7 17.5208 7.09583 17.7125 7.2875C17.9042 7.47916 18 7.71666 18 8C18 8.28333 17.9042 8.52083 17.7125 8.7125C17.5208 8.90416 17.2833 9 17 9ZM17 12C16.7167 12 16.4792 11.9042 16.2875 11.7125C16.0958 11.5208 16 11.2833 16 11C16 10.7167 16.0958 10.4792 16.2875 10.2875C16.4792 10.0958 16.7167 10 17 10C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12ZM6 20H15V18H5V19C5 19.2833 5.09583 19.5208 5.2875 19.7125C5.47917 19.9042 5.71667 20 6 20Z" fill="#FAB30F" />
        </g>
      </svg>,
      label: "O",
      color: "#FEF6E2"
    }]
  const orderNotifications = notifs?.filter(notification => notification.typeNotification === "order");

  return (
    <ScrollView>
      <View style={{ padding: "24px", flexDirection: 'column', gap: 24,backgroundColor: "white" }}>
        {
          orderNotifications?.map(notification => <NotificationsComponent
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

export default Order

const styles = StyleSheet.create({})