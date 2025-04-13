import React from 'react'


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
                <li>{data.course_name}</li>
            </div>)}
        </ul>
    </div>
  )
}

export default Product