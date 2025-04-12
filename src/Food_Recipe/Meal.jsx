import React, { useEffect, useState } from 'react';
 //comment

 
const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState('Indian');
  const[inputData , setInputData] = useState('');

  useEffect(() => {
    if (!area) return;  // 👈 prevent empty fetch

    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const data = await response.json();

        console.log(data.meals);
        setMealData(data.meals);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
        setMealData([]);
      }
    };

    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) =>{
    e.preventDefault();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}
`);
    const data = await response.json();

    console.log(data.meals);
    setMealData(data.meals);
  }

  return (
    <>
      <div className='mx-auto text-center'>
        <button onClick={() => setArea("Indian")} className="btn btn-outline-primary mx-3">Indian</button>
        <button onClick={() => setArea("Canadian")} className="btn btn-outline-primary mx-3">Canadian</button>
        <button onClick={() => setArea("American")} className="btn btn-outline-light mx-3">American</button>
        <button onClick={() => setArea("Thai")} className="btn btn-outline-danger mx-3">Thai</button>
        <button onClick={() => setArea("British")} className="btn btn-outline-warning mx-3">British</button>
        <button onClick={() => setArea("Russian")} className="btn btn-outline-info mx-3">Russian</button>
      </div>
      <form  onSubmit={submitHandler} className='mx-auto text-center my-3'>
        <input onChange={(e) =>setInputData(e.target.value)} type="text"></input>
      </form>

      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: 'wrap' }}>
        {mealData?.map((data) => (
          <div key={data.idMeal} style={{ textAlign: 'center', margin: '20px' }}>
            <img src={data.strMealThumb} alt="" style={{ width: '220px', borderRadius: '10px', border: '2px solid blue' }} />
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
