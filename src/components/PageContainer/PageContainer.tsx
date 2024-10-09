import { ReactNode } from "react"
import CustomButton from "../../components-ui/CustomButton/CustomButton"
import "./PageContainer.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleSetUsers, IInithialState } from "../../store";

interface IPageContainerProps {
    children: ReactNode
}

export default function Component(props: IPageContainerProps) {

    const dispatch = useDispatch();
    const users = useSelector((store: IInithialState) => store.usersList);

    const handleSortUsersByCity = () => {
        let usersCopy = [...users];
        usersCopy.sort((prev, next) => {
            if (prev.address.city <= next.address.city) return -1;
            return 1;
        });
        dispatch(handleSetUsers(usersCopy));
    };

    const handleSortUsersByCompany = () => {
        let usersCopy = [...users];
        usersCopy.sort((prev, next) => {
            if (prev.company.name <= next.company.name) return -1;
            return 1;
        });
        dispatch(handleSetUsers(usersCopy));
    };

    return (
        <div className="page">
            <div className="menu">
                <div className="title">Сортировка</div>
                <div className="actions">
                    <CustomButton text="по городу" onClick={handleSortUsersByCity} />
                    <CustomButton text="по компании" onClick={handleSortUsersByCompany} />
                </div>
            </div>
            <div className="content">
                {
                    props.children
                }
            </div>
        </div>
    )
}