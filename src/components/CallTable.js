// import { isEditable } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

export default function CallTable({data}){

    const [isEditable, setIsEditable]=useState(false)
    function onClickHandle(){
        setIsEditable(true)
    }
    const[isDeletable,setIsDeleted]=useState(false)
    function onClickHandleDelete(){
        setIsDeleted(true)
    }
    function textField(){
         return data.name;

    }

    return(
        <div>
            <tr >
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                    <th>  <button onClick={onClickHandle} > {isEditable ?  'Edited' : 'Edit'} </button>  </th>
                    <th> <button onClick={onClickHandleDelete}  > {isDeletable ? 'Deleted':'Delete'} </button></th>
                    { isEditable ? <input  value={isEditable? data.name:""} type="text"/>: <></>}
                        
                    </tr>
        </div>
    )
}