import { Avatar } from 'antd';
import { Container, OpinionAuthorContainer } from './styles';

interface OpinionProps {
  photo: string;
  opinion: string;
  author: string;
  role: string;
}

export const Opinion = ({ photo, opinion, author, role }: OpinionProps) => (
  <Container>
    <div>
      <Avatar size={200} src={photo} alt={`${author} from ${role}`} />
    </div>
    <OpinionAuthorContainer>
      <h1>“{opinion}”</h1>
      <div>
        <p>{author}</p>
        <span id='comma'>, </span>
        <span id='role'>{role}</span>
      </div>
    </OpinionAuthorContainer>
  </Container>
);
