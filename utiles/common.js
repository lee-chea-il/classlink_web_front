import _ from 'lodash'

// URL 형식 체크 정규식
export const urlRegex = /^(http(s)?:\/\/)([^\/]*)(\.)(com|net|kr|my|shop)(\/)/gi

// 유튜브 형식 체크 정규식
export const youtubeRegex =
  /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g

// 새로운 배열 return
export const setNewArray = (item) => {
  return Array.from(new Set(item))
}

// 깊은 복사
export const deepCopy = (item) => {
  return _.cloneDeep(item)
}

// 콘솔 로그
export const log = console.log
