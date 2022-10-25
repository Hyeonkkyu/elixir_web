// import React from 'react';
import '../css/footer.scss';
// import companyInfo from './CompanyInfo'

// const Footer = () => {
//     return (
//         <footer className='Footer inner'>
//             <div className='top'>
//                 <div className='inner'>
//                     {/* <Customer /> */}
//                 </div>
//             </div>
//             <div className='bottom'>
//                 <div className='inner'>
//                     <p>
//                         {/* ADDRESS : {company.address} <br /> */}
//                         &copy; {companyInfo.company}.allright reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container inner">
                <h1 className='logo'>
                    <Link to='/'>
                        ELIXIR
                    </Link>
                </h1>
                <div className="copyRight">
                    <p>Copyright &copy; 2011 ELIXIR. All Rights Reserved</p>
                </div>
                <address className='info'>
                    <ul>
                        <li>상호 : 문학동네</li>
                        <li>대표 : 김소영</li>
                        <li>주소 : 경기도 파주시 회동길210 문학동네</li>
                        <li>전화 : 031-955-2637</li>
                        <li>사업자등록번호 : 208-81-24906</li>
                        <li>통신판매 : 2005-00436</li>
                        <li>E-mail : <a href="mailto:editor@elmys.co.kr">editor@elmys.co.kr</a></li>
                    </ul>
                </address>
            </div>

        </footer>

    )
}

export default Footer