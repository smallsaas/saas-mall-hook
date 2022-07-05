import React, { useState, useEffect } from 'react';

import { query, get, set, update } from '@/hooks/useApiMallOrder';

export default function (props) {

    const [ list, setList ] = useState([]);
    const [ detail, setDetail ] = useState({});

    //获取列表
    useEffect(_=>{
        getOrderList()
    })

    //获取详情
    function getOrderList() {
        const list =  query()
        setList(list)
     }

    //获取详情
    function getOrderDetail() {
       const id = 1
       const detailData =  get(id)
       setDetail(detailData)
    }

    //获取新增订单
    function add() {
        const postBody = {
            name:'',
            product: {}
        }
        const postResp =  set(postBody)
        console.log('新增订单 = ', postResp)
    }

    //获取新增订单
    function edit() {
        const id = 1
         const putBody = {
             name:'',
             product: {}
         }
         const putResp =  update(id, putBody)
        console.log('修改订单 = ', putResp)
    }

    
    return (
        <>
            { list && list.length > 0 && list.map((item, index)=>{
                <div style={{background:'white', display: 'flex', height: '50px', textAlign: 'center'}} key={index}>
                    {item.orderNumber}
                </div>
            })}
        </>
    )
}