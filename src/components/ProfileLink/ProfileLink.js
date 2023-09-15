import { Link } from 'react-router-dom';
import profile from '../../images/icon-prof.svg';
import './ProfileLink.css';

function ProfileLink() {
  return (
    <Link to="/profile" className="profile-link" title="Редактировать профиль">
      Аккаунт
      <div className='profile-link__img'>
        <img src={profile} alt="Профиль" />
      </div>
    </Link>
  );
}

export default ProfileLink;