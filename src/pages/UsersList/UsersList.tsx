import { IUser } from "../../interfaces/user"
import './UsersList.scss';
import { useNavigate } from "react-router";

interface IUsersListProps {
    list: IUser[]
}

export default function UsersList(props: IUsersListProps) {

    const navigate = useNavigate();

    const handleGoToProfile = (userId: number) => {
        navigate(`/profile/${userId}`);
    };

    return (
        <div className="list">
            <h2>Список пользователей</h2>
            {
                props.list.map(user => (
                    <div className="user" key={user.id}>
                        <div className="line">
                            <div className="title">ФИО:</div>
                            <div className="value">{user.name}</div>
                        </div>
                        <div className="line">
                            <div className="title">город:</div>
                            <div className="value">{user.address.city}</div>
                        </div>
                        <div className="line">
                            <div className="title">компания:</div>
                            <div className="value">ООО "{user.company.name}"</div>
                        </div>
                        <div className="actions">
                            <div className="moreInfo" onClick={() => handleGoToProfile(user.id)}>Подробнее</div>
                        </div>
                    </div>
                ))
            }
            <div className="count">Найдено {props.list.length} пользователей</div>
        </div>
    )
}