import { useParams } from 'react-router-dom';
import './UserProfile.scss';
import { useEffect, useState } from 'react';
import { IUser } from '../../interfaces/user';
import { fetchUserById } from '../../api';
import CustomButton from '../../components-ui/CustomButton/CustomButton';
import CustomInput from '../../components-ui/CustomInput/CustomInput';


export default function UsersList() {

    const { userId } = useParams();
    const [selectedUser, setSelectedUser] = useState<IUser>();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    
    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleSendNewUserData = () => {
        if (
            selectedUser?.name.length !== 0 &&
            selectedUser?.username.length !== 0 && 
            selectedUser?.email.length !== 0 && 
            selectedUser?.phone.length !== 0 && 
            selectedUser?.address.street.length !== 0 &&
            selectedUser?.address.zipcode.length !== 0 && 
            selectedUser?.website.length !== 0
        ) {
            setIsEditing(false);
            console.log(selectedUser);
        } else {
            console.log("Форма невалидная")
        }
    };

    useEffect(() => {
        if (userId) {
            fetchUserById(+userId).then(res => {
                if (res) setSelectedUser(res);
            })
        }
    }, [userId]);

    if (selectedUser) {
        return (
            <div className="profile">
                <div className="title">
                    <h2>Профиль пользователя</h2>
                    <CustomButton text="Редактировать" onClick={handleStartEditing} />
                </div>
                <div className="content">
                    <form className="userForm">
                        <div className="line">
                            <label>Name</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.name}
                                isValid={selectedUser.name.length !== 0}
                                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>User name</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.username}
                                isValid={selectedUser.username.length !== 0}
                                onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>E-mail</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.email}
                                isValid={selectedUser.email.length !== 0}
                                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>Street</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.address.street}
                                isValid={selectedUser.address.street.length !== 0}
                                onChange={(e) => setSelectedUser({ 
                                    ...selectedUser, 
                                    address: { ...selectedUser.address, street: e.target.value} 
                                })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>Zip code</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.address.zipcode}
                                isValid={selectedUser.address.zipcode.length !== 0}
                                onChange={(e) => setSelectedUser({ 
                                    ...selectedUser, 
                                    address: { ...selectedUser.address, zipcode: e.target.value} 
                                })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>Phone</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.phone}
                                isValid={selectedUser.phone.length !== 0}
                                onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>Website</label>
                            <CustomInput 
                                placeholder='' 
                                defaultValue={selectedUser?.website}
                                isValid={selectedUser.website.length !== 0}
                                onChange={(e) => setSelectedUser({ ...selectedUser, website: e.target.value })}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="line">
                            <label>Comment</label>
                            <textarea className="comment" readOnly={!isEditing} />
                        </div>
                    </form>
                </div>
                <div className="actions">
                    <CustomButton 
                        disabled={!isEditing} 
                        text="Отправить" 
                        onClick={handleSendNewUserData}
                        color="#52CF4F"
                    ></CustomButton>
                </div>
            </div>
        )
    } else {
        return <div>Loading...</div>;
    }
}