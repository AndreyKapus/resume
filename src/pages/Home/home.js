import ContactInfo from '../../components/ContactInfo/ContactInfo';
import SoftSkills from '../../components/SoftSkills/SoftSkills';
import TechSkills from '../../components/TechSkills/TechSkils';
import Languages from '../../components/Languages/Languages';
import ProfileImage from '../../components/photo/photo';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import {
  HomePage,
  HeaderStyledWrapper,
  StyledSideBar,
} from './HomePage.styled';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <HomePage>
      <StyledSideBar>
        <ProfileImage />
        <ContactInfo />
        <TechSkills />
        <SoftSkills />
        <Languages />
      </StyledSideBar>
      <HeaderStyledWrapper>
        <Header />
        <Navigation />
        <Outlet />
      </HeaderStyledWrapper>
    </HomePage>
  );
};

export default Home;