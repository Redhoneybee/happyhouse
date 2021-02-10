interface CNP_CD_INT {
    code: number;
    desc: string;
}

interface PAN_SS_CODE {
    code: string;
    desc: string;
}

export const CNP_CD_LIST: CNP_CD_INT[] = [
    {
        code: 11,
        desc: "서울특별시"
    },
    {
        code: 26,
        desc: "부산광역시"
    },
    {
        code: 27,
        desc: "대구광역시"
    },
    {
        code: 28,
        desc: "인천광역시"
    },
    {
        code: 29,
        desc: "광주광역시"
    },
    {
        code: 30,
        desc: "대전광역시"
    },
    {
        code: 31,
        desc: "울산광역시"
    },
    {
        code: 36110,
        desc: "세종특별자치시"
    },
    {
        code: 41,
        desc: "경기도"
    },
    {
        code: 42,
        desc: "강원도"
    },
    {
        code: 43,
        desc: "충청북도"
    },
    {
        code: 44,
        desc: "충청남도"
    },
    {
        code: 45,
        desc: "전라북도"
    },
    {
        code: 46,
        desc: "전라남도"
    },
    {
        code: 47,
        desc: "경상북도"
    },
    {
        code: 48,
        desc: "경상남도"
    },
    {
        code: 50,
        desc: "제주특별자치도"
    }
];

export const PAN_SS_LIST: PAN_SS_CODE[] = [
    {
        code: "공고중",
        desc: "공고중"
    },
    {
        code: "접수중",
        desc: "접수중"
    },
    {
        code: "접수마감",
        desc: "접수마감"
    },
    {
        code: "상담요청",
        desc: "상담요청"
    },
    {
        code: "정정공고중",
        desc: "정정공고중"
    }
];