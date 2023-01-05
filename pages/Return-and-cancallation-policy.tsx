import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Returnandcancallationpolicy = () => {
    return (
        <div>
            {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Navbar />
            {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}

            {/* Return and Cancallation Policy  >.>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className='container mx-auto p-10'>
                <h4 className='text-left text-[44px] md:text-[50px] text-gray-800  roboto font-bold'>Return and Cancallation Policy</h4>
                <div className='mt-11'>
                    <p className='text-justify text-xl mt-4'>Streamway, Inc (“us”, “we”, or “our”) operates the https://streamway.in website (the “Service”).</p>
                    <p className='text-justify text-xl mt-4'>Streamway offers a 15 day trial to all registered users to use the Streamway Restreaming without any financial obligation. To continue using the SaaS product, the user must choose a User Package, as defined on Streamway&#39;s website and purchase a monthly or annual subscription. In addition there are some prepaid plans ranging from 1 day(24 hour) lifecycle to 25 days. This policy applies to subscribers and prepaid plan buyers that have paid a premium to use Streamway&#39;s Cloud Restreaming defined as &#34;The Customer&#34; in the below policy.</p>
                    <p className='text-justify text-xl mt-4'>Automatic Recurring Billing Agreement between Streamway (&#34; Streamway&#34;) and the organization using Streamway (&#34;Your Organization&#34;) including the person acting as the owner (&#34;You&#34;) for Your Organization and/or the person acting as the billing contact (&#34;Billing Contact&#34;) for Your Organization. </p>
                    <p className='text-justify text-xl mt-4'>Please read this agreement carefully and in full before agreeing to create an account for Your Organization and authorize recurring payments. Please verify that all information provided is complete and accurate before confirming Your agreement.</p>
                    <p className='text-justify text-xl mt-4'>Since our Website offers non-tangible, irrevocable goods we do not provide refunds after the product is purchased, which you acknowledge prior to purchasing any product on the Website. You may however sign up for a free fully functioning 15 day trial and try the service before making a purchase.</p>
                    <p className='text-justify text-xl mt-4'>You have the right to change Your payment method or withdraw Your consent to this Automatic Recurring Payment at any time. Doing so will cancel and deactivate Your Organization&#39;s account from all use at the end of the &#34;billing month&#34; of your subscription according to the following prorating terms.</p>
                </div>

                {/* Prorating */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Prorating:</h5>
                <ul className='list-disc ml-14' >
                    <li>
                        <p className='text-justify text-xl mt-4'>If a customer cancels a subscription during the ongoing billing month, effective cancellation date is the next billing date (end of billing cycle). This means that the customer will not be billed next time and will have until that date to use the Streamway Cloud Product - SaaS.</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >If a customer downgrades a subscription during the ongoing billing month, effective downgrade date is the next billing date (end of billing cycle). This means that the customer will be billed next time for the downgraded package and will have until that date to use Streamway with the current package. The downgraded package will go into effect on the next billing cycle.</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >If a customer upgrades a subscription during the ongoing billing month, effective upgrade date is immediately and it will be prorated for the remaining days until the next billing date (end of billing cycle). The customer will be billed next time for the upgraded package and thereon.</p>
                    </li>
                    <li>
                        <p className='text-justify text-xl mt-4' >Similarly In case of prepaid packages no refund is provided.</p>
                    </li>
                </ul>

                {/* Contact Us */}
                <h5 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Contact Us</h5>
                <p className='text-justify text-xl '>If you have any further questions or need clearification about the Refund and Cancellation Policy, please reach out us. </p>
            </div>

            <hr />

            {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Footer />
            {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        </div>
    )
}

export default Returnandcancallationpolicy
