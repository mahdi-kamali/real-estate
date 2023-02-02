
const RecentlyAdded = () => {
    return (
        <div className="search-recently-added">
            <div className="recently-added-header">
                Recently Added
            </div>
            <div className="recently-added-body">
                <div className="item">
                    <div className="item-header">
                        <div className="item-image">
                            <img src={require('../../../images/search-items/3.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="item-body">
                        <div className="item-name">
                            2133 Allaire Ln
                        </div>
                        <div className="item-address">
                            Atlanta, GA 30345
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecentlyAdded
