/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
const GetAllFavoriteByUser = () => {
  const [data, setData] = useState();
  const [workoutIndex, setWorkoutIndex ] = useState(null)

  const formData = new FormData();
  useEffect(() => {
    (async () => {
      formData.append("uid", 1);
      await fetch("https://sparksapps.in/gym/Api/get_all_fav_byuser", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      }).then((result) => {
        result.json().then((resp) => {
          setData(resp.workout);      
          const a = JSON.stringify(resp.workout)
          const b = JSON.parse(a)
          console.log(b,'decode')
        });
      });
    })();
  },[] );
  const clickedMe = ((index) => {
    setWorkoutIndex(index)
    // if(document.getElementById(workoutIndex) === workoutIndex ){
    //   setWorkoutIndex(index)
    // }
    console.log(workoutIndex,'workoutIndex')   
  });  
  return (
    <div className="container"style={{ textAlign: "center", marginBottom: "40rem" }} >
      <h2 className="" style={{ textAlign: "center", marginBottom: "1rem" }}>{" "}Get All Favorite by User</h2>
      <div className="row">{" "}
         {data?.map((element, i) => {
          return (
            <div className="col-md-4" key={i}>  
              <div className="card card-cascade wider" style={{ display: "flex", justifyContent: "start" }}>
                <div className="card-body card-body-cascade text-center pb-0">
                  <h5 id={element.fid} className="card-title">fid:{element.fid}</h5>
                  <h5 className="card-title">uid:{element.uid}</h5>
                  <h5 className="card-title">wdid:{element.wdid}</h5>
                  <h5 className="card-title">type:{element.type}</h5>   
                  <button onClick={() => clickedMe(i)} type="button">{element.fid}{element.info.info}</button>                     
                  <div>
                      {workoutIndex == i
                      &&                 
                        <div>                            
                          <div  className="view view-cascade overlay">
                            <img className="card-img-top"src={element.info.image}alt="Card image cap"/>
                          </div>                 
                          <h5 className="card-title">id:{element.info.id}</h5>
                          <h5 className="card-title">goalid:{element.info.goalid}</h5>
                          <h5 className="card-title">levelid:{element.info.levelid}</h5>
                          <h5 className="card-title">workname:{element.info.workname}</h5>
                          <h5 className="card-title">dow:{element.info.dow}</h5>
                        </div>
                     }                              
                  </div>
                  <div className="card-footer text-muted text-center mt-4">
                    2 days ago
                  </div>
                </div>
              </div>
            </div>
          );
        })}
           

      </div>
    </div>
  );
};

export default GetAllFavoriteByUser;