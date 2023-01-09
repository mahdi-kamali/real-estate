import { useSelector } from "react-redux"
import UserAuth from "./components/UserAuth";

const UserPopUp = () => {
  const user = useSelector(state => state.user.value)
  return (
    <div className="user-popup">
      
        { user.type=== "none" ? <UserAuth /> :  ""  }

    </div>
  )
}

export default UserPopUp
