import { getUsers } from "../services/user.service";
import {useState} from 'react';
import type{ User } from "../types/user.types";
import { userRepository } from "../repository/user.repository";
import toast from "react-hot-toast";


export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);
  


    const loadUsers = async () => {
        
        setLoading(true);
        try {
            const persistedUsers = await userRepository.getPersistedUsers();
            if(persistedUsers.length > 0) {
                setUsers(persistedUsers);
                toast.success('Loaded users from local storage');
            }else{
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
                await userRepository.savePersistedUsers(fetchedUsers);
                toast.success('Fetched users from API and saved to local storage');
                
            }

        } catch (error) {
            console.error('Error loading users:', error);
            toast.error('Failed to load users. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    const refreshUsers = async () => {
        setLoading(true);
        setRefreshing(true);
        try {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
            await userRepository.clearUsers();
            await userRepository.savePersistedUsers(fetchedUsers);
            toast.success('Users refreshed successfully');
        } catch(error: unknown) {
            console.error('Error refreshing users:', error);
            toast.error('Failed to refresh users. Please try again later.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }

    const removeUser = async (id: string) => {
        try {
            await userRepository.removePersistedUsers(id);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
            toast.success('User removed successfully');
        } catch (error) {
            console.error('Error removing user:', error);
            toast.error('Failed to remove user. Please try again later.');
        }
    }
   
    return { users, loading, refreshing, loadUsers, refreshUsers, removeUser };
}