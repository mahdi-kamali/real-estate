

import AdminPanelHeader from "./componenets/AdminPanelHeader"
import LeftSide from "./componenets/LeftSide"
import Dashboard from "./componenets/Dashboard/Dashboard"
import PostsContainer from "./componenets/PostsContainer/PostsContainer"
import RightSide from "./componenets/RightSide"
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../loadings/Loading"
import Categories from "./componenets/Categories/Categories"
import CustomeAlert from '../alerts/AlertsBox'
import AlertsBox from "../alerts/AlertsBox"
import { clearAlert } from "src/features/alert/AlertsState"
import Comments from "./componenets/Comments/Comments"



function checkSideBarPrams(prams) {
    switch (prams) {
        case 'Dashboard': { return <Dashboard />; break }
        case 'Posts': { return <PostsContainer />; break }
        case 'Categories': { return <Categories />; break }
        case 'Comments': { return <Comments />; break }
        default: { }
    }
}


function AdminPanel() {

    const sideBarState = useSelector((state) => state.adminPanel.value.midSide)
    const dispatcher = useDispatch()
    dispatcher(clearAlert())


    return (
        <div className="admin-panel">
            <div className="admin-panel-container">
                <AdminPanelHeader />
                <LeftSide />
                {
                    checkSideBarPrams(sideBarState)
                }
                {/* <Posts /> */}
                <RightSide />
                <AlertsBox />
            </div>
        </div>
    )

}

export default AdminPanel
