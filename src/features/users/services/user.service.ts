import { AxiosError } from "axios";
import axiosInstance from "../../../shared/api/axios";
import type { GetUsersResponse, User } from "../types/user.types";
import toast from "react-hot-toast";

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await axiosInstance.get<GetUsersResponse>('/?results=50');
        return response.data.results.map((user) => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            picture: user.picture.large
        }))
    } catch (error:unknown) {
        console.error('Error fetching users:', error);
        if(error instanceof AxiosError) {
            toast.error(`Failed to fetch users: ${error.message}`);
        }
        throw error;
    }
}