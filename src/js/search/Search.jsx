
import { Icon } from '@iconify/react';

const Search = () => {
    return (
        <section className="search">
            <div className="search-header">
                <h1>
                    <span>
                        Search & </span>
                    Explore </h1>
            </div>
            <div className="search-body page-grid-style-responsive">
                <div className="left">
                    <div className="left-header">
                        <h1>Search Something</h1>
                    </div>
                    <div className="left-body">
                        <div className="search-bar">
                            <Icon icon="ep:search" />
                            <input type="text" />
                        </div>
                        <div className="top-searches">
                            <div className="top-searches-header">
                                <h1>Top Searches</h1>
                            </div>
                            <div className="top-searches-body">
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/1.jpg')} alt="" />
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
                                            <img src={require('../images/search/2.jpg')} alt="" />
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
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/3.jpg')} alt="" />
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
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/4.jpg')} alt="" />
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
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/5.jpg')} alt="" />
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
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/6.jpg')} alt="" />
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
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/7.jpg')} alt="" />
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
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-image">
                                            <img src={require('../images/search/1.jpg')} alt="" />
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
                    </div>
                </div>
                <div className="right">
                    right
                </div>
            </div>
        </section>
    )
}

export default Search
