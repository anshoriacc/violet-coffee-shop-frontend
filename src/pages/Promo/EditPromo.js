import React, { Component } from 'react'
import './editPromo.scoped.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import noImg from '../../assets/images/no-image.jpg'
import pencilIcon from '../../assets/icons/pencilIcon.png'

class EditPromo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let arr = []
        for (let i = 5; i <= 100; i += 5) {
            arr.push(i)
        }
        console.log(arr)
        return (
            <>
                <Navbar />
                <main className='container' style={{ marginTop: 38, marginBottom: 44 }}>
                    <section className='flex-between'>
                        <div className='favProText'>
                            <p>{'Favorite & Promo '}
                                <span className='edtPromoText'>{'> Edit Promo'}</span>
                            </p>
                        </div>
                        <p className='cancelText'>Cancel</p>
                    </section>

                    <section className='flex-between'>
                        <div>
                            <div className='promo-bg'>
                                <div className='line-dashed'>
                                    <div className='box-img'>
                                        <img src={noImg} alt='avater' className='promo-img' />
                                        <div className='pencil-bg'>
                                            <img src={pencilIcon} alt='icon' className='pencil-icon' />
                                        </div>
                                    </div>
                                    <h3 className='promo-name-txt'>Beef Spaghetti 20% OFF</h3>
                                    <h4 className='desc-text'>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</h4>
                                </div>
                                <div className='box-coupon'>
                                    <h4 className='coupon-txt'>COUPON CODE</h4>
                                    <h3 className='code-txt'>FNPR15RG</h3>
                                    <p className='valid-txt'>Valid untill October 10th 2020</p>
                                </div>
                            </div>

                            <div style={{ position: 'relative', top: '30px' }}>
                                <p className='label'>Expire date :</p>
                                <div className='date'>
                                    <input type='date' className='input-box' />
                                    <input type='date' className='input-box' style={{ marginTop: 20 }} />
                                </div>
                                <p className='label' style={{ marginTop: 47 }}>Input promo code :</p>
                                <input type='text' className='input-line' />
                            </div>
                        </div>

                        <div className='form-edit'>
                            <p className='label'>Name :</p>
                            <input type='text' className='input-line' />
                            <p className='label' style={{ marginTop: 41 }}>Normal Price :</p>
                            <input type='number' className='input-line' />
                            <p className='label' style={{ marginTop: 41 }}>Description :</p>
                            <input type='text' className='input-line' />
                            <p className='label' style={{ marginTop: 41 }}>Input product size :</p>
                            <p className='click-text'>Click methods you want Click product size you want to use for this promo</p>
                            <div className="size-btn">
                                <input type="checkbox" class="btn-check" name="options" id="regular" value="R" autocomplete="off" />
                                <label class="btn btn-secondary rxl" for="regular">
                                    R
                                </label>
                                <input type="checkbox" class="btn-check" name="options" id="large" value="L" autocomplete="off" />
                                <label class="btn btn-secondary rxl" for="large">
                                    L
                                </label>
                                <input type="checkbox" class="btn-check" name="options" value="XL" id="extra large" autocomplete="off" />
                                <label class="btn btn-secondary rxl" for="extra large">
                                    XL
                                </label>

                                <input type="checkbox" class="btn-check" name="options" value="250 gr" id="250 gr" autocomplete="off" />
                                <label class="btn btn-secondary gr" for="250 gr">
                                    250 gr
                                </label>
                                <input type="checkbox" class="btn-check" name="options" value="300 gr" id="300 gr" autocomplete="off" />
                                <label class="btn btn-secondary gr" for="300 gr">
                                    300 gr
                                </label>
                                <input type="checkbox" class="btn-check" name="options" value="500 gr" id="500 gr" autocomplete="off" />
                                <label class="btn btn-secondary gr" for="500 gr">
                                    500 gr
                                </label>
                            </div>
                            <p className='label' style={{ marginTop: 54 }}>Input delivery methods :</p>
                            <p className='click-text'>Click methods you want to use for this promo</p>
                            <div className='size-btn'>
                                <input type="checkbox" class="btn-check" name="options" id="Home Delivery" value="Home Delivery" autocomplete="off" />
                                <label class="btn btn-rectangle method" for="Home Delivery">
                                    Home Delivery
                                </label>
                                <input type="checkbox" class="btn-check" name="options" id="Dine in" value="Dine in" autocomplete="off" />
                                <label class="btn btn-rectangle method" for="Dine in">
                                    Dine in
                                </label>
                                <input type="checkbox" class="btn-check" name="options" value="Take Away" id="Take Away" autocomplete="off" />
                                <label class="btn btn-rectangle method" for="Take Away">
                                    Take Away
                                </label>
                            </div>
                            <p className='label' style={{ marginTop: 73 }}>Enter the discount :</p>
                            <select name='discount' className='input-box select' style={{ marginTop: 28 }}>
                                {arr.map((value) => (
                                    <React.Fragment key={value}>
                                        <option value={value}>{`${value}% -> ?`}</option>
                                    </React.Fragment>
                                ))}
                            </select>
                            <div style={{ marginTop: 57 }}>
                                <button className='btn-save'>Save Change</button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}

export default EditPromo
