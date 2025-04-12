import React from 'react'
import { useState } from 'react'
import { movies } from './data'

export const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

 const filterByCateogary =(cat) =>{
   setMovieList(movies.filter((data) => data.category ==cat))
 }

  return (
    <>
      <div className='my-3 '>
        <div className='mx-auto text-center'>
        <button onClick={()=> setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
        <button onClick={()=> filterByCateogary("Action")}type="button" className="btn btn-outline-primary mx-3">Action</button>
        <button onClick={()=> filterByCateogary("Thriller")}type="button" className="btn btn-outline-light mx-3">Thriller</button>
        <button onClick={()=> filterByCateogary("Animation")}type="button" className="btn btn-outline-danger mx-3">Animation</button>
        <button onClick={()=> filterByCateogary("Horror")}type="button" className="btn btn-outline-warning mx-3">Horror</button>
        <button onClick={()=> filterByCateogary("Drama")}type="button" className="btn btn-outline-info mx-3">Drama</button>
        <button onClick={()=> filterByCateogary("Sci-Fi")}type="button" className="btn btn-outline-light mx-3">Sci-fi</button>

        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: '2rem',
          textAlign: 'center',
          width: '1300px',
          margin: 'auto',
          marginTop: '2'


        }}>
        {movieList.map((data) => <div key={data.id} style={{ maxWidth: '280px', textAlign: 'center' }}>
          <div style={{ padding: '10px' }} className="hover_effect">
            <img src={data.poster_path} alt="" style={{ width: "200px", height: '280px', borderRadius: '10px', border: '1px solid yellow' }}></img>
          </div>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>
        </div>)}

      </div>
    </>
  )
}
