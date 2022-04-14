import * as React from 'react'
import useSlice from '../lib/redux/useSlice'
import styles from '../styles/UserBadge.module.css'

export default function UserBadge() {
    const { ...data } = useSlice('user')
  return (
    <div className={styles.user_badge}>
        <img className={styles.user_image} src={data.user_image} /> 
        {data.user_name}
    </div>
  )
}
