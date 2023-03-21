import PropTypes from 'prop-types';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';
import { UserProfile } from './Profile.styled';

export const User = ({ user }) => {
  return (
    <UserProfile key={user.tag}>
      <ProfileDescription user={user} />
      <ProfileStats user={user} />
    </UserProfile>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};