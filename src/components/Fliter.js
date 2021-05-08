import { useState } from "react";

function Fliter({Value}) {

    const {chosseClassifications, chossePrice, chosseSearch} = Value;
    const [PriceRange, setPriceRange] = useState(0);
    
    const handelChangeClassifications = e =>{
        chosseClassifications(e.target.value)
    }

    const handelChangePrice = e =>{
        chossePrice(e.target.value)
        setPriceRange(e.target.value)
    }
    
    const handelChangeSearch = e =>{
        chosseSearch(e.target.value)
        setPriceRange(e.target.value)
    }
    

    return(
        <div>

            <input 
              type="text"  
              className="form-control col-10 my-4 mx-auto" 
              placeholder="search by product company or name " 
              onChange={handelChangeSearch}
            />

            <div className="row">
                <select className="form-control col-10 col-md-3 ml-auto"  onChange={handelChangeClassifications}>
                    <option value="All" >Classifications</option>
                    <option value="phone">phone</option>
                    <option value="Laptop" >laptop</option>
                    <option value="watch" >watch</option>

                </select>

                <div className="d-flex col-10 col-md-6 mr-auto">
                    <span className="d-flex mx-2"> Min : 5$</span>
                    <input type="range"  step="5" min="5"  max={1000} className="form-control w-50"  onChange={handelChangePrice} />
                    <span className="d-flex mx-2"> Max : {PriceRange}$</span>
                </div>
        
            </div>

        </div>
        
    )
}

export default Fliter;