import { EdxIcon } from '@/assets/icons/EdxIcon';
import { GoogleIcon } from '@/assets/icons/GoogleIcon';
import { IbmIcon } from '@/assets/icons/IbmIcon';
import { MetaIcon } from '@/assets/icons/MetaIcon';
import { PennIcon } from '@/assets/icons/PennIcon';
import harvardIcon from '@assets/icons/harvard-icon.svg';
import stanfordIcon from '@assets/icons/stanford-icon.svg';
import oxfordIcon from '@assets/icons/university-of-oxford-logo.svg';
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
      <PennIcon />
      <img src={stanfordIcon} alt='' />
      <img src={oxfordIcon} alt='' />
      <img src={harvardIcon} alt='' />
    </LogosContainer>
  </Container>
);
