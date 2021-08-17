import React,{useState} from 'react'
import Data from './Data';

const space = {
    margin:"10px"
}

const App = () => {
    const [data,setData] = useState(Data);
    const filterdata = (cateId)=>{
        if(cateId=="all"){
            return setData(Data);
        }
        const filterItem = Data.filter((currentElement)=>{
            return currentElement.category==cateId;
        })
        setData(filterItem);
    }
    
    let d1 = [...new Set(Data.map((ele)=>{ return ele.category;})),"all"]
    return (
        <>
            <div className="container">
                    <h1 className="text-center text-capitalize mt-3">Order Your Item form the below list</h1>
                   <div className="row">
                       <div className="col my-2">
                       {
                           d1.map((elementD,i)=>{
                               return  <button className="col-2 btn btn-outline-warning space" style={space} onClick={()=>filterdata(elementD)}>{elementD}</button>
                           })
                       }
                         
                        </div>
                   </div>
                    <div className="row">
                        
                            {data.map((element,index)=>{
                                const {id,name,image,desc} = element;
                                return( 
                                    <div className="col-lg-4 col-xm-12 col-md-6 my-1">
                                        <div className="card" key={id}>
                                            <img src={image} alt="poha pic" className="card-img zoom" width="200" height="200"/>
                                            <div className="card-body">
                                                <h2 className="card-title text-capitalize ">{name}</h2>
                                                <p className="card-text text-capitalize ">{desc}</p>
                                                <button className="btn btn-outline-warning col-12">Order</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                           }
                     
                    </div>
            </div>
        </>
    )
}

export default App;
