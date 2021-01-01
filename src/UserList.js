import React from 'react';
import User from './User';

function UserList({ users, onRemove, onToggle }) {
    

    return (
        <div>
            {users.map((list) => (
                <User list={list} key={list.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );

}

export default React.memo(UserList);