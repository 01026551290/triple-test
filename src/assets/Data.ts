import dayjs from "dayjs";
import IOS_LOGO from '../assets/img/badge-apple4x.png'
import PLAY_STORE_LOGO from '../assets/img/play-store2x.png'

export interface AwardType {
    IMAGE_URL: string
    TITLE: string
    CONTENT: string
}

export interface Metric {
    NUMBER: number
    FIRST_TEXT: string
    SECOND_TRAVEL: string
}

interface LogoInfo {
    BENCHMARK: string
}

const getDay = (format: string) => {
    switch (format) {
        case 'year':
            return dayjs().year()
        case 'month':
            return dayjs().month()
    }
}

export const LOGO_BENCHMARK: LogoInfo = {
    BENCHMARK: getDay('year') + '년 ' + getDay('month') + '월 기준'
}

export const METRIC_ITEMS: Metric[] = [
    { NUMBER: 700, FIRST_TEXT: '만 명의', SECOND_TRAVEL: '여행자' },
    { NUMBER: 100, FIRST_TEXT: '만 개의', SECOND_TRAVEL: '여행 리뷰' },
    { NUMBER: 400, FIRST_TEXT: '만 개의', SECOND_TRAVEL: '여행 일정' },
]

export const AWARD_ITEMS: AwardType[] = [
    {
        IMAGE_URL: PLAY_STORE_LOGO,
        TITLE: getDay('year') + ' 구글 플레이스토어',
        CONTENT: '올해의 앱 최우수상 수상',
    },
    {
        IMAGE_URL: IOS_LOGO,
        TITLE: getDay('year') + ' 애플 앱스토어',
        CONTENT: '오늘의 여행앱 선정',
    },
]

