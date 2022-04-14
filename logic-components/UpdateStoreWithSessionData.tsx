import * as React from 'react'
import { useSession } from 'next-auth/react'
import useSlice from '../lib/redux/useSlice'
import { setUserData, removeUserData } from '../lib/redux/userSlice'

const UpdateStoreWithSessionData = (props:any) => {

    const { data } = useSession()
    const { dispatch } = useSlice('user')

    React.useEffect(()=>{
        if(data){
            dispatch(setUserData(data))
        }
    },[dispatch, data])



    return null
}

export default UpdateStoreWithSessionData