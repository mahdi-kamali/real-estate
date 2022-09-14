import { Icon } from '@iconify/react';
import { setMidSide } from 'src/features/admin-panel/AdminStates';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'src/features/admin-panel/LoadingStates';
import { useState } from 'react';




function LeftSide() {

  const [selected, setSelected] = useState(0);

  const dispatcher = useDispatch();



  function changeMidSide(value, index) {
    dispatcher(setMidSide({ midSide: value }))
    dispatcher(setLoading({ show: true }))
    window.setTimeout(() => { dispatcher(setLoading({ show: false })) }, 1000)
    setSelected(index)
  }

  return (
    <aside className="left-side">

      <div className="search-bar">
        <Icon icon="clarity:search-line" color="black" />
        <input type="text" placeholder='Search' />
      </div>

      <ul className="side-list">
        <li className={selected == 0 ? 'selected' : ""} onClick={() => { changeMidSide("Dashboard", 0) }}> <Icon icon="ci:dashboard" color="black" /><small>Dashboard</small> </li>
        <li className={selected == 1 ? 'selected' : ""} onClick={() => { changeMidSide("Posts", 1) }}> <Icon icon="bi:card-list" color="black" /><small>Posts</small> </li>
        <li className={selected == 2 ? 'selected' : ""}> <Icon icon="ant-design:setting-outlined" color="black" /> <small>Setting</small> </li>
      </ul>

    </aside>
  )
}

export default LeftSide
