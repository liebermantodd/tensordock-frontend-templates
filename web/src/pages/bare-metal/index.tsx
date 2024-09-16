import Head from '../../components/head';
import { SPLASH_TITLE } from '../../constants/branding';
import SplashSection from './1-splash';
import BodySection from './2-body';
import FooterSection from '../home/4-footer';

export default function HomePage() {
  return (
    <>
      <Head title={SPLASH_TITLE} />
      <SplashSection />
      <BodySection />
      <FooterSection />
    </>
  );
}



