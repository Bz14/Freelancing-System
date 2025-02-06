import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserRepository from "../repository/userRepository";
import dotenv from "dotenv";
import { IUser } from "../interfaces/authInterface";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
dotenv.config();

const userRepository = new UserRepository();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: `${process.env.BACKEND_URL}/api/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user: any = await userRepository.FindUserByGoogleId(profile.id);
        if (user) {
          return done(null, user);
        }
        user = await userRepository.CreateUser(
          profile.displayName,
          profile.emails ? profile.emails[0].value : "",
          "",
          "",
          new Date(),
          true,
          new Date(),
          new Date(),
          false,
          profile.id,
          profile.photos ? profile.photos[0].value : ""
        );

        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);

        return done(null, { user, accessToken, refreshToken });
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((data: any, done) => {
  done(null, data);
});

passport.deserializeUser((data: any, done) => {
  done(null, data);
});

export default passport;
