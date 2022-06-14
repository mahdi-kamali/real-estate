import { Icon } from '@iconify/react';



const SearchBigCard = () => {
    return (
        <div className="big-card">
            <div className="big-card-header">
                <img src={require('../images/by-category/4.jpg')} alt="" />
            </div>
            <div className="big-card-body">
                <div className="info">
                    <div className="price">
                        $<span>3,200,255</span>
                    </div>
                    <div className="name">
                        99 Chestnut Hill Ave
                    </div>
                    <div className="address">
                        Brighton, MA 02135
                    </div>
                </div>
                <div className="options">
                    <div className="option">
                        <Icon icon="fa:bed" />
                        <span>
                            4
                        </span>
                    </div>
                    <div className="option">
                        <Icon icon="fa-solid:bath" />
                        <span>
                            4
                        </span>
                    </div>
                    <div className="option">
                        <Icon icon="fa-solid:parking" />
                        <span>
                            4
                        </span>
                    </div>
                    <div className="option">
                        <Icon icon="bx:area" />
                        <span>
                            2,700
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBigCard
