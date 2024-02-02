import React, { useState } from 'react';
import CallTable from './CallTable';

const Table=()=>{

    const data=[
        { id: 1, name:'John',age:20},
        {id:2,name:'Jane',age:25},
        {id:3,name:'Bob',age: 30},
        {id:4,name:'Bob',age: 30},
        {id:5,name:'Bob',age: 30},
        {id:6,name:'Bob',age: 30},
        {id:7,name:'Bob',age: 30},

    ];
   
//  let e="Edit";
//     function edit(){
//         e="Edited";

//         console.log("print", e)
//     }

return(
    <div>
        {/* <h2 className='headerName'> Simple table creation</h2>
        <table>
            <thead >
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Age </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1</td>
                    <td>Jhon</td>
                    <td> 25</td>
                </tr>
            </tbody>
        </table> */}

        <h2 className='headerName'> Simple table creation</h2>


        <table>
            <thead >
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Age </th>
        
                </tr>
            </thead>
            <tbody>
                {data.map((item, index)=>(
                    <tr key ={index}>
                        <CallTable data={item}/>
                    </tr>
                ))}
            </tbody>
        </table>
        
    

    
    
    
    
    </div>
);
}

export default Table;
