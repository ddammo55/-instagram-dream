import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUserByUsername } from '@/service/user';
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // 사용자에  대한 정보를 가져온다.
    // 헤더에 있는 쿠기를 파싱해서 가져온다.
    // 사용자 이름, 이메일, 프로필 사진 등등
    // session?  :  ?는 옵셔널이다. 세션이 없을 수도 있기 때문에
    const session = await getServerSession(authOptions)
    const user = session?.user;
    //console.log(user);
    if(!user) {
        return new Response('Authentication Error', { status: 401 });
    }
  return getUserByUsername(user.username).then((data) => 
    NextResponse.json(data)
  );
}
