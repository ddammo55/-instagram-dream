import { StringDecoder } from "string_decoder";
import { client } from "./sanity";


type OAuthUser = {
    id : string;
    email : string;
    name : string;
    username : string;
    image?: string | null;
}

//사용자 추가
export async  function addUser({id, username, email, name, image}: OAuthUser)  {
    return client.createIfNotExists({
        _id: id,
        _type: 'user',
        username,
        email,
        image,
        name,
        following: [],
        followers: [],
        bookmarks: [],
});
}

//사용자 정보 가져오기
//client = sanity다
//데이터 읽어올때는 fetch를 사용한다.
//fetch([데이터가져오기쿼리GROQ])
export async function getUserByUsername(username : String) {
    return client.fetch(
        `*[_type == "user" && username == "${username}"][0]{
            ...,
            "id" : _id,
            following[]->{username, image},
            followers[]->{username, image},
            "bookmarks" : bookmarks[]-> _id
        }`
    )
}