
import { Icon } from '@iconify/react';


import SalesChart from '../charts/SalesChart';
import WeeklyGoal from '../charts/WeeklyGoal';
import WeeklyArranges from '../charts/WeeklyArranges';
import TopNeighborhood from '../charts/TopNeighborhood';



import Posts from './components/Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from 'src/pages/pop-ups/PopUp';
import PostCreate from './components/Posts/components/PostCreate';
import { setPopUp } from 'src/features/admin-panel/PopUpStates';
import { POSTS_POP_COLORS, POSTS_POP_CREATE, POSTS_POP_GALLERY, POSTS_POP_PROPERTIES, POSTS_POP_UPDATE } from 'src/consts/popUp/POP_UP_CONTS';
import PostEdit from './components/Posts/components/PostEdit';
import PostGallery from './components/Posts/components/PostGallery/PostGallery';
import PostProperties from './components/Posts/components/PostProperties';
import PostColors from './components/Posts/components/PostColors';



function PostsContainer() {


  const dispatcher = useDispatch();

  const showCreatePostPopUp = () => {
    dispatcher(setPopUp(POSTS_POP_CREATE))
  }

  const popUp = useSelector(state => state.popUp.value)



  return (
    <main className="mid-side">
      <div className="postsContainer">
        <div className="container-header">
          <h1>Posts</h1>
          <div className="create">
            <button onClick={() => showCreatePostPopUp()}  ><Icon icon="material-symbols:add" /> New Post  </button>
          </div>
        </div>
        <div className="container-body">
          <Posts />
        </div>
      </div>
      <PopUp component={<PostCreate />} isShowing={popUp == POSTS_POP_CREATE} />
      <PopUp component={<PostEdit />} isShowing={popUp.type == POSTS_POP_UPDATE} />
      <PopUp component={<PostGallery />} isShowing={popUp.type == POSTS_POP_GALLERY} />
      <PopUp component={<PostProperties />} isShowing={popUp.type == POSTS_POP_PROPERTIES} />
      <PopUp component={<PostColors />} isShowing={popUp.type == POSTS_POP_COLORS} />

    </main>
  )
}

export default PostsContainer
