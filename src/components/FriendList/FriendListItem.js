import React from 'react';
import s from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.statusOnline : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
