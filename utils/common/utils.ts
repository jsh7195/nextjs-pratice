import { AxiosError } from "axios";
import { Cookies } from "react-cookie";

/**
 callback 이 필요없는 alert
 기존 window alert override
 */
//  window.alert = (content: string) =>
//  _Alert({
//      content,
//  });

// export const _alert = (content: string, callback?: any) =>
//  _Alert({
//      content,
//      callback,
//  });

// export const _confirm = (content?: string | undefined, callback?: any) => {
//  _Confirm({
//      content,
//      callback,
//  });
// };

const cookies = new Cookies("authorization");
export const setCookies = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookies = (name: string) => {
  return cookies.get(name);
};

// 해당파일의 확장자에 따라 타입코드로 리턴
export const getExtendsCd = (file: File) => {
  const FILE_TYP_CD_IMGS = ["jpg", "jpeg", "png"]; // 이미지
  const FILE_TYP_CD_DOCS = ["pdf"]; // 문서
  const FILE_TYP_CD_VIDS = ["mp4"]; // 영상
  const FILE_TYP_CD_ETCS = ["apk"]; // 기타

  let fileType = file.type;
  if (!fileType) {
    const sp = file.name.split(".");
    if (sp.length > 1) {
      fileType = sp[sp.length - 1];
    } else {
      alert("파일 확장자 정보가 존재하지 않습니다.");
    }
  }

  // TODO: ServiceConstants 에 확장자 코드 정의 필요
  if (fileType.includes("image")) {
    //return ServiceConstants.FILE_TYP_CD_IMG;
  } else if (fileType.includes("pdf")) {
    //return ServiceConstants.FILE_TYP_CD_DOC;
  } else if (fileType.includes("video")) {
    //return ServiceConstants.FILE_TYP_CD_VID;
  } else if (
    fileType.includes("vnd.android.package-archive") ||
    fileType.includes("ipa") ||
    fileType.includes("plist")
  ) {
    //return ServiceConstants.FILE_TYP_CD_ETC;
  }
};
