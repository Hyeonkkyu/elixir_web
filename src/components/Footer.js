import React from 'react';
import '../css/footer.scss';
import companyInfo from './CompanyInfo'

const Footer = () => {
    return (
        <footer className='Footer inner'>
            <div className='top'>
                <div className='inner'>
                    {/* <Customer /> */}
                </div>
            </div>
            <div className='bottom'>
                <div className='inner'>
                    <p>
                        {/* ADDRESS : {company.address} <br /> */}
                        &copy; {companyInfo.company}.allright reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer