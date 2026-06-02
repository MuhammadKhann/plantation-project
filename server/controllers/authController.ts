import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import User from '../models/User';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d',
  });
};

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { firstName, lastName, email, password, location } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
       res.status(400).json({ message: 'User already exists' });
       return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      passwordHash,
      location,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        email: user.email,
        token: generateToken(user.id),
      });
      return;
    } else {
      res.status(400).json({ message: 'Invalid user data' });
      return;
    }
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      res.json({
        _id: user.id,
        firstName: user.firstName,
        email: user.email,
        token: generateToken(user.id),
      });
      return;
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
  } catch (error) {
    next(error);
  }
};
