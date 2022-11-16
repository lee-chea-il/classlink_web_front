<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalTaskView"
      class="modal modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="제출 현황" @close="$emit('close')" />
          <div class="modal-body">
            <div class="tab-content depth03 ac_manage_notice">
              <div class="tab-pane active">
                <div class="title_area row">
                  <span class="notice_tit">제목</span>
                  <span class="notice_title">{{ homeWork.title }}</span>
                  <span class="notice_day02">{{ homeWork.created_at }}</span>
                  <span class="notice_writer">{{ homeWork.writer }}</span>
                </div>
                <!-- 검색 영역 -->
                <div class="search_section">
                  <div class="left_area">
                    <div class="dropdown form-inline">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        정렬
                      </button>
                      <div class="dropdown-menu">
                        <!-- <a class="dropdown-item" href="#">최신순</a> -->
                        <a class="dropdown-item" href="#">이름순</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.검색 영역 -->
                <!-- 테이블 영역 -->
                <!-- [개발참조] 데이터 없을 경우 -->
                <div v-if="submissionList.length === 0" class="page_nodata">
                  등록된 공지사항이 없습니다.
                </div>
                <div v-else class="table_section">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkAll"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkAll"
                            ></label>
                          </div>
                        </th>
                        <th>학년</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>완강률(%)</th>
                        <th>제출 시각</th>
                        <th>제출 파일</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody v-for="(item, idx) in submissionList" :key="idx">
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk01"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk01"
                            ></label>
                          </div>
                        </td>
                        <td>{{ item.grade }}</td>
                        <td>{{ item.student_name }}</td>
                        <td>{{ item.student_phone }}</td>
                        <td>{{ item.progress }}</td>
                        <td>{{ item.submission_time }}</td>
                        <td>
                          <div class="task_file">
                            {{ item.submission_file }}
                          </div>
                        </td>
                        <td>
                          <button
                            id="btnExpand"
                            class="btn icons_arrow_dn btn_expand"
                            @click="onClickExpandBtn(idx)"
                          ></button>
                        </td>
                      </tr>
                      <!-- 상세 tr [개발참조] 공지사항 상세 TR 펼치고 접기 -->
                      <tr
                        v-show="idxArray.includes(idx)"
                        :id="`expand_${idx}`"
                        :key="idx"
                        class="tr_expand"
                        style="display: none"
                      >
                        <td></td>
                        <td class="td_expand" colspan="8">
                          <div class="file_info">
                            <span class="file_icon"></span>
                            일반 첨부파일 1개(10KB)
                            <span class="save">모두 저장</span>
                          </div>
                          <div class="file_name">
                            {{ item.submission_file }}
                          </div>
                          <div class="notice_contents">
                            {{ item.contents }}
                          </div>
                        </td>
                      </tr>
                      <!-- /.상세 tr -->
                    </tbody>
                  </table>
                </div>
                <!-- /.테이블 영역 -->
                <!-- 페이징 영역 -->
                <div class="pagination_section">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <span class="previous"></span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link active" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <span class="next"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- /.페이징 영역 -->
              </div>
            </div>
          </div>
          <!-- //container -->
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import ModalHeader from '@/components/common/ModalHeader.vue'
export default {
  name: 'SubmissionStatusModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    homeWork: {
      type: Object,
      default: () => {},
    },
    submissionList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      idxArray: [],
    }
  },
  methods: {
    onClickExpandBtn(idx) {
      if (this.idxArray.includes(idx)) {
        for (let i = 0; i < this.idxArray.length; i++) {
          if (this.idxArray[i] === idx) {
            this.idxArray.splice(i, 1)
          }
        }
      } else {
        this.idxArray.push(idx)
      }
      console.log(this.idxArray)
    },
  },
}
</script>
<style scoped>
.table tbody + tbody {
  border-top: 0;
}
.expand-detail {
  display: '';
}
</style>
