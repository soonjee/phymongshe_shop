import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Itm = ({ shopList, cart, setCart }) => {
    const { itm } = useParams();
    const navigate = useNavigate();
    const matchItm = shopList.find(it => itm == it.id);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     return () => {
    //         window.scrollTo(0, 0);
    //     }

    // }, []) 안해도 됨~
    return (
        <section className='shopItm'>
            <div className='inner'>
                <div className='box'>
                    <img src={matchItm.src} alt="" />
                </div>
                <div className="name">{matchItm.name}</div>
                <div className="des">{matchItm.des}</div>
                <div className="pri">{matchItm.pri.toLocaleString()}won</div>
                <ul>
                    <li>
                        {
                            matchItm.color.map((color, idx) => {
                                return (
                                    <li style={{ background: color.hex_value }} key={color.hex_value}></li>
                                )
                            })
                        }
                    </li>
                </ul>

                <button onClick={() => {
                    setCart([
                        ...cart,
                        { id: matchItm.id, itm: matchItm.name }
                    ])
                    navigate('/cart')
                }
                }>장바구니 담기</button>
            </div>
        </section>
    )
}

export default Itm