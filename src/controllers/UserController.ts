import { Request, Response } from 'express';
import UserService from '../services/UserService';

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const user = await UserService.registerUser({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
  
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await UserService.loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    const err = error as Error;
    res.status(401).json({ message: err.message });
  }
};
