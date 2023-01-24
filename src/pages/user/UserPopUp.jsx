import { useSelector } from "react-redux"
import Loading from "../loadings/Loading";
import UserAuth from "./components/user-auth/UserAuth";
import UserPanel from "./components/user-panel/UserPanel";

const UserPopUp = () => {
  const user = useSelector(state => state.user.value)
  return (
    <div className="user-popup">
      {user === undefined ? <UserAuth /> : ""}
      {user !== undefined ? <UserPanel /> : ""}
    </div>
  )
}

export default UserPopUp
