import { useState } from "react"
import Details from './Details'
function Profile (){


    const [data,setData] = useState({})
    const [username,setUsername] = useState("")
   // const [repositories,setRepositories] = useState([])


 const onChangeHandle = e =>{
      setUsername(e.target.value)
 }



    const handleSubmit = async e =>{
        
        e.preventDefault()

        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json()

        console.log(profileJson)
        setData(profileJson)
        
    }
   

    return(
        <div className="ui search">
            <div className = "ui icon input">
            <i className="search icon"></i>
            <form onSubmit = {handleSubmit}>
              <input
              className = "prompt"
              placeholder = "search username here..."
              type = "text"
              value = {username}
              onChange = {onChangeHandle}
              />
              </form>
              <Details data = {data} />
            </div>
        </div>
    )
}

export default Profile