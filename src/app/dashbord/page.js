import React from 'react'
import PaymentPage from '../componants/PaymentPage'

const Dashbord = ({ params }) => {
    return (
        <>
        <PaymentPage username={params.username} />
        </>
    )
}
export default Dashbord
