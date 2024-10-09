import { useEffect } from "react";
import { fetchUsers } from "./api";
import { handleSetUsers } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { IInithialState } from "./store/index";
import { IUser } from "./interfaces/user";
import UsersList from "./pages/UsersList/UsersList";
import "./App.scss";
import PageContainer from "./components/PageContainer/PageContainer";
import { Route, Routes } from 'react-router';
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {

    const users: IUser[] = useSelector((store: IInithialState) => store.usersList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers().then(res => {
            if (res) {
                dispatch(handleSetUsers(res));
            }
        })
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route 
                    path="/" 
                    element={<PageContainer><UsersList list={users}/></PageContainer>}
                ></Route>
                <Route 
                    path="/profile/:userId" 
                    element={<PageContainer><UserProfile /></PageContainer>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
