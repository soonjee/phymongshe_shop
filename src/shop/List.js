import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ shopList }) => {
    // console.log(props)
    // const { shopList } = props;
    return (
        <section className='shopList'>
            <div className='inner'>
                {
                    shopList.map(it => {
                        return (
                            <figure>
                                <Link to={'/shopItm/' + it.id}>
                                    <div className="box">
                                        <img src={it.src} alt="" />
                                    </div>
                                    <div className="name">{it.name}</div>
                                    <div className="des">{it.des}</div>
                                    <div className="pri">{it.pri.toLocaleString()}won</div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default List