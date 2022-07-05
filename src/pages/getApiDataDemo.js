import React, { useState, useEffect } from 'react';

import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {

    //api 定义在根目录 mock -> testData.js
    const api = '/api/testapi';

    const [ data ] = useTokenRequest({api});

    return (
        <>
            { data && data.length > 0 && data.map((item, index)=>{
                <div style={{background:'white', display: 'flex', height: '50px', textAlign: 'center'}} key={index}>
                    {item.title}
                </div>
            })}
        </>
    )
}