

function Details ({data}) {


    return (
        <div className = "App">
            <div className = "card">
               <div className = "img">
                   {!data.avatar_url ? (
                       ""
                   ):(
                       <img src ={data.avatar_url} alt ="" />
                       
                   )}
               </div>
               <div className = "name">
                   <h2>{data.name}</h2>
               </div>
               <div className = "bio">
                  <p>{data.bio}</p> 
               </div>
               <div className = "followers" >
                   {!data.followers?(
                      ""
                   ):(
                       <span>{data.followers}<p>followers</p>{data.following}</span>
                   )}
               </div>
            </div>
        </div>
    )
}

export default Details