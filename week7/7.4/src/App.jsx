import { useState } from 'react'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsCountSelector } from './atoms'
import { useRecoilValue } from 'recoil'

function App() {
  const networkNoticationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const messagingCount = useRecoilValue(messagingAtom)

  const sumOfNotificationCount = useRecoilValue(totalNotificationsCountSelector)

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNoticationCount>99 ? "99+": networkNoticationCount})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button>Me ({sumOfNotificationCount})</button>
    </>
  )
}

export default App
