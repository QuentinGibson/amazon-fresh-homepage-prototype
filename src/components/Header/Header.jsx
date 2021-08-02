import logo from '../../amazon-logistics-logo.png'

import Tab from '../Tab'
const Header = () => {
    return (
        <>
            <header><img src={logo} alt="Amazon Logistics logo" width={300} /></header>
            <Tab/>
        </>
    )
}

export default Header