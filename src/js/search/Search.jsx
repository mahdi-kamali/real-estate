
// Import Rows
import RecentProperties from './search-rows/RecentProperties';
import UniqueItem from './search-rows/UniqueItem';
import UniqueList from './search-rows/UniqueList';
import CategorySearch from './category-search/CategorySearch';

const Search = () => {


    const cardOne = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/1.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
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
        ]
    }
    const cardTwo = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/2.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
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
        ]
    }
    const cardThree = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/3.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
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
        ]
    }
    const cardFour = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/4.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
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
        ]
    }
    const cardFive = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/5.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
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
        ]
    }
    const cardSix = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/6.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
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
        ]
    }

    const recentEstateCards = [
        cardOne, cardTwo, cardThree, cardFour, cardFive , cardSix
    ]

    const uniqueItemCard = {
        name: '99 Chestnut Hill Ave',
        address: 'Brighton, MA 02135',
        price: '2900000',
        images: {
            big: require('../search/images/recent-proprties/1.jpg'),
            small: [
                require('../search/images/recent-proprties/2.jpg'),
                require('../search/images/recent-proprties/3.jpg'),
                require('../search/images/recent-proprties/4.jpg'),
                require('../search/images/recent-proprties/5.jpg')
            ]
        },
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum quis quibusdam tempore ex minima accusamus, magni voluptatibus voluptate, non, atque laboriosam suscipit quaerat perferendis nesciunt itaque fugit vel.'
    }

    const uniqueList = [
        cardOne, cardTwo, cardThree, cardFour, cardFive , cardSix
    ]



    return (
        <section className="search">
            <div className="search-header">
                <h1>
                    <span>
                        Search & </span>
                    Explore </h1>
            </div>
            <div className="search-body page-grid-style-responsive">
                <div className="row">
                    <CategorySearch />
                </div>
                <div className="row">
                    <RecentProperties cards={recentEstateCards} />
                </div>
                <div className="row">
                    <UniqueItem card={uniqueItemCard} />
                </div>
                <div className="row">
                    <UniqueList cards={uniqueList} />
                </div>
            </div>
        </section>
    )
}

export default Search
