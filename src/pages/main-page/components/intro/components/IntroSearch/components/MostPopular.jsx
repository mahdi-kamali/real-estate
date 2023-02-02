
const MostPopular = () => {
    return (
        <div className="search-most-popular">
            <div className="most-popular-header">
                Most Popular This Week
            </div>
            <div className="most-popular-body">
                <div className="item">
                    <div className="item-header">
                        <div className="item-image">
                            <img src={require('../../../images/search-items/1.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="item-body">
                        <div className="item-name">
                            99 Chestnut Hill Ave
                        </div>
                        <div className="item-address">
                            Brighton, MA 02135
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-header">
                        <div className="item-image">
                            <img src={require('../../../images/search-items/2.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="item-body">
                        <div className="item-name">
                            3738 Briarcliff Rd
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

export default MostPopular
