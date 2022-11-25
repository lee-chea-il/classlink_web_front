// URL 형식 체크 정규식
export const urlRegex = /^(http(s)?:\/\/)([^\/]*)(\.)(com|net|kr|my|shop)(\/)/gi

// 유튜브 형식 체크 정규식
export const youtubeRegex =
  /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g

// 순환구조 체크 및 변경
export const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

// 순환구조를 json형식으로 return
export const jsonItem = (item) => {
  return JSON.parse(JSON.stringify(item, getCircularReplacer()))
}

// 새로운 배열 return
export const setNewArray = (item) => {
  return Array.from(new Set(item))
}

// 깊은 복사
export const deepCopy = (item) => {
  return JSON.parse(JSON.stringify(item))
}
