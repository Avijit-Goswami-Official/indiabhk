import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Now Buy, Sell, and Rent property on the go with India’s 
            leading property search portal, IndiaBHK.com. 
            IndiaBHK has come up with an ultimate solution 
            to all the needs of the property seekers and sellers in 
            the form of a web app that combines all the complex 
            parameters of the property search in an intuitive interface.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experiencs</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src='bg.png' />
      </div>
    </div>
  )
}

export default HomePage