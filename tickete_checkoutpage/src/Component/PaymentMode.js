import React from 'react'
import Visa from '../Assets/visa.png';
import Mastercard from '../Assets/mastercard.png';
import Americanexp from '../Assets/americanexp.png';
import Card from '../Assets/card.png';
import Apay from '../Assets/apay.png';
import Gpay from '../Assets/gpay.png';
import Caution from '../Assets/free-cancellation.png';

const PaymentMode = () => {
  return (
    <div id='paymentmode'>
        <h2>Select your mode of payment</h2>
        <p className='paymenttagline'>Payments with Tickete are secure and encrypted.</p>
        <div id='paymentoptions'>
            <div className='card'>
                <div className='carddivtop'>
                    <div className='credit_debit'>
                        <img src={Card} alt="Credit and Debit Card" />
                        <span>Credit and debit card</span>
                    </div>
                    <div className='roundBtn'>
                        <div className='whiteRound'></div>
                    </div>
                </div>
                <div className='carddivmiddle'>
                    <img src={Visa} alt="Visa Card" />
                    <img src={Mastercard} alt="Mastercard" />
                    <img src={Americanexp} alt="American Express" />
                </div>
                <div className='carddibbottom'>
                    <input placeholder='Name on card' id='name_on_card' type="text" />
                    <input placeholder='Card number' id='card_number' type="text" />
                    <input placeholder='Expiry date' id='expiry_date' type="text" />
                    <input placeholder='<CVV/CVC>' id='cvv' type="text" />
                </div>
                <hr className='hrline' />
                <div className='payableamount'>
                    <p>Total payable: $XXX</p>
                    <p className='saveAmt'>You save $XXX </p>
                </div>
                <p className='aed'><u>You will be charge in AED</u></p>
                <p className='termCond'>By clicking "confirm & pay", you agree to <span>Tickete's general terms and conditions</span> and <span>cancellation policy.</span></p>
                <button className='confirmpaybtn'>Confirm & pay</button>
            </div>

            <div className='apay'>
            <div className='carddivtop'>
                    <div className='credit_debit'>
                        <img src={Apay} alt="apay" />
                        <span>Coming soon</span>
                    </div>
                    <div className='roundgreybtn'>
                    </div>
                </div>
            </div>
            <div className='gpay'>
            <div className='carddivtop'>
                    <div className='credit_debit'>
                        <img src={Gpay} alt="gpay" />
                        <span>Coming soon</span>
                    </div>
                    <div className='roundgreybtn'>
                    </div>
                </div>
            </div>
        </div>
        <hr className='hrline' />
        <p className='total_payable'>Total payable: $XXX</p>
        <div className='importantmessage'>
            <div className='image_'>
                <img src={Caution} alt="exclamatory"/>
            </div>
            <div className='information_'>
                <p>You will be charge in AED</p>
                <p className='warning'>The price shown here is in US Dollar (USD) as per the current conversation rate. You will be charge in United Arab Emirates Dirham(AED)</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentMode