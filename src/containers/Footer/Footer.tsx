import { FacebookIcon } from '@/assets/icons/FacebookIcon';
import { InstagramIcon } from '@/assets/icons/InstagramIcon';
import { LinkedInLogo } from '@/assets/icons/LinkedInLogo';
import { TikTokIcon } from '@/assets/icons/TikTokIcon';
import { TwitterIcon } from '@/assets/icons/TwitterIcon';
import { YoutubeIcon } from '@/assets/icons/YoutubeIcon';
import whiteLogo from '@assets/logo/whiteLogo.svg';
import {
  Container,
  Divider,
  LinkContainer,
  LinksWrapper,
  RightsReservedContainer,
  SocialContainer,
  Wrapper,
} from './styles';

export const Footer = () => (
  <Container>
    <Wrapper>
      <div className='logo'>
        <img src={whiteLogo} alt='statusQuo Logo' />
      </div>

      <div className='links-social-container'>
        <LinksWrapper>
          <LinkContainer>
            <h5>Status Quo</h5>
            <div>
              <a href='#'>About Us</a>
              <a href='#'>Labs™</a>
              <a href='#'>Degrees</a>
              <a href='#'>Jobs</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Social Impact</a>
            </div>
          </LinkContainer>

          <LinkContainer>
            <h5>Community</h5>
            <div>
              <a href='#'>Learners</a>
              <a href='#'>Partners</a>
              <a href='#'>Beta Testers</a>
              <a href='#'>Blog & Tech Blog</a>
              <a href='#'>statusQuo’s Podcast</a>
              <a href='#'>Learning Center</a>
            </div>
          </LinkContainer>

          <LinkContainer>
            <h5>More</h5>
            <div>
              <a href='#'>Contact Us</a>
              <a href='#'>Articles</a>
              <a href='#'>Directories</a>
              <a href='#'>Accessibility</a>
              <a href='#'>Help</a>
              <a href='#'>Manage Cookie Preferences</a>
            </div>
          </LinkContainer>
        </LinksWrapper>

        <SocialContainer>
          <h5>Social</h5>

          <div>
            <a href='https://www.facebook.com' target='_blank'>
              <FacebookIcon />
            </a>
            <a href='https://www.instagram.com' target='_blank'>
              <InstagramIcon />
            </a>
            <a href='https://www.x.com' target='_blank'>
              <TwitterIcon />
            </a>
            <a href='https://www.youtube.com' target='_blank'>
              <YoutubeIcon />
            </a>
            <a href='https://www.tiktok.com' target='_blank'>
              <TikTokIcon />
            </a>
            <a href='https://www.linkedin.com' target='_blank'>
              <LinkedInLogo />
            </a>
          </div>
        </SocialContainer>
      </div>
    </Wrapper>

    <RightsReservedContainer>
      <Divider />

      <div className='all-rights-reserved'>
        <p>© 2024 statusQuo | All Rights Reserved</p>
      </div>
    </RightsReservedContainer>
  </Container>
);
