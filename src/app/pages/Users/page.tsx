'use client';
import React from 'react';

const Users = () => {
    const handleAddUser = (e: any) => {
        console.log('e----------', e)
    }
    return (
        <>
        <h1>Users</h1>
        <button onClick={handleAddUser}>Add User</button>
        </>
    )
}

export default Users;