import { Header } from '@/containers/Header';
import { AboutUs } from '@containers/AboutUs';
import { Collaboration } from '@containers/Collaboration';
import { CustomersComments } from '@containers/CustomersComments';
import { FirstSection } from '@containers/FirstSection';
import { Footer } from '@containers/Footer';
import { Labs } from '@containers/Labs';
import { PopularCourses } from '@containers/PopularCourses';
import { SignUp } from '@containers/SignUp';
import { TopCategories } from '@containers/TopCategories';
import './App.css';
import { InscriptionForm } from './containers/InscriptionForm';

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <AboutUs />
      <Collaboration />
      <PopularCourses />
      <TopCategories />
      <Labs />
      <CustomersComments />
      <SignUp />
      <InscriptionForm />
      <Footer />
    </>
  );
}

export default App;
