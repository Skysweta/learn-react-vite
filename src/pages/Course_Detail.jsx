import React from 'react'
import { useParams ,Link} from 'react-router-dom'

const Course_Detail = () => {

    
    const arr =[
        {id:'MERN001' , course_name :"MERN Stack" , price:10000 , duration:'5 months'},
        {id:'JAVA002' , course_name :"JAVA_FULL_Stack" , price:15000 , duration:'5 months'},
        {id:'PY0102' , course_name :"PYTHON_FULL_Stack" , price:20000 , duration:'5 months'},
        {id:'REACT99' , course_name :"React.js" , price:30000 , duration:'5 months'},

    ]

    const{id} = useParams()
    const course_details = arr.filter((data) => data.id == id)
    console.log(course_details)

  return (
    <>
    <div>
        <h1>
            Course Id ={id}
        </h1>
        <h2>Course Name ={course_details[0].course_name}</h2>
        <h2>Course Dur ={course_details[0].duration}</h2>
        <h2>Course Price ={course_details[0].price}</h2>

    </div>
    <button><Link to ='/product'>All Course</Link></button>
    </>
  )
}

export default Course_Detail