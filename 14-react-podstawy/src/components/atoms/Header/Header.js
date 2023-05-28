import styles from './Header.module.css'
import logo from '../../../assets/logo.svg'


const Header = (props) => {
    return (
        <h1
            className={styles.app_header}
        >
            {/* <img src={logo} alt="Logo" className='logo' /> */}
            {props.text}
        </h1>
    );
}
export default Header;