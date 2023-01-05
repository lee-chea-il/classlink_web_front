<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalTaskDetail"
      class="modal ac_manage_note modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">제출 현황</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="tab-content ac_manage_notice">
              <div class="tab-pane active">
                <div class="title_area row">
                  <span class="notice_tit">제목</span>
                  <span class="notice_title">{{ task.hwb_title }}</span>
                  <span class="notice_day02">{{
                    task.hwb_registration_date.substr(0, 10)
                  }}</span>
                  <span class="notice_writer">{{ task.mem_name }} 선생님</span>
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
                        {{ submissionFlag ? '이름순' : '정렬' }}
                      </button>
                      <div class="dropdown-menu">
                        <!-- <a class="dropdown-item" href="#">최신순</a> -->
                        <a
                          class="dropdown-item"
                          @click="$emit('click-range')"
                          >{{ !submissionFlag ? '이름순' : '정렬' }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.검색 영역 -->
                <!-- 테이블 영역 -->
                <!-- [개발참조] 데이터 없을 경우 -->
                <div v-if="submissionList.length === 0" class="page_nodata">
                  제출한 과제가 없습니다.
                </div>
                <div v-else class="table_section">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
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
                        <td></td>
                        <td>{{ item.std_year }}</td>
                        <td>{{ item.mem_name }}</td>
                        <td>{{ item.mem_phone }}</td>
                        <td>{{ item.hbs_stubbornness }}</td>
                        <td>{{ item.hbs_registration_date }}</td>
                        <td>
                          <div class="task_file">
                            {{ item.fileList }}
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
                            {{ item.fileList }}
                          </div>
                          <div class="notice_contents">
                            {{ item.hbs_content }}
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
                      <li class="page-item cursor">
                        <a
                          class="page-link"
                          @click="$emit('click-direction', 'minus')"
                        >
                          <span class="previous"></span>
                        </a>
                      </li>
                      <li
                        v-for="(item, idx) in endPageNumber"
                        :key="idx"
                        class="page-item cursor"
                      >
                        <a
                          class="page-link"
                          :class="item === currentPage ? 'active' : ''"
                          @click="$emit('click-page', item)"
                          >{{ item }}</a
                        >
                      </li>
                      <li class="page-item cursor">
                        <a
                          class="page-link"
                          @click="$emit('click-direction', 'plus')"
                        >
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
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
// import ModalHeader from '@/components/common/ModalHeader.vue'
export default {
  name: 'SubmissionStatusModal',
  // components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    submissionList: {
      type: Array,
      default: () => [],
    },
    task: {
      type: Object,
      default: () => {},
    },
    submissionFlag: {
      type: Boolean,
      default: false,
    },
    endPageNumber: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
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
.modal {
  overflow-y: auto !important;
}
/* .scroll {
  overflow-y: auto !important;
} */
.modal-body {
  /* overflow-y: scroll; */
  height: 100% !important;
  min-height: 110px;
  max-height: 850px;
}
.cursor {
  cursor: pointer;
}
</style>
