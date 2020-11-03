import React from 'react';
import './Profile.css';

const Profile = (props) => {
    const {img, name, phone, email, address, yearlySalary} = props.profile;
    
    // console.log(props)


    return (
        <div className="profile">
            <img src={img} alt=""/>
            <h4>{name}</h4>
            <p><b>Email: </b>{email}</p>
            <p><b>Call: </b>{phone}</p>
            <p><b>City: </b>{address.city}</p>
            <p><b>Salary: </b>$ {yearlySalary}</p>
            <button className="addfriend"
             onClick={() => props.handleAddFriend(props.profile)}
            >+ Add Friend</button>
        </div>
    );
};

export default Profile;