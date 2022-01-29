import React, { Component } from "react"
import Header from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import CardProduct from "../../components/CardProduct/CardProduct"
import CardCoupon from "../../components/CardCoupon/CardCoupon"
import motherDays from "../../assets/icons/mother_event.png"
import sundayMorning from "../../assets/icons/sunday_event.png"
import helloween from "../../assets/icons/halloween_event.png"

export class Product extends Component {
  state = {
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
    return (
      <>
        <Header />

        <div className="row">
          <div className="col-lg-4 border">
            <div className="wrapper-title-promo">
              <p className="title-promo"> Promo Today</p>
              <p className="info-promo">
                Coupons will be updated every weeks. Check them out!
              </p>
            </div>
            <div>
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
          </div>
          <div className="col-lg-8">product</div>
        </div>

        <Footer />
      </>
    )
  }
}

export default Product
