import React, { Component } from 'react'
import {  inject, observer } from 'mobx-react';

const a = require("assets/images/test1.png")

interface userProps{
    userStore?:any
}

@inject((all:{user:any}) => {
    return ({
        userStore: all.user // 连接到aStore
    })
}) // 将store注入

@observer   // 将类转化为观察者，只要被观察者跟新，组件将会刷新
export default class User extends Component<userProps,{}> {
    constructor(props: Readonly<userProps>){
        super(props)
    }
    handleInputChange = (event: { target: { value: any; }; })=>{
        const userStore = this.props.userStore
        userStore.setInfo(event.target.value)
    }
    render() {
        const userStore = this.props.userStore
        return (
            <div className='user'>
                <img src={a}/>
                <input placeholder='change it' onChange={this.handleInputChange} value={userStore.info.name}/>
                <h1>{userStore.info.name}</h1>
            </div>
        )
    }
}
