import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Product.scoped.css"
import Header from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import CardProduct from "../../components/CardProduct/CardProduct"
import CardCoupon from "../../components/CardCoupon/CardCoupon"
import motherDays from "../../assets/icons/mother_event.png"
import sundayMorning from "../../assets/icons/sunday_event.png"
import helloween from "../../assets/icons/halloween_event.png"

export class Product extends Component {
  container = React.createRef()
  state = {
    open: false,
    event: {
      eventHelloween: "HAPPY HALLOWEEN!",
      eventSundayMorning: "Get a cup of coffee for free on sunday morning",
      eventMotherDays: "HAPPY MOTHER’S DAY!"
    },
    eventKet: {
      ketHelloween:
        "Do you like chicken wings? Get 1 free only if you buy pinky promise",
      ketSundayMorning: "Only at 7 to 9 AM",
      ketMotherDays: "Get one of our favorite menu for free!"
    },
    promo: {
      helloween: "helloween",
      sundayMorning: "sunday-morning",
      motherDay: "motherDays"
    },
    picPromo: {
      picHelloween: helloween,
      picSundayMorning: sundayMorning,
      picMotherDays: motherDays
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      })
    }
  }

  handleCLickMenu = () => {
    this.setState({ open: true })
  }
  render() {
    const { helloween, sundayMorning, motherDay } = this.state.promo
    const {
      picHelloween,
      picSundayMorning,
      picMotherDays
    } = this.state.picPromo
    const {
      eventHelloween,
      eventMotherDays,
      eventSundayMorning
    } = this.state.event
    const {
      ketHelloween,
      ketSundayMorning,
      ketMotherDays
    } = this.state.eventKet
    console.log("CLICK", this.state.open)
    return (
      <>
        <Header />

        <div className="row">
          <div className="col-lg-4 col-md-6 wrapper-left border">
            <div className="wrapper-title-promo">
              <p className="title-promo"> Promo Today</p>
              <p className="info-promo">
                Coupons will be updated every weeks. <br />
                Check them out!
              </p>
            </div>
            <div className="wrapper-cuppon">
              <CardCoupon
                event={motherDay}
                pic={picMotherDays}
                nameEvent={eventMotherDays}
                ketEvent={ketMotherDays}
              />
              <CardCoupon
                event={sundayMorning}
                pic={picSundayMorning}
                nameEvent={eventSundayMorning}
                ketEvent={ketSundayMorning}
              />
              <CardCoupon
                event={motherDay}
                pic={picMotherDays}
                nameEvent={eventMotherDays}
                ketEvent={ketMotherDays}
              />
              <CardCoupon
                event={helloween}
                pic={picHelloween}
                nameEvent={eventHelloween}
                ketEvent={ketHelloween}
              />
            </div>
            <button className="btn-cuppon">Apply Cuppon</button>
            <p className="title-terms">Terms and Condition</p>
            <ol className="terms">
              <li>You can only apply 1 coupon per day</li>
              <li>It only for dine in</li>
              <li>Buy 1 get 1 only for new user</li>
              <li>Should make member card to apply coupon</li>
            </ol>
            <div className="link-promo">
              <Link to="/" className="link">
                Edit Promo
              </Link>
              <Link to="/" className="link">
                Add Promo
              </Link>
            </div>
          </div>
          <div
            className="col-lg-8 col-md-4 border responsive-menu"
            ref={this.container}>
            <button onClick={this.handleCLickMenu}>Menu</button>
            {this.state.open && (
              <ul className="menu2">
                <li>Favorite & Promo</li>
                <li>Coffee</li>
                <li>Non Coffee</li>
                <li>Foods</li>
                <li>Add-on</li>
              </ul>
            )}
          </div>
          <div />
        </div>

        <Footer />
      </>
    )
  }
}

export default Product