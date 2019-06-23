import React from 'react'
import './group.css'
import Post from "../profile/Post";

class Group extends React.Component{
    render(){
        return(
            <div className="group">
                <div className="group__header">
                    <div className="group__info">
                        <h2 className="group__title">Тензор</h2>
                        <h3 className="group__desc">Российская IT-компания</h3>
                    </div>
                    <div className="group__image"></div>
                </div>
                <hr/>
                <Post name="Тензор"
                      content="СБИС наращивает функционал — растет и штат Департамента разработки. Над программой
                      работает 11 IT-центров и более 1000 специалистов. Мы ищем умных и талантливых и обучаем
                      перспективных." datetime="22.06.2019 22:38">
                </Post>
            </div>
        )
    }
}

export default Group;