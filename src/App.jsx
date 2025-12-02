import React, { useState } from 'react'

const App = () => {
  const [stuname , setstuname]=useState();
  const [stuage , setstuage]=useState();
  const[data,setdata]=useState([]);
  const handlebtn=()=>{
     setdata([...data,{stuname,stuage}])
     setstuname("");
     setstuage("");
  }


  return (
    <div className='justify-center text-center p-4 bg-violet-300 h-max-screen '>
     <h1 className='text-2xl font-bold text-white'>Student Registration Form</h1>
     <div className="border mt-20 w-[500px] border-white/10 shadow-2xl h-[300px] mx-auto bg-white/20 rounded-2xl" >
      <div className='flex gap-5 flex-col items-center m-12 '>
     <input 
     value={stuname}
     onChange={(e)=>setstuname(e.target.value)}
     className='border border-white/20 rounded-2xl p-2 shadow-2xl w-[300px]' 
     type="text" 
     placeholder='Enter Your Name:' />
     <input 
     value={stuage}
     onChange={(e)=>setstuage(e.target.value)}
     className='border border-white/20 rounded-2xl p-2 shadow-2xl w-[300px]' 
     type="text" 
     placeholder='Enter Your Age:' />

     <button
     onClick={handlebtn}
      className='text-black/60'>Submit</button>
</div>
     </div>

     <h1 className='text-2xl font-bold text-white mt-10'>Student data</h1>
          <table className='mx-auto text-white border-collapse m-5'>
        <thead>
          <tr>
            <td className='px-8 py-2 text-xl font-bold '>Name</td>
            <td className='px-8 py-2 text-xl font-bold'>Age</td>
          </tr>
        </thead>
              
        <tbody>
                {
                 data.map((item,i)=>(
                <tr>
                  <td className='text-black/40 text-xl p-1'>{item.stuname}</td>
                  <td className='text-black/40 text-xl p-1'>{item.stuage}</td>
                  </tr>
                 ))}
        </tbody>
      </table>




    </div>
  )
}

export default App