import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Footer from './Footer'

const Privacypolicy = () => {
    return (
        <div>
            {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Navbar />
            {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}

            {/* Privacy Policy  >.>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className='container mx-auto p-10'>
                <h1 className='text-center text-7xl text-gray-800  roboto font-bold'>Privacy Policy</h1>
                <div className='mt-11'>
                    <p className='text-justify text-xl mt-4'>Streamway, Inc (“us”, “we”, or “our”) operates the https://streamway.in website (the “Service”).</p>
                    <p className='text-justify text-xl mt-4'>We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                    <p className='text-justify text-xl mt-4'    >We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at streamway.in/resources/terms.   </p>
                </div>

                {/* Information Collection And Use  */}
                <h3 className='text-3xl mt-14 mb-6 roboto text-gray-700  font-semibold'>Information Collection And Use</h3>
                <p className='text-justify text-xl'>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, other information (“Personal Information”).</p>
                <p className='text-justify text-xl mt-4'>We collect this information for the purpose of providing the Service, identifying and communicating with you, responding to your requests/inquiries, servicing your purchase orders, and improving our services.</p>

                {/* Log Data */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Log Data</h3>
                <p className='text-justify text-xl'>We may also collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
                <p className='text-justify text-xl mt-4'>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Service’s functionality. These third party service providers have their own privacy policies addressing how they use such information.</p>

                {/* Cookies  */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Cookies</h3>
                <p className='text-justify text-xl '>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and transferred to your device. We use cookies to collect information in order to improve our services for you.</p>
                <p className='text-justify text-xl mt-4'>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. The Help feature on most browsers provide information on how to accept cookies, disable cookies or to notify you when receiving a new cookie.</p>
                <p className='text-justify text-xl mt-4'>If you do not accept cookies, you may not be able to use most features of our Service and we recommend that you leave them turned on.</p>

                {/* Do Not Track Disclosure */}
                <h3 className='t    ext-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Do Not Track Disclosure</h3>
                <p className='text-justify text-xl '>We support Do Not Track (“DNT”). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
                <p className='text-justify text-xl mt-4'>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>

                {/* Service Providers */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Service Providers</h3>
                <p className='text-justify text-xl '>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services and/or to assist us in analyzing how our Service is used.</p>
                <p className='text-justify text-xl mt-4'>These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose.</p>

                {/* Business Transaction */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Business Transaction</h3>
                <p className='text-justify text-xl '>If Streamway, Inc is involved in a merger, acquisition or asset sale, your Personal Information may be transferred as a business asset. In such cases, we will provide notice before your Personal Information is transferred and/or becomes subject to a different Privacy Policy</p>

                {/* Security */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Security</h3>
                <p className='text-justify text-xl '>The security of your Personal Information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store, in order to protect it from unauthorized access, destruction, use, modification, or disclosure.</p>
                <p className='text-justify text-xl mt-4'>However, please be aware that no method of transmission over the internet, or method of electronic storage is 100% secure and we are unable to guarantee the absolute security of the Personal Information we have collected from you.</p>

                {/* International Transfer */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>International Transfer</h3>
                <p className='text-justify text-xl '>Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                <p className='text-justify text-xl mt-4'>If you are located outside United States and choose to provide information to us, please note that we transfer the information, including Personal Information, to United States and process it there.</p>
                <p className='text-justify text-xl mt-4'>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

                {/* Links To Other Sites */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Links To Other Sites</h3>
                <p className='text-justify text-xl '>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                <p className='text-justify text-xl mt-4'>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                {/* Personal Information Collected from Connected Third Party Accounts */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Personal Information Collected from Connected Third Party Accounts</h3>
                <p className='text-justify text-xl '>If you link Streamway to a third party account, we may collect and store certain information.</p>
                <p className='text-justify text-xl mt-4'>Streamway may allow you to connect a YouTube channel to your Streamway account. In this case, we will access certain information from YouTube about your channel using YouTube API Services. We may collect channel title, channel thumbnail, username / profile ID, email, access tokens, and live broadcasts. This includes information related to your live videos (such as comments, live viewer counts, ingest address, stream name). If you decide to connect a YouTube channel to your Streamway account, see Google&lsquo;s privacy policy. When disconnecting a YouTube channel on Streamway, Streamway will delete the stored data associated with that YouTube channel. In addition, you can revoke access via Google&lsquo;s security settings page. Similiarly Streamway allows you to collect more platforms like Facebook Twitch LinkedIn and many more. In that case, we will access certain information from that Third Party&lsquo;s API services. We will only collect necessary information to help you live broadcast on those Third Party platforms and to aggrigate and show analytics combined of all platforms. If you decide to connect a Third party Social platform (e.g. Facebook), we request you to check out respective platform&lsquo;s privacy policy. When disconnecting a Third party platform (e.g. Facebook page) on Streamway, Streamway will delete the stored data associated with that respective platform. In addition, you can revoke access via respective platform&lsquo;s security settings page.</p>

                {/* Children’s Privacy */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Children’s Privacy</h3>
                <p className='text-justify text-xl '>Only persons age 18 or older have permission to access our Service. Our Service does not address anyone under the age of 13 (“Children”).</p>
                <p className='text-justify text-xl mt-4'>We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you learn that your Children have provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under age 13 without verification of parental consent, we take steps to remove that information from our servers.</p>

                {/* Changes To This Privacy Policy */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Changes To This Privacy Policy</h3>
                <p className='text-justify text-xl '>This Privacy Policy is effective as of Friday, July 20th, 2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
                <p className='text-justify text-xl mt-4'>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                <p className='text-justify text-xl mt-4'>If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>

                {/* Contact Us */}
                <h3 className='text-3xl mt-14 mb-6  roboto text-gray-700  font-semibold'>Contact Us</h3>
                <p className='text-justify text-xl '>If you have any questions about this Privacy Policy, please <Link href={"ContactUs"} className="text-blue-600 underline" >contact us.</Link> </p>
            </div>

<hr />

             {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
             <Footer />
            {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        </div>
    )
}

export default Privacypolicy
