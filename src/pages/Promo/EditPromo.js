import React, { Component } from 'react'
import './editPromo.scoped.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import moment from 'moment'
import pencilIcon from '../../assets/icons/pencilIcon.png'
import { connect } from 'react-redux'
import { Modal } from "react-bootstrap"

import { detailProduct } from '../../utils/product'
import { editPromo } from '../../utils/promo'

import imageDefault from "../../assets/images/no-image.jpg";

class EditPromo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataProduct: {},
            selectFile: null,
            selectDiscount: 0,
            image: imageDefault,
            name: '',
            normalPrice: '',
            description: '',
            starPromo: null,
            endPromo: null,
            sendImg: null,
            isShowModal: false,
        }
        this.inputFile = React.createRef()
        this.onFileChange = this.handleFileChange.bind(this)
        this.onBtnClick = this.inputImage.bind(this)
    }

    getBase64(e) {
        var file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({
                image: reader.result
            });
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }

    handleFileChange(e) {
        this.getBase64(e);
        this.setState({
            sendImg: e.target.files[0]
        });
    }

    inputImage = (e) => {
        this.inputFileRef.current.click();
    };

    componentDidMount() {
        detailProduct(this.props.match.params.id)
            .then((res) => {
                this.setState({ dataProduct: res.data.data })
                this.setState({ image: this.state.dataProduct.image })
                this.setState({ name: this.state.dataProduct.name })
                this.setState({ normalPrice: this.state.dataProduct.price })
                this.setState({ description: this.state.dataProduct.description })
                this.setState({ selectDiscount: this.state.dataProduct.discount })
                this.setState({ starPromo: this.state.dataProduct.start_promo })
                this.setState({ endPromo: this.state.dataProduct.end_promo })
            })
            .catch(err => console.log(err))
    }

    cancelHanlder = () => {
        this.setState({ image: this.state.dataProduct.image })
        this.setState({ name: this.state.dataProduct.name })
        this.setState({ normalPrice: this.state.dataProduct.price })
        this.setState({ description: this.state.dataProduct.description })
        this.setState({ selectDiscount: this.state.dataProduct.discount })
        this.setState({ starPromo: this.state.dataProduct.start_promo })
        this.setState({ endPromo: this.state.dataProduct.end_promo })
    }

    saveHandler = async () => {
        const token = this.props.token
        const showStartPromo = moment(this.state.starPromo).format('YYYY-MM-DD')
        const showEndPromo = moment(this.state.endPromo).format('YYYY-MM-DD')
        const body = new FormData()
        body.append("name", this.state.name)
        body.append('price', this.state.normalPrice)
        body.append('description', this.state.description)
        body.append('discount', this.state.selectDiscount)
        if (showStartPromo !== 'Invalid date') {
            body.append('start_promo', showStartPromo)
        }
        if (showEndPromo !== 'Invalid date') {
            body.append('end_promo', showEndPromo)
        }
        if (this.state.sendImg !== null) {
            body.append('image',
                this.state.sendImg,
                this.state.sendImg.name
            )
        }
        try {
            const result = await editPromo(this.props.match.params.id, body, token)
            if (result.data.status === 'success') {
                this.setState({ isShowModal: true })
            }
        }
        catch (err) {
            console.log({ ...err })
        }
    }

    handleClose = () => {
        detailProduct(this.props.match.params.id)
            .then((res) => {
                this.setState({ dataProduct: res.data.data })
                this.setState({ image: this.state.dataProduct.image })
                this.setState({ name: this.state.dataProduct.name })
                this.setState({ normalPrice: this.state.dataProduct.price })
                this.setState({ description: this.state.dataProduct.description })
                this.setState({ selectDiscount: this.state.dataProduct.discount })
                this.setState({ starPromo: this.state.dataProduct.start_promo })
                this.setState({ endPromo: this.state.dataProduct.end_promo })
                this.setState({ isShowModal: false })
            })
            .catch(err => console.log(err))
    }

    render() {
        let arr = []
        for (let i = 0; i <= 100; i += 5) {
            arr.push(i)
        }
        const showStartPromo = moment(this.state.starPromo).format('YYYY-MM-DD')
        const showEndPromo = moment(this.state.endPromo).format('YYYY-MM-DD')
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
                        <p className='cancelText' onClick={() => { this.cancelHanlder() }}>Cancel</p>
                    </section>

                    <section className='flex-between'>
                        <div>
                            <div className='promo-bg'>
                                <div className='line-dashed'>
                                    <div className='box-img'>
                                        <img src={this.state.image} alt='avater' className='promo-img' />
                                        <div className='pencil-bg'>
                                            <input style={{
                                                position: 'absolute',
                                                width: 40,
                                                left: 0,
                                                top: 5,
                                                zIndex: 5,
                                                cursor: 'pointer',
                                                opacity: 0
                                            }} type='file' id='image' ref={this.inputFileRef} multiple={false} onChange={this.onFileChange} />
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
                                    <input type='date' className='input-box' value={`${showStartPromo}`} onChange={e => this.setState({ starPromo: e.target.value })} />
                                    <input type='date' className='input-box' value={`${showEndPromo}`} style={{ marginTop: 20 }} onChange={e => this.setState({ endPromo: e.target.value })} />
                                </div>
                                <p className='label' style={{ marginTop: 47 }}>Input promo code :</p>
                                <input type='text' className='input-line' />
                            </div>
                        </div>

                        <div className='form-edit'>
                            <p className='label'>Name :</p>
                            <input type='text' className='input-line' value={`${this.state.name}`} onChange={e => this.setState({ name: e.target.value })} />
                            <p className='label' style={{ marginTop: 41 }}>Normal Price :</p>
                            <input type='number' className='input-line' value={`${this.state.normalPrice}`} onChange={e => this.setState({ normalPrice: e.target.value })} />
                            <p className='label' style={{ marginTop: 41 }}>Description :</p>
                            <input type='text' className='input-line' value={`${this.state.description}`} onChange={e => this.setState({ description: e.target.value })} />
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
                            <select name='discount' value={this.state.selectDiscount} className='input-box select' style={{ marginTop: 28 }} onChange={e => this.setState({ selectDiscount: e.target.value })}>
                                {arr.map((value) => (
                                    <React.Fragment key={value}>
                                        <option value={value}>{`${value}% -> ${value / 100 * this.state.normalPrice}`}</option>
                                    </React.Fragment>
                                ))}
                            </select>
                            <div style={{ marginTop: 57 }}>
                                <button className='btn-save'
                                    onClick={() => { this.saveHandler() }} >Save Change</button>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Modal */}
                <Modal show={this.state.isShowModal} centered>
                    <Modal.Header>
                        <Modal.Title>
                            <h2 style={{ textAlign: 'center' }}>Edit is successfully</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p style={{
                            fontFamily: 'Rubik',
                            fontWeight: 300,
                            width: '100%',
                            textAlign: 'center',
                            fontSize: 20
                        }}>Success Edit Promo</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: 50,
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <button className="btn btn-warning" onClick={() => { this.handleClose() }}>Close</button>
                        </div>
                    </Modal.Footer>
                </Modal>

                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.userData,
        token: state.auth.token
    }
}

// export default EditPromo
export default connect(mapStateToProps)(EditPromo)
