import React from 'react';
import './Casa.css'
import ClientNavbar from '../../../bars/client-navbar/ClientNavbar';
import Footer from '../../../bars/foot/footer';

function Casa() {
  return (
    <>
      <ClientNavbar />

      <div className="banner">
        <div className="welcome-box">
          <h1>Welcome to the Queen City!</h1>
        </div>
      </div>
      <section>
        <div className="split">
          <img className="homeimg" src="https://d2j8c2rj2f9b78.cloudfront.net/uploads/get-to-know-charlotte-the-queen-city/content/iStock_63929361_LARGE-for-web.jpg" alt="Overview of Charlotte" />
          <div className="split-text">
            <h2>Queen City Calendar</h2>
            <p>Welcome to Queen City Calendar, your go-to source for information on public events in Charlotte! Our website was created with the intention of providing the people of Charlotte with a comprehensive and up-to-date list of events happening in our community. Whether you're looking for a family-friendly outing, a night out with friends, or a cultural experience, we've got you covered. Our team is dedicated to scouring the city for the latest events and activities, so you don't have to. From concerts and festivals to art exhibitions and sports games, we've got something for everyone. Stay connected to your community with Queen City Calendar!</p>
          </div>
        </div>
        <img className="homeimg" src="https://media.radissonhotelsamericas.com/image/destination-pagesus/localattraction/20828-139885-f63245703_3xl.jpg?impolicy=HomeHero" alt="A park in Charlotte" />
        <div className="split">
          <div className="split-text">
            <h2>Explore what Charlotte has to offer</h2>
            <p>Below are just a few examples of the great places and activities that Charlotte has to offer.</p>
          </div>
          
        </div>
        <div className="card-container">
          <div className="card-casa">
            <img src="https://www.corneliustoday.com/wp-content/uploads/2020/12/OMB-evening-e1608224054272-750x429.jpg" alt="A brewery" />
            <div className="card-text">
              <h3>Olde Mecklenburg Brewery</h3>
              <p>Olde Mecklenburg Brewery is a Charlotte-based brewery that has been crafting award-winning, German-style beers since 2009. Olde Mecklenburg Brewery has become a staple in the Charlotte community. With a wide range of year-round and seasonal offerings, there is a beer for every taste and occasion.</p>
            </div>
          </div>
          <div className="card-casa">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/lakenorman/Nascar-Hall-of-Fame_6c369251-5056-a36a-08c07ae3b8bf1793.jpg" alt="The Nascar Hall of Fame" />
            <div className="card-text">
              <h3>Nascar Hall of Fame</h3>
              <p>Located in the heart of Uptown Charlotte, the NASCAR Hall of Fame is a must-see destination for racing enthusiasts and sports fans alike. This interactive museum showcases the history and culture of NASCAR, celebrating the legendary drivers, crew members, and team owners who have shaped the sport.</p>
            </div>
          </div>
          <div className="card-casa">
            <img src="https://www.ourstate.com/wp-content/uploads/2020/09/USNWC-51_Photo-Credit-Courtesy-of-the-U.S.-National-Whitewater-Center-1140x600-1-scaled.jpg" alt="The Whitewater Center" />
            <div className="card-text">
              <h3>U.S National Whitewater Center</h3>
              <p>The U.S. National Whitewater Center, located in Charlotte, is the ultimate destination for outdoor enthusiasts and adventure seekers. With over 1,300 acres of land, the center offers a wide range of thrilling activities, including whitewater rafting, kayaking, zip-lining, rock climbing, and more. </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Casa;
