import { GoogleIcon } from '@/assets/icons/GoogleIcon';
import { IbmIcon } from '@/assets/icons/IbmIcon';
import { MetaIcon } from '@/assets/icons/MetaIcon';
// import { EdxIcon } from '@/assets/icons/logos/EdxIcon';
import { EdxIcon } from '@/assets/icons/logos/EdxIcon';
import harvardIcon from '@assets/icons/logos/harvard-icon.svg';
import stanfordIcon from '@assets/icons/logos/stanford-icon.svg';
import oxfordIcon from '@assets/icons/logos/university-of-oxford-logo.svg';
import { Container, LogosContainer, TitleContainer } from './styles';

export const Collaboration = () => (
  <Container>
    <TitleContainer>
      <h1>We collaborate with</h1>{' '}
      <a href='#labs'>more than 300 universities and leader companies</a>
    </TitleContainer>

    <LogosContainer>
      <IbmIcon />
      <MetaIcon />
      <GoogleIcon />
      <EdxIcon />
      <img
        id='penn-icon'
        src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&w=&h=37'
        alt=''
      />
      <img src={stanfordIcon} alt='' />
      <img src={oxfordIcon} alt='' />
      <img src={harvardIcon} alt='' />
    </LogosContainer>
  </Container>
);
