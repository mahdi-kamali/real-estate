

import SwiperCardList from '../cards/SwiperCardList';
import SearchBigCard from '../search/card-big/SearchBigCard';







const ByCategory = () => {

    const cardOne = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../by-category/images/1.jpg'),
            small: [
                require('../by-category/images/2.jpg'),
                require('../by-category/images/3.jpg'),
                require('../by-category/images/4.jpg'),
                require('../by-category/images/5.jpg')
            ]
        },
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum quis quibusdam tempore ex minima accusamus, magni voluptatibus voluptate, non, atque laboriosam suscipit quaerat perferendis nesciunt itaque fugit vel.',
        options: [
            {
                title: 'Bed',
                body: '2',
                svg: 'fa:bed'
            },
            {
                title: 'Bath',
                body: '4',
                svg: 'fa-solid:bath'
            },
            {
                title: 'Bath',
                body: '1',
                svg: 'fa-solid:parking'
            },
            {
                title: 'Sqft',
                body: '2000',
                svg: 'bx:area'
            }
        ],
        detailLink: '',
        isLiked: true
    }

    const cardTwo = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../by-category/images/2.jpg'),
            small: [
                require('../by-category/images/2.jpg'),
                require('../by-category/images/3.jpg'),
                require('../by-category/images/4.jpg'),
                require('../by-category/images/5.jpg')
            ]
        },
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum quis quibusdam tempore ex minima accusamus, magni voluptatibus voluptate, non, atque laboriosam suscipit quaerat perferendis nesciunt itaque fugit vel.',
        options: [
            {
                title: 'Bed',
                body: '2',
                svg: 'fa:bed'
            },
            {
                title: 'Bath',
                body: '4',
                svg: 'fa-solid:bath'
            },
            {
                title: 'Bath',
                body: '1',
                svg: 'fa-solid:parking'
            },
            {
                title: 'Sqft',
                body: '2000',
                svg: 'bx:area'
            }
        ],
        detailLink: '',
        isLiked: true
    }

    const cardThree = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../by-category/images/3.jpg'),
            small: [
                require('../by-category/images/2.jpg'),
                require('../by-category/images/3.jpg'),
                require('../by-category/images/4.jpg'),
                require('../by-category/images/5.jpg')
            ]
        },
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum quis quibusdam tempore ex minima accusamus, magni voluptatibus voluptate, non, atque laboriosam suscipit quaerat perferendis nesciunt itaque fugit vel.',
        options: [
            {
                title: 'Bed',
                body: '2',
                svg: 'fa:bed'
            },
            {
                title: 'Bath',
                body: '4',
                svg: 'fa-solid:bath'
            },
            {
                title: 'Bath',
                body: '1',
                svg: 'fa-solid:parking'
            },
            {
                title: 'Sqft',
                body: '2000',
                svg: 'bx:area'
            }
        ],
        detailLink: '',
        isLiked: true
    }

    const cardFour = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../by-category/images/4.jpg'),
            small: [
                require('../by-category/images/2.jpg'),
                require('../by-category/images/3.jpg'),
                require('../by-category/images/4.jpg'),
                require('../by-category/images/5.jpg')
            ]
        },
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum quis quibusdam tempore ex minima accusamus, magni voluptatibus voluptate, non, atque laboriosam suscipit quaerat perferendis nesciunt itaque fugit vel.',
        options: [
            {
                title: 'Bed',
                body: '2',
                svg: 'fa:bed'
            },
            {
                title: 'Bath',
                body: '4',
                svg: 'fa-solid:bath'
            },
            {
                title: 'Bath',
                body: '1',
                svg: 'fa-solid:parking'
            },
            {
                title: 'Sqft',
                body: '2000',
                svg: 'bx:area'
            }
        ],
        detailLink: '',
        isLiked: true
    }

    const cardFive = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../by-category/images/5.jpg'),
            small: [
                require('../by-category/images/2.jpg'),
                require('../by-category/images/3.jpg'),
                require('../by-category/images/4.jpg'),
                require('../by-category/images/5.jpg')
            ]
        },
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum quis quibusdam tempore ex minima accusamus, magni voluptatibus voluptate, non, atque laboriosam suscipit quaerat perferendis nesciunt itaque fugit vel.',
        options: [
            {
                title: 'Bed',
                body: '2',
                svg: 'fa:bed'
            },
            {
                title: 'Bath',
                body: '4',
                svg: 'fa-solid:bath'
            },
            {
                title: 'Bath',
                body: '1',
                svg: 'fa-solid:parking'
            },
            {
                title: 'Sqft',
                body: '2000',
                svg: 'bx:area'
            }
        ],
        detailLink: '',
        isLiked: true
    }

    const byCategorySlider = [
        cardOne, cardTwo, cardThree, cardFour, cardFive
    ]






    return (
        <section className="by-category">
            <div className="by-category-header">
                <h1>
                    <span> By Category  </span>
                </h1>
            </div>
            <div className="by-category-body  page-grid-style-responsive">
                <div className="left-side">
                    <div className="left-side-header">
                        By Category
                    </div>
                    <div className="left-side-body">
                        <div className="cat selected">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/1.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/2.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/3.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/4.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/5.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/1.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/2.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/3.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/4.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cat-header">
                                <div className="cat-image">
                                    <img src={require('./images/5.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="cat-body">
                                <div className="cat-name">
                                    <h1>Category Name</h1>
                                </div>
                                <div className="cat-count">
                                    <small>4 item</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-side">
                    <SearchBigCard />
                </div>
                <div className="bottom-side">
                    <SwiperCardList cards={byCategorySlider} />
                </div>
            </div>
        </section>
    )
}

export default ByCategory
