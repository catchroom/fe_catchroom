import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}\
&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

const KakaoLoginButton = () => {
  return (
    <Link href={loginUri} rel="noopener noreferrer">
      <Image
        src="/kakao_login_medium_wide.png"
        alt="카카오 이미지"
        width={210}
        height={100}
      />
    </Link>
  );
};

export default KakaoLoginButton;

// import React from 'react';
// import KakaoLogin from 'react-kakao-login';

// const KakaoLoginButton = () => {
//   const kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_KEY || '';
//   // console.log(kakaoClientId);

//   const kakaoOnSuccess = async (data: any) => {
//     console.log(data);
//     // const idToken = data.response.access_token;
//   };
//   const kakaoOnFailure = (error: any) => {
//     console.log(error);
//   };

//   return (
//     <>
//       <KakaoLogin
//         token={kakaoClientId}
//         onSuccess={kakaoOnSuccess}
//         onFail={kakaoOnFailure}
//       />
//     </>
//   );
// };

// export default KakaoLoginButton;
