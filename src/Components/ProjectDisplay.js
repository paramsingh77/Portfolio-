import React, { useEffect, useState } from 'react'
import './ProjectDisplay.css'
const ProjectDisplay = () => {
    const [datass, setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{

        const getData = async() => {
            try{
                const d = await fetch("https://raw.githubusercontent.com/paramsingh77/Project-Space/main/prsp/src/Components/data.json");
                console.log(d);
                const res  =  await d.json();
                console.log( "outdata is: ",res);
                setData(res)
                setLoading(false);
            }
            catch(error){
                setError(true);
                setLoading(false);
            }
           
        }   
        getData();
    })
    function gitLink(val){
            if(val === null || val === undefined) {return false;}
            var ans = Array.from(val);
            console.log("ans" , ans[8]);
            if(ans[8] == 'g'){
                return true;
            }
            else{
                return false;
            }
       
    }
    // console.log(data);
    
  return (
    <div className='alginment'>
        <div className='title'> <h1 >Projects</h1></div>
        <div className='card-list'>
        {
            loading ? <p>Loading...</p> : error ? <p>error</p> :
            datass.length == 0 ? <div> <h2>Projects are being built</h2> </div> : 
           
            datass.data.map((val,index)=>(
                <div className='card' key={index}>
                    <div className='proj-name'>{val.name}</div>
                    <div className='proj-de'>This is project {val.name}</div>
                    <div className='live-link'> <a className='lis' href={val.link}>{
            
                        gitLink(val.link) ?  <p>GitHub Link</p> : <p>Live Link</p>
                    }</a></div>

                </div>
               
            ))
          
        }
        
        </div>
       
    </div>
  )
}

export default ProjectDisplay
