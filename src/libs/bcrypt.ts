import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (passwordPlaintext: string): Promise<string> => {
    return await bcrypt.hash(passwordPlaintext, saltRounds);
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
}