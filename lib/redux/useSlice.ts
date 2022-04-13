import { useDispatch, useSelector } from 'react-redux'

const useSlice: any = (sliceName: any) => {
    const slicePkg = useSelector((state: any) => state[sliceName])
    const dispatch = useDispatch()

    return {
        dispatch,
        ...slicePkg
    }
}

export default useSlice