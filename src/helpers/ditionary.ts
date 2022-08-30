import en_us_flag from '@/globals/images/flag_en_us.svg';
import pt_br_flag from '@/globals/images/flag_pt_br.svg';
import { LanguageProps, TranslateProps } from '@/types/DitionaryTypes';
import Signin from './../landing/pages/signin/Signin';

const en_us_ditionary = {

  hero_message: 'The best and cutest app to start a discussion ;)',
  friends_title: 'Create a space and fill with friends to chat',
  friends_text: 'Organize your channels by subject to collaborate, or simply talk about the day without clogging up a general chat.',
  club_title: 'Very easy to join those guys',
  club_text: "Voice channels are perfect for when you're tired of typing. Your friends on the server can see you and join right away, without having to make the call.",
  call_title: 'Ready to start your journey?',
  call_text: 'How about getting your gang together in a maddening call, right now! here we go!',
  Resources: 'Resources',
  Company: 'Company',
  Policy: 'Policy',
  Support: 'Support',
  About: 'About',
  Terms: 'Terms',
  Blog: 'Blog',
  Jobs: 'Jobs',
  Privacy: 'Privacy',
  Developers: 'Developers',
  Brand: 'Brand',
  qrCodeSignin: 'Login with QR Code',
  qrCodeInfo: 'I scanned this code with ThisCord mobile app to log in immediately.',
  authSignInTitle: 'Welcome back!',
  authSignMessage: 'We are excited to see you here!',
  authSignUpTitle: 'Create an account',
  email: 'Email',
  username: 'Username',
  password: 'Password',
  birthdate: 'Birth date',
  formPasswordRecovery: 'Forgot password?',
  formAccountCreate: 'In need of an account?',
  formRegister: 'Register',
  login: 'Login',
  formHasAccount: 'I already have an account?',
  continue: 'Continue',
  agreeRegister: 'By registering, you agree to the',
  terms: 'terms of use',
  privacy: 'privacy policy',
  and: 'and',
  signin: 'Signin',
  download_ios: 'Download on Apple Store',
  download_web: 'open in your browser',
  download_android: 'Download on Google Play',
  download_desktop: 'Download on Desktop',
  day: 'Day',
  month: 'Month',
  year: 'Year',
  january: 'January',
  february: 'February',
  march: 'March',
  april: 'April',
  may: 'May',
  june: 'June',
  july: 'July',
  august: 'August',
  september: 'September',
  october: 'October',
  november: 'November',
  december: 'December'
}

const pt_br_ditionary = {
  hero_message: 'O melhor e mais fofo aplicativo para iniciar uma discussão ;)',
  friends_title: 'Crie um espaço e encha de amigos para conversar',
  friends_text: 'Organize seus canais por assunto para colaborar, ou simplesmente fale sobre o dia sem atrapalhar um chat geral.',
  club_title: 'Muito fácil se juntar com a galera',
  club_text: 'Canais de voz são perfeitos para quando você está cansado de digitar. Seus amigos no servidor podem vê-lo e participar imediatamente, sem precisar fazer a chamada',
  call_title: 'Pronto para começar sua jornada?',
  call_text: 'Que tal juntar sua galera em uma video chamada irada, agora mesmo! vamos nessa!',
  Resources: 'Recursos',
  Company: 'Empresa',
  Policy: 'Politica',
  Support: 'Suporte',
  About: 'Sobre',
  Terms: 'Termos',
  Blog: 'Blog',
  Jobs: 'Trabalho',
  Privacy: 'Privacidade',
  Developers: 'Desenvolvedores',
  Brand: 'Marca',
  qrCodeSignin: 'Entrar com Código QR',
  qrCodeInfo: 'Escanei esse código com app móvel do ThisCord para fazer login imediatamente',
  authSignInTitle: 'Bem vindo de volta!',
  authSignMessage: 'Estamos animado em ver você por aqui!',
  authSignUpTitle: 'Criar uma conta',
  email: 'E-mail',
  username: 'Nome de usuário',
  password: 'Senha',
  birthdate: 'Data de nascimento',
  formPasswordRecovery: 'Esqueceu a senha?',
  formAccountCreate: 'Precisando de uma conta?',
  formRegister: 'Registre-se',
  login: 'Entrar',
  formHasAccount: 'Já tenho uma conta ?',
  continue: 'Continuar',
  agreeRegister: 'Ao se registrar, você concorda com os',
  terms: 'termos de uso',
  privacy: 'política de privacidade',
  and: 'e',
  signin: 'Entrar',
  download_ios: 'Baixar na Apple Store',
  download_web: 'Abrir no navegador',
  download_android: 'Baixar no Google Play',
  download_desktop: 'Baixar no Desktop',
  day: 'Dia',
  month: 'Mês',
  year: 'Ano',
  january: "Janeiro",
  february: "Fevereiro",
  march: "Março",
  april: "Abril",
  may: "Maio",
  june: "Junho",
  july: "Julho",
  august: "Agosto",
  september: "Setembro",
  october: "Outubro",
  november: "Novembro",
  december: "Dezembro",
}



const pt_br: LanguageProps = {
  name: 'Português, BRA',
  unicode: 'pt_br',
  flag_src: pt_br_flag
}

const en_us: LanguageProps = {
  name: 'English, USA',
  unicode: 'en_us',
  flag_src: en_us_flag
}

const languageList = [pt_br, en_us]

const translate: TranslateProps = {
  pt_br: pt_br_ditionary,
  en_us: en_us_ditionary
}
export default {
  translate,
  languageList
}