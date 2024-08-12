import bcrypt from "bcrypt";

// Função para criar o hash da senha
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Número de rounds para gerar o salt
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Função para comparar a senha fornecida com o hash armazenado
export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
