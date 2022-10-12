import React from "react";

const initialState = {
  inputs: {
    title: "",
    location: "",
    visitDate: "",
    member: "",
    discription: "",
    station: "모집중",
  },
  users: [
    {
      id: 1,
      no: 1,
      title: "지리산 가실 분",
      discription: "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non",
      location: "Phú Yên",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      member: 2,
      station: "모집중",
    },
    {
      id: 1,
      no: 0,
      title: "북한산 가실 분",
      discription:
        "Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
      location: "Heredia",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      member: 2,
      station: "모집완료",
    },
    {
      no: 9,
      title: "북한산 가실 분",
      discription:
        "mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus",
      location: "Biobío",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      member: 2,
      station: "모집중",
    },
    {
      id: 2,
      no: 1,
      title: "태백산 가실 분",
      discription:
        "sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum",
      location: "Ulster",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      member: 2,
      station: "모집중",
    },
    {
      id: 3,
      no: 0,
      title: "북한산 다녀오면서 이만큼 주웠어요",
      location: "북한산 | 서울특별시",
      discription:
        "sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum",
      station: "클린후기",
    },
  ],
};

export default initialState;
