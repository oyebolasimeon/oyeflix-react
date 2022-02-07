import React from 'react';
import './home.scss'
import { Link } from 'react-router-dom';


const Home = () => {
  return <section className="banner">

    <div className="box-1">

      <div className="opac">

        <div className="text-box">

          <h3>Top 500 Movies from TMBD</h3>

          <p>Watch anywhere. Watch anytime</p>

          <Link to="/users"> <button className="get-started">Get Started</button> </Link>
          
          

        </div>

      </div>

    </div>

  </section>
};

export default Home;
