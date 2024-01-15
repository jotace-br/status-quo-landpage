import { useScrollContext } from '@/contexts/ScrollContext';
import primaryLogo from '@assets/logo/primaryLogo.svg';
import { DefaultBtn, PrimaryBtn } from '@components/Button';
import { ActionsContainer, HeaderContainer, NavLinks } from './styles';

export const Header = () => {
  const { aboutUsRef, coursesRef, labsRef, handleClick } = useScrollContext();

  return (
    <HeaderContainer>
      <img className='logo' src={primaryLogo} alt='statusQuo Logo' />
      <NavLinks>
        <a href='#'>Home</a>
        <button onClick={() => handleClick(aboutUsRef)}>About Us</button>
        <button onClick={() => handleClick(coursesRef)}>Courses</button>
        <button onClick={() => handleClick(labsRef)}>Labs</button>
      </NavLinks>
      <ActionsContainer>
        <DefaultBtn type='default'>Login</DefaultBtn>
        <PrimaryBtn type='primary'>Sign Up</PrimaryBtn>
      </ActionsContainer>
    </HeaderContainer>
  );
};
