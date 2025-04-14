import React from 'react'
import {Link} from 'react-router-dom'


const Product = () => {

    const arr =[
        {id:'MERN001' , course_name :"MERN Stack" , price:10000 , duration:'5 months'},
        {id:'JAVA002' , course_name :"JAVA_FULL_Stack" , price:15000 , duration:'5 months'},
        {id:'PY0102' , course_name :"PYTHON_FULL_Stack" , price:20000 , duration:'5 months'},
        {id:'REACT99' , course_name :"React.js" , price:30000 , duration:'5 months'},


    ]
  return (
    <div>
        <ul>
            {arr.map((data)=><div key={data.id}>
                <li><Link to={`/product/${data.id}`}>{data.course_name}</Link></li>
            </div>)}
        </ul>
    </div>
  )
}

export default Product