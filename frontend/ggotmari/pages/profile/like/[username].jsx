import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProfileInfo from "../../../components/organisms/profile/ProfileInfo";
import ProfileNavBar from "../../../components/organisms/profile/ProfileNavBar";
import LikeImage from "../../../components/atoms/profile/LikeImage";
import { getUser } from "../../../api/profile.js";
import noFlower from "../../../assets/profile/collection/noFlowerImg.jpg";

export default function Like() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    status: "",
    message: "",
    isMe: "",
    user: {
      userName: "",
      followingCount: "",
      followerCount: "",
      userImage: "",
      userBirthday: "",
      userSex: "",
      isFollow: "",
    },
    articles: [],
    likeFlowers: [
      {
        tag: "",
        flowers: [
          {
            flowerImage: "",
            subjectId: "",
            kindId: "",
            kindName: "",
          },
        ],
      },
    ],
    likeArticles: [
      {
        articleId: "",
        articleImage: "",
        articleTitle: "",
        userName: "",
        likes: "",
      },
    ],
  });

  const success = (res) => {
    setUserInfo(res.data);
  };
  const fail = (err) => console.log(err);
  // 서버 통신 짤 코드

  const getInfo = (username) => {
    // console.log(username);
    getUser(username, success, fail);
  };

  // console.log(userInfo.likeArticles);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const username = window.location.pathname.substring(14);
      getInfo(username);
    } else {
      alert("로그인이 필요한 서비스입니다.");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <div className="profile">
        <ProfileInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        <ProfileNavBar />
        {/* 하단 */}
      </div>
      <div className="content grid grid-cols-3 mt-3 mb-14">
        {userInfo.likeArticles.length > 0 ? (
          userInfo.likeArticles.map((item, index) => {
            return (
              <LikeImage
                key={index}
                articleId={item.articleId}
                articleImage={item.articleImage}
                userName={item.userName}
                likes={item.likes}
                articleTitle={item.articleTitle}
              />
            );
          })
        ) : (
          <div className="col-span-3 flex justify-center">
            <div className="content-box w-full">
              <div className="img-box flex justify-center">
                <img src={noFlower.src} alt="조회할 꽃이 없음" />
              </div>
              <div className="text-box flex justify-center font-gangwon text-font4">
                <span>좋아요를 누른 꽃 이야기가 없습니다</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
