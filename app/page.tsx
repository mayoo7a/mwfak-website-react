import CustomCursor from '@/components/CustomCursor';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhySection from '@/components/WhySection';
import StepsSection from '@/components/StepsSection';
import BookingSection from '@/components/BookingSection';
import ShowSection from '@/components/ShowSection';
import StatsSection from '@/components/StatsSection';
import AcademySection from '@/components/AcademySection';
import B2BSection from '@/components/B2BSection';
import QuoteSection from '@/components/QuoteSection';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';
import SiteScripts from '@/components/SiteScripts';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Hero />
      <Services />
      <WhySection />
      <StepsSection />
      <BookingSection />
      <ShowSection />
      <StatsSection />
      <AcademySection />
      <B2BSection />
      <QuoteSection />
      <CtaFinal />
      <Footer />
      <SiteScripts />
    </>
  );
}
