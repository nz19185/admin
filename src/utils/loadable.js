import React from 'react'
import LoadAble from 'react-loadable'
import style from './index.module.less'

// 过度组件
function LogingComponent (){
  return(
    <div className={style.box}>
    <div className={style.test}>您好，正在加载中...</div>
    </div>
  )
}

export default (LoadComponent)=>{
  return LoadAble({
    loader:LoadComponent,
    loading:LogingComponent
  })
}