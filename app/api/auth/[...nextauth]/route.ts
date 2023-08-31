import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

{/*@ts-expect-error Server Component*/}
const authOptions: NextAuthOptions =  {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    // 로그인 성공시 추가로 실행할 함수
    async signIn({user: {id, name, image, email}}) {
      if(!email){
        return false; // 로그인 실패
      }
      //console.log(user);
      addUser({id, name: name || '', image, email, username:email.split('@')[0]});
      return true; // 로그인 성공 
    },
    // 로그인 성공시 세션에 추가할 정보
    async session({ session }) {
      //console.log(session);
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
  // 로그인 성공시 이동할 페이지
  pages: {
    signIn: '/auth/signin',
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions  };
