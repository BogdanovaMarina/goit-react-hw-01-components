import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem.js';

const FriendList = function ({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(el => {
        const { avatar, name, isOnline } = el;
        return (
          <FriendListItem
            key={el.id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;
