import PropTypes from 'prop-types';
import { Description, Image } from './ProfileDescription.styled';

export const ProfileDescription = (user) => {
  return (
    <Description>
      <Image src={user.avatar} alt="User avatar" />
      <p>{user.username}</p>
      <p>@{user.tag}</p>
      <p>{user.location}</p>
    </Description>
  );
};

ProfileDescription.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};