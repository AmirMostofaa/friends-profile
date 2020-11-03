import React from 'react';
import { useEffect, useState } from 'react';
import './Content.css';
import data from '../../data/userProfile';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';

const Content = () => {
    const [users, setUser] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setUser(data)
    }, []);

    const handleAddFriend = (profile) =>{
        console.log('Friend Added!')
        const newCart = [...cart, profile]
        setCart(newCart)
    }

   

    return (
        <div className="main-content">
            <div className="profiles">
                
                <ul>
                    {
                    users.map(user => <Profile 
                        profile={user}
                        handleAddFriend={handleAddFriend}
                        ></Profile>)
                    }
                </ul>

            </div>

            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Content;