import { Icon } from '@iconify/react';


const Footer = () => {
  return (
    <footer className="footer">


      <div className="column info">
        <div className="column-header">
          <div className="logo">
            <img src={require('./images/1.png')} alt="" />
          </div>
          <div className="co-name">
            <h1>home & co</h1>
            <small>© 2022 CoStar Group, Inc.</small>

          </div>
        </div>
        <div className="column-body">
          <div className="about-us">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sit cupiditate labore dignissimos id eius officiis! Numquam harum minima, fugiat aliquid reprehenderit aliquam magnam tempora quasi ipsam odit necessitatibus sit.</p>
          </div>
          <div className="social-media">
            <a className="media click" href='#'>
              <Icon icon="gg:facebook" color="black" />
            </a>
            <a className="media click" href='#'>
              <Icon icon="gg:facebook" color="black" />
            </a>
            <a className="media click" href='#'>
              <Icon icon="gg:facebook" color="black" />
            </a>
          </div>
        </div>
      </div>

      <div className="column menu">
        <div className="column-header">
          <h1>the marketplace</h1>
        </div>
        <div className="column-body">
          <div className="menu-list">
            <a href="#"><Icon icon="bx:link" color="black" />Apartamentos.com</a>
            <a href="#"><Icon icon="bx:link" color="black" />ApartmentFinder.com</a>
            <a href="#"><Icon icon="bx:link" color="black" />ApartmentHomeLiving.com</a>
            <a href="#"><Icon icon="bx:link" color="black" />WestsideRentals.com</a>
            <a href="#"><Icon icon="bx:link" color="black" />LoopNet.com</a>
            <a href="#"><Icon icon="bx:link" color="black" />Cityfeet.com</a>
          </div>
        </div>
      </div>

      <div className="column menu">
        <div className="column-header">
          <h1>neighborhood</h1>
        </div>
        <div className="column-body">
          <div className="menu-list">
            <a href="#">las Colinas</a>
            <a href="#"> Westwood</a>
            <a href="#">Hyde Park</a>
            <a href="#">Uptown Minneapolis</a>
            <a href="#">Lincoln Park</a>
            <a href="#">Downtown Houston</a>
          </div>
        </div>
      </div>

      <div className="column menu">
        <div className="column-header">
          <h1>FEATURED CITIES</h1>
        </div>
        <div className="column-body">
          <div className="menu-list">
            <a href="#"><Icon icon="fa6-solid:location-dot" color="black" />Riverside, CA</a>
            <a href="#"><Icon icon="fa6-solid:location-dot" color="black" />College Station, TX</a>
            <a href="#"><Icon icon="fa6-solid:location-dot" color="black" />Bellevue, WA</a>
            <a href="#"><Icon icon="fa6-solid:location-dot" color="black" />Madison, WI</a>
            <a href="#"><Icon icon="fa6-solid:location-dot" color="black" />Mountain View, CA</a>
            <a href="#"><Icon icon="fa6-solid:location-dot" color="black" />Oak Park, IL</a>

          </div>
        </div>
      </div>

      <div className="column menu">
        <div className="column-header">
          <h1>FEATURED CITIES</h1>
        </div>
        <div className="column-body">
          <div className="menu-list">
            <a href="#">las Colinas</a>
            <a href="#"> Westwood</a>
            <a href="#">Hyde Park</a>
            <a href="#">Uptown Minneapolis</a>
            <a href="#">Lincoln Park</a>
            <a href="#">Downtown Houston</a>
          </div>
        </div>
      </div>


      <div className="column menu">
        <div className="column-header">
          <h1>about us</h1>
        </div>
        <div className="column-body">
          <div className="menu-list">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">Legal Notices</a>
            <a href="#">Privacy Notice</a>
            <a href="#"> Accessibility</a>
            <a href="#">Avoid Scams</a>
            <a href="#">Rent Calculator</a>
            <a href="#">CA: Do Not Sell My Personal Info</a>
            

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
