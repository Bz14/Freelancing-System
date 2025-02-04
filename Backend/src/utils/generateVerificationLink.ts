import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const generateVerificationToken = async () => {
  try {
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      crypto.randomBytes(16, (err, buffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer);
        }
      });
    });
    return buffer.toString("hex");
  } catch (error: Error | any) {
    throw new Error("Error generating verification token: " + error.message);
  }
};

const generateVerificationLink = (token: string, email: string) => {
  const verificationLink = `${process.env.ServerHost}/api/v1/auth/verify?token=${token}&email=${email}`;
  return verificationLink;
};

export { generateVerificationToken, generateVerificationLink };
