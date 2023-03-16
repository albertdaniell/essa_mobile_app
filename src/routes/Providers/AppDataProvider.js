import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getValueChains } from '../../app-redux/features/appData/gapsSlice'

function AppDataProvider({children}) {
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getValueChains(1))
    dispatch(getValueChains(2))
    dispatch(getValueChains(3))


  },[])
  return (
    <div>
      {children}
    </div>
  )
}

export default AppDataProvider