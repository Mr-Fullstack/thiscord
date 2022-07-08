import logo from '@/globals/images/logo.svg';
import globalStyles from '@/sass/main.module.scss';
import { Link } from 'react-router-dom';
export function Logo() {
  return (
    <Link to="/" className={globalStyles.logo}>
      <img src={logo} alt=""  />
    </Link>
  )
}
