

import AdminPanelHeader from "./componenets/AdminPanelHeader"
import LeftSide from "./componenets/LeftSide"
import Dashboard from "./componenets/Dashboard/Dashboard"
import Posts from "./componenets/Posts/Posts"
import RightSide from "./componenets/RightSide"
import { useSelector } from 'react-redux'
import Loading from "../loadings/Loading"
import Categories from "./componenets/Categories/Categories"
import CustomeAlert from '../alerts/AlertsBox'
import AlertsBox from "../alerts/AlertsBox"



function checkSideBarPrams(prams) {
    switch (prams) {
        case 'Dashboard': { return <Dashboard />; break }
        case 'Posts': { return <Posts />; break }
        case 'Categories': { return <Categories />; break }
        default: { }
    }
}


function AdminPanel() {

    const sideBarState = useSelector((state) => state.adminPanel.value.midSide)
    

    

    return (
        <div className="admin-panel">
            <div className="container">
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
