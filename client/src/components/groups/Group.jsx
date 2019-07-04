import React from 'react'
import './group.css'
import Post from "../profile/Post";

class Group extends React.Component {
    render() {
        return (
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
                      content="В СБИС пользователи обмениваются документами и ставят задачи, ведут бухгалтерию и сдают отчетность, проводят совещания и вебинары, ищут закупки и работают с клиентами."
                      datetime="24.06.2019 18:30">
                </Post>
                <Post name="Тензор"
                      content="СБИС формирует живую соцсеть из сухой корпоративной структуры. Чаты, группы, новости — по работе и не только, с коллегами и партнерами."
                      datetime="24.06.2019 18:31">
                </Post>
                <Post name="Тензор"
                      content="СБИС мотивирует. Лайки, бейджи, рейтинги, соревнования поднимут и продажи, и боевой дух команды."
                      datetime="24.06.2019 18:32">
                </Post>
                <Post name="Тензор"
                      content="С НАМИ РАБОТАЮТ
                      более 1 000 000 компаний
                      разных размеров и направлений бизнеса —
                      от ИП до транснациональных корпораций, от Сахалина до Калининграда, от церквей до казино, от детских садов до министерств. СБИС отлично решает задачи каждого."
                      datetime="24.06.2019 18:33">
                </Post>
            </div>
        )
    }
}

export default Group;