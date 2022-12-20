import http from './http'

async function getClassList(ins_code, payload) {
  return await http.get(
    `/api/v1/management/operation/class?ins_code=${ins_code}&current_page=${payload.currentPage}${payload.showCount}${payload.cond}${payload.search}${payload.tchIdx}`
  )
}

async function getClassDetail(csm_idx, ins_code) {
  return await http.get(
    `/api/v1/management/operation/class/${csm_idx}?ins_code=${ins_code}`
  )
}

const apiClassManagement = {
  getClassList,
  getClassDetail,
}

export default apiClassManagement
