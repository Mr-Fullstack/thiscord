import { Container } from '@/components/GridSystem';
import { Logo } from '@/components/Logo/Logo';
import globalStyles from '@/sass/main.module.scss';
import { SelectLanguage } from '@/components/SelectLanguage/SelectLanguage';
import { useParams } from 'react-router-dom';


export function Header() {

  const { pathname } = window.location;
  console.log(pathname)

  return (
    <header className={globalStyles.header + " " + (pathname === '/' ? globalStyles.header_home : '')}>
      <Container>
        <div className={globalStyles.header_wrapper}>
          <Logo />
          <SelectLanguage />
        </div>
      </Container>
    </ header>
  )
}
