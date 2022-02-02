import React, { Component } from "react";
import { getFavorite } from "../../utils/product";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardFavorite from "../../components/CardFavorite/CardFavorite";
import CardHomeTesti from "../../components/CardHomeTesti/CardHomeTesti";
import "./Home.scoped.css";

// assets
import iconUser from "../../assets/icons/user.png";
import iconMap from "../../assets/icons/map.png";
import iconLove from "../../assets/icons/love.png";
import teamWork from "../../assets/images/team-work-hom-banner.jpeg";
import checkIcon from "../../assets/icons/check.png";
import globe from "../../assets/images/globe.png";
import netflix from "../../assets/images/netflix.png";
import reddit from "../../assets/images/reddit.png";
import amazon from "../../assets/images/amazon.png";
import discord from "../../assets/images/discord.png";
import spotify from "../../assets/images/spotify.png";
import leftArrow from "../../assets/icons/arrow-left.svg";
import righttArrow from "../../assets/icons/arrow-right.svg";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getFavorite: []
    };
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  componentDidMount() {
    this.scrollToTop();
    getFavorite()
      .then((res) => {
        // console.log(res);
        this.setState({
          getFavorite: res.data.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log("STATE-DATA-FAVORITE", this.state.getFavorite);
    const favorite = this.state.getFavorite;
    return (
      <>
        <Header history={this.props.history} />

        <div className="container-fluid main">
          <div className="row row-1">
            <div className="col-lg-12 wrapper-jumbotron">
              <div className="col-lg-12 jumbotron ">
                <div className="row wrapper-title-jumbotron">
                  <div className="col-lg-6">
                    <h1 className="title-jumbotron">
                      Start Your Day with Coffee and Good Meals
                    </h1>
                  </div>
                </div>
                <div className="row wrapper-caption-jumbotron">
                  <div className="col-lg-6">
                    <p className="caption-jumbotron">
                      We provide high quality beans, good taste, and healthy
                      meals made by love just for you. Start your day with us
                      for a bigger smile!
                    </p>
                  </div>
                </div>
                <div className="wrapper-btn-jumbotron">
                  <button className="btn-jumbotron">Get Started</button>
                </div>
                {/* card */}
                <div className="row card">
                  <div className="col-lg-4 card-item2">
                    <div className="wrapper-content">
                      <div className="wrapper-icon-user">
                        <img src={iconUser} alt="icon-user" width={30} />
                      </div>
                      <div>
                        <p className="number-card">90+</p>
                        <p className="category">Staff</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 card-item">
                    <div className="wrapper-content">
                      <div className="wrapper-icon-map">
                        <img src={iconMap} alt="icon-map" width={30} />
                      </div>
                      <div>
                        <p className="number-card">30+</p>
                        <p className="category">Stores</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 card-item2">
                    <div className="wrapper-content">
                      <div className="wrapper-icon-love">
                        <img src={iconLove} alt="icon-love" width={30} />
                      </div>
                      <div>
                        <p className="number-card">30+</p>
                        <p className="category">Costumers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-2">
            <div className="col-lg-12  ">
              <div className="row">
                <div className="col-lg-6 wrapper-left ">
                  <img
                    src={teamWork}
                    alt="team-work"
                    className="img-teamwork"
                  />
                </div>
                <div className="col-lg-6 wrapper-right">
                  <ul className="wrapper-ul">
                    <li className="item-li">
                      <p className="title-col-2">
                        {" "}
                        We Provide Good Coffee and Healthy Meals
                      </p>
                    </li>
                    <li className="item-li">
                      <p className="sub-title">
                        You can explore the menu that we provide with fun and
                        have their own taste and make your day better.
                      </p>
                    </li>
                    <li className="item-li">
                      <img
                        src={checkIcon}
                        alt="check"
                        width={25}
                        // height={25}
                      />
                      <p className="item">High quality beans</p>
                    </li>
                    <li className="item-li">
                      <img src={checkIcon} alt="check" width={25} />
                      <p className="item">
                        Healthy meals, you can request the ingredients
                      </p>
                    </li>
                    <li className="item-li">
                      <img src={checkIcon} alt="check" width={25} />
                      <p className="item">
                        Chat with our staff to get better experience for
                        ordering
                      </p>
                    </li>
                    <li className="item-li">
                      <img src={checkIcon} alt="check" width={25} />
                      <p className="item">
                        Free member card with a minimum purchase of IDR 200.000.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-3">
            <div className="col-lg-12 mb-lg-5">
              <div className="card-title">
                <h1>Here is People's Favorite</h1>
                <p>
                  Let’s choose and have a bit taste of poeple’s favorite. It
                  might be yours too!
                </p>
              </div>
              <div className="card-body">
                {favorite.map((item, index) => {
                  return <CardFavorite favoriteData={item} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="row row-4">
            <div className="col-lg-12">
              <div className="card-title">
                <h1 className="title-col-2">
                  Visit Our Store in the Spot on the Map Below
                </h1>
                <p>
                  See our store in every city on the spot and spen your good day
                  there. See you soon!
                </p>
              </div>
              <div className="card-body">
                <img src={globe} alt="globe" />
              </div>
            </div>
          </div>
          <div className="row row-5">
            <div className="col-lg-12">
              <div className="card-title">
                <h1 className="title-row-5">Our Partner</h1>
              </div>
              <div className="card-body2">
                {/* <img src={globe} alt="globe" /> */}
                <div className="wrapper-img-partner">
                  <img
                    src={netflix}
                    alt="netflix"
                    className="img-partner img-fluid"
                  />
                </div>
                <div className="wrapper-img-partner">
                  <img
                    src={reddit}
                    alt="reddit"
                    className="img-partner img-fluid"
                  />
                </div>
                <div className="wrapper-img-partner">
                  <img
                    src={amazon}
                    alt="amazon"
                    className="img-partner img-fluid"
                  />
                </div>
                <div className="wrapper-img-partner">
                  <img
                    src={discord}
                    alt="discord"
                    className="img-partner img-fluid"
                  />
                </div>
                <div className="wrapper-img-partner">
                  <img
                    src={spotify}
                    alt="spotify"
                    className="img-partner img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row row-6">
            <div className="col-lg-12">
              <div className="wrapper-title">
                <div className="col-4">
                  <p className="title">Loved by Thousands of Happy Customer</p>
                  <p className="caption">
                    These are the stories of our customers who have visited us
                    with great pleasure.
                  </p>
                </div>
              </div>
              <div className="coment">
                <CardHomeTesti />
                <CardHomeTesti />
                <CardHomeTesti />
              </div>
              <div className="paginasi">
                <div className="dot">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                <div className="arrow">
                  <div className="left-arrow">
                    <img
                      src={leftArrow}
                      alt="left-arrow"
                      className="icon-arrow left"
                    />
                  </div>
                  <div className="right-arrow">
                    <img
                      src={righttArrow}
                      alt="right-arrow"
                      className="icon-arrow"
                    />
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>

          {/* card */}
          <div className="row card2">
            <div className="col-lg-6 left-card">
              <p className="title-card">Check our promo today!</p>
              <p className="caption-card">
                Let's see the deals and pick yours!
              </p>
            </div>
            <div className="col-lg-6 right-card">
              <button className="btn-promo">See Promo</button>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
