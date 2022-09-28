import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import List from './shop/List';
import Itm from './shop/Itm';
import Cart from './shop/Cart';
import './css/ShopDatail.scss';
import { Route, Routes } from 'react-router-dom';
// https://desipossa.github.io/shop_cra/assets/data.json


const App = () => {
  const [itm, setItm] = useState();
  const [cart, setCart] = useState([
    { id: 1, itm: "ssasddsa", price: 5000 }
  ]);

  useEffect(() => {
    const url = 'https://desipossa.github.io/shop_cra/assets/data.json'

    const getProduct = async () => {
      const res = await axios.get(url); //링크를 땡겨오고자 할 때

      const shopdata = res.data.slice(50, 140).map(it => { // 제품 갯수 정하는 데이터변수, (~번 부터, ~번 까지)
        return {
          id: it.id,
          name: it.name,
          src: it.image_link,
          brand: it.brand,
          ctgy: it.category,
          pri: it.price * 1450,
          des: it.description,
          color: it.product_colors,
          ca: it.created_at,
          type: it.product_type,
        }
      })
      setItm(shopdata);
      console.log(res.data);//res는 뒤에 data객체를 붙여 쓴다.
      console.log(shopdata);

    }
    getProduct();
  }, [])
  return (
    <>
      <Header cart={cart} />
      {
        itm ?
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart cart={cart} />} />
            <Route path='/shopList' element={<List shopList={itm} />} />
            <Route path='/shopItm/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />} />
          </Routes>
          : <div>로딩 중입니다.</div>
      }
      <Footer />
    </>
  )
}

export default App