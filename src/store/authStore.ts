import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  tempUserData: Partial<User> | null;
  setTempUserData: (data: Partial<User>) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: Omit<User, 'id'>) => Promise<void>;
}

// In a real app, this would be handled by a backend
const USERS: Record<string, { password: string; userData: User }> = {};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  tempUserData: null,
  setTempUserData: (data) => set({ tempUserData: data }),
  login: async (username, password) => {
    const userRecord = USERS[username];
    if (!userRecord || userRecord.password !== password) {
      throw new Error('Invalid credentials');
    }
    set({ user: userRecord.userData, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false, tempUserData: null });
  },
  register: async (userData) => {
    const newUser = { ...userData, id: Math.random().toString() };
    USERS[userData.username] = {
      password: userData.password as string,
      userData: newUser,
    };
    set({ user: newUser, isAuthenticated: true, tempUserData: null });
  },
}));