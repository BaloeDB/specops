import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import DepartmentLog from "../models/log/DepartmentLog";
import UserLog from "../models/log/UserLog";
import SearchFilter from "../models/filter/SearchFilter";
import getAllUsers from "../services/getAllUsers";
import getAllDepartments from "../services/getAllDepartments";

type ContextType = {
  getUsers: () => UserLog[];
  getDepartments: () => DepartmentLog[];
  search: (type: SearchFilter, query: string) => void;
};

type ProviderType = FC<{ children: ReactNode }>;

export const UserContext = createContext<ContextType>({
  getUsers: () => [],
  getDepartments: () => [],
  search: () => {},
});

export const UserProvider: ProviderType = ({ children }) => {
  const [users, setUsers] = useState<UserLog[]>([]);
  const [departments, setDepartments] = useState<DepartmentLog[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getUserList = async () => {
      const users = await getAllUsers();
      const deps = await getAllDepartments();
      setUsers(users);
      setDepartments(deps);
    };
    getUserList();
  }, []);

  const getUsers = () => {
    return applySearch(users);
  };

  const getDepartments = () => {
    return departments;
  };

  const applySearch = (list: UserLog[]) => {
    if (query === "") {
      return list;
    }
    return list.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const search = (newType: SearchFilter, newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <UserContext.Provider
      value={{
        getUsers,
        getDepartments,
        search,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
