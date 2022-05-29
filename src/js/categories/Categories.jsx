
const Categories = () => {
    return (
        <section className="categories">
            <div className="categories-header">
                <h1>
                    <span>Categories</span>
                </h1>
            </div>
            <div className="categories-body">
                <div className="cat">
                    <div className="cat-header">
                        <h1>Apartment</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/5.jpg")} alt="" />
                    </div>
                </div>
                <div className="cat">
                    <div className="cat-header">
                        <h1>Duplex</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/2.jpg")} alt="" />
                    </div>
                </div>
                <div className="cat">
                    <div className="cat-header">
                        <h1>Family Home</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/3.jpg")} alt="" />
                    </div>
                </div>
                <div className="cat">
                    <div className="cat-header">
                        <h1>Town Home</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/6.jpg")} alt="" />
                    </div>
                </div>
                <div className="cat">
                    <div className="cat-header">
                        <h1>sky scraper</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/5.jpg")} alt="" />
                    </div>
                </div>
                <div className="cat">
                    <div className="cat-header">
                        <h1>Familiy Home</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/7.jpg")} alt="" />
                    </div>
                </div>
                <div className="cat">
                    <div className="cat-header">
                        <h1>Town Home</h1>
                    </div>
                    <div className="cat-body">
                        <img src={require("../images/category/residential/5.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
