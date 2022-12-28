<template>
  <div>
    <!--  3Depth -->
    <NavBox
      title1="선생님관리"
      title2="학생 관리"
      title3="반 관리"
      title4="시험관리"
      url1="/management/operation/teachermanagement"
      url2="/management/operation/studentmanagement"
      url3="/management/operation/classmanagement"
      url4="/management/operation/exammanagement"
    />

    <div class="tab-content depth03 ac_manage_cls">
      <!-- [개발참조] 등록된 학생이 없는 경우 -->
      <div v-if="classList.length === 0" class="nothing_txt">
        <div class="txt">
          등록된 반이 없습니다.<br />
          먼저 반을 등록해주세요.
        </div>
        <div class="btn_area">
          <button class="btn btn_crud_point" @click="onOpenClassRegist()">
            반 만들기
          </button>
        </div>
      </div>
      <!-- /.등록된 학생이 없는 경우 -->

      <div v-else class="tab-pane active">
        <!-- 컨트롤 버튼 영역 -->
        <div class="search_section">
          <div class="left_area">
            <div class="btn btn_crud_default" @click="onClickClassCopy">
              복사
            </div>
            <button class="btn btn_crud_default" @click="onClickClassMove">
              이동
            </button>
            <button class="btn btn_crud_danger" @click="onClickClassDelete">
              삭제
            </button>
            <!-- [개발참조]toasts 메세지 '반을 선택해주세요.'' : 아무런 반을 체크하지 않고 복사를 누르면 -->
          </div>
          <div class="right_area">
            <button class="btn btn_crud_point" @click="onOpenClassRegist()">
              반 만들기
            </button>
            <button class="btn btn_crud_default" @click="onClickUnallocation">
              배정 X
            </button>
          </div>
        </div>
        <!-- /.컨트롤 버튼 영역 -->
        <!-- 검색 영역 -->
        <div class="search_section">
          <div class="left_area">
            <div class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {{ sortTeacherSelect }}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item cursor" @click="onChangeTeacherSort">
                  선생님 전체
                </a>
                <a
                  v-for="(item, idx) in teacherList"
                  :key="idx"
                  class="dropdown-item cursor"
                  @click="onChangeTeacherSort($event, item.tch_idx)"
                >
                  {{ item.mem_name }} 선생님
                </a>
              </div>
            </div>
            <div class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {{ sortNumberSelect }}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item cursor" @click="onChangeNumberSort"
                  >10개씩 보기</a
                >
                <a class="dropdown-item cursor" @click="onChangeNumberSort"
                  >100개씩 보기</a
                >
                <a class="dropdown-item cursor" @click="onChangeNumberSort"
                  >200개씩 보기</a
                >
              </div>
            </div>
          </div>
          <div class="right_area">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                id="radio01"
                type="radio"
                name="radio00"
                class="custom-control-input"
                checked
                @input="searchRadio(true)"
              />
              <label class="custom-control-label" for="radio01">반</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                id="radio02"
                type="radio"
                name="radio00"
                class="custom-control-input"
                @input="searchRadio(false)"
              />
              <label class="custom-control-label" for="radio02">이름</label>
              <!-- <label class="custom-control-label" for="radio02">학생</label> -->
            </div>
            <div class="input-group input-search form-inline">
              <input
                v-model="searchText"
                type="text"
                placeholder="반 이름 검색"
                class="form-control"
                @keyup.enter="getClassList"
              />
              <div class="input-group-append" @click="getClassList">
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
          </div>
        </div>
        <!-- 검색 영역 -->
        <!-- 테이블 영역 -->
        <div class="table_section">
          <table class="table">
            <!-- <colgroup>
								<col width="80">
								<col>
								<col>
								<col>
								<col width="80">
								<col width="80">
								<col width="80">
							</colgroup> -->
            <thead>
              <tr>
                <th>
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      id="chkAll"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="allCheck"
                      @input="onClickClassAllCheck"
                    />
                    <label class="custom-control-label" for="chkAll"></label>
                  </div>
                </th>
                <th>반</th>
                <th>학생 수</th>
                <th>담당 선생님</th>
                <th>수정</th>
                <th>상세</th>
                <th>이동</th>
              </tr>
            </thead>
            <draggable
              v-model="classList"
              class="drag-box"
              tag="tbody"
              animation="200"
              draggable=".classList"
              handle=".icons_move_off"
              @end="onDrop"
            >
              <tr v-for="(item, idx) in classList" :key="idx" class="classList">
                <td>
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      :id="idx"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="checkList.includes(item.csm_idx)"
                      @input="onClickCheckBox(item.csm_idx)"
                    />
                    <label class="custom-control-label" :for="idx"></label>
                  </div>
                </td>
                <td class="classroom">{{ item.csm_name }}</td>
                <td>{{ item.std_num }}</td>
                <td>{{ item.mem_name }} 선생님</td>
                <td>
                  <i
                    class="btn icons_pencil_off"
                    @click="onOpenClassModify(item)"
                  ></i>
                </td>
                <td>
                  <i
                    class="btn icons_zoom_off"
                    @click="getClassDetail(item.csm_idx, item.csm_name)"
                  ></i>
                </td>
                <td>
                  <i class="btn icons_move_off"></i>
                </td>
              </tr>
            </draggable>
          </table>
        </div>
        <!-- /.테이블 영역 -->
        <!-- 페이징 영역 -->
        <div class="pagination_section">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link cursor" @click="onClickPrevPage">
                  <span class="previous"></span>
                </a>
              </li>
              <li v-for="(item, idx) in endPage" :key="idx" class="page-item">
                <a
                  class="page-link cursor"
                  :class="{ active: currentPage === item }"
                  @click="onClickCurrentPage(item)"
                  >{{ item }}</a
                >
              </li>
              <li class="page-item">
                <a class="page-link cursor" @click="onClickNextPage">
                  <span class="next"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /.페이징 영역 -->
      </div>
    </div>

    <!-- 반관리-반등록,수정 - 팝업 L -->
    <ClassModifyModal
      :show="openClassModify"
      :teacherList="teacherList"
      :studentList="studentList"
      :selectedTeacher="selectedTeacher"
      :selectedStudentAll="selectedStudentAll"
      :selectedStudentList="selectedStudentList"
      :modalModifyDetail="modalModifyDetail"
      :modalModifyClassDetail="modalModifyClassDetail"
      :modalModifySelectDetail="modalModifySelectDetail"
      :studentTab="studentTab"
      :className.sync="className"
      :classTeacherSearch.sync="classTeacherSearch"
      :classStudentSearch.sync="classStudentSearch"
      @add-selected-teacher="onClickAddSelectedTeacher"
      @delete-selected-teacher="onClickDeleteSelectedTeacher"
      @add-selected-student-all="onClickAddSelectedStudentAll"
      @delete-selected-student-all="onClickDeleteSelectedStudentAll"
      @add-selected-student="onClickAddSelectedStudent"
      @delete-selected-student="onClickDeleteSelectedStudent"
      @add-banlist="onClickAddSelectedBanListAll"
      @close="onCloseClassModify"
      @modify-detail="onClickModalModifyDetail"
      @modify-class-detail="onClickModalModifyClassDetail"
      @modify-selected-detail="onClickModalModifySelectedDetail"
      @move-student-tab="onMoveStudentTab"
      @search-teacher="getSearchTeacher"
      @init-teacher="setInitSearchTeacher"
      @search-student="getSearchStudent"
      @init-student="setInitSearchStudent"
      @upload="postRegistClass"
      @save="putUpdClass"
    />

    <!-- [개발참조] : 반 상세 모달에서 뜨는 2번째 팝업(학생상세 및 더보기 메뉴의 모달 팝업)은 겹치는 팝업이므로 class="double" 추가 필요 -->
    <!-- 반 상세 팝업 (팝업 L) -->
    <ClassDetailModal
      :open="openClassDetailModal"
      :classInfo="classInfo"
      :studentInfo="studentInfo"
      :modalDetailMore="modalDetailMore"
      :studentInfoModalDesc="studentInfoModalDesc"
      :nickNameCheck="nickNameCheck"
      :familySearchText="familySearchText"
      :detailSearch.sync="detailSearch"
      :sortDetailChange="sortDetailChange"
      :sortCheckStd="sortCheckStd"
      :sortStatus="sortStatus"
      :onFilterCheckStdSort="onFilterCheckStdSort"
      :detailCurrentPage="detailCurrentPage"
      :detailEndPage="detailEndPage"
      :next="onClickDetailNextPage"
      :prev="onClickDetailPrevPage"
      @current="onClickDetailCurrentPage"
      @close-modal="onCloseClassDetailModal"
      @change-filter="onChangeDetailSort"
      @change-check="onChangeCheckStdSort"
      @change-status="onChangeStatusSort"
      @open="onOpenStudentInfoModalDesc"
      @close="onCloseStudentInfoModalDesc"
      @change-input="onChangeUpdateInput"
      @click-birthday="openDatePickerModalDesc"
      @click-lecturedate="openDatePickerLectureDateModalDesc"
      @click-identity="onClickIdentityBtn"
      @click-grade="onClickTypeGrade"
      @click-adult="onClickTypeAdult"
      @click-men="onClickGenderMen"
      @click-women="onClickGenderWomen"
      @click-statusTrue="onClickStatusTrue"
      @click-statusFalse="onClickStatusFalse"
      @click-stuStatusTrue="onClickStudentStatusTrue"
      @click-stuStatusFalse="onClickStudentStatusFalse"
      @select-grade="selectGrade"
      @click-profile="openUploadStudentImgModalDesc"
      @click-deleteFamily="onClickFamilyDeleteBtn"
      @change-familyInput="onChangeFamilySearchInput"
      @search-family="onClickSearchBtn"
      @open-detail="onClickOpenDetailMore"
      @search="onSearchFilterDetail"
    />

    <!-- 반관리-반이동 - 팝업 L -->
    <ClassMoveModal
      :show="openClassMove"
      :classList="modalMoveRightList"
      :selectClass="modalMoveLeftList"
      :checkList="checkList"
      :moveDetail="modalMoveDetail"
      :copy="modalMoveCopy"
      :leftCheckbox="selectedMoveModalLeftCheckbox"
      :moveClassCheckbox="selectedMoveToClassCheckbox"
      :rightCheckbox="selectedMoveModalRightCheckbox"
      :moveClassCheckboxRight="selectedMoveToClassCheckboxRight"
      :leftSearch.sync="modalMoveLeftSearch"
      :leftSort="modalMoveLeftSort"
      :rightSearch.sync="modalMoveRightSearch"
      :rightSort="modalMoveRightSort"
      :noAssignStudent="noAssignStudent"
      :unallocationSearch.sync="modalUnallocationSearch"
      :unallocationSort="modalUnallocationSort"
      :unallocationCheckbox="selectedUnallocationCheckbox"
      @close="onCloseClassMove"
      @open-detail="onClickOpenDetail"
      @move-student="putMoveClass"
      @move-unallocation-student="onUnallocationPutMoveClass"
      @move-unallocation="putMoveReverseClass"
      @copy-check="onClickCopyCheck"
      @student-list-check="onClickMoveModalLeftCheckbox"
      @move-class="onClickMoveToClass"
      @student-list-check-right="onClickMoveModalRightCheckbox"
      @move-class-right="onClickMoveToClassRight"
      @search-left="getMoveClassLeft"
      @sort-left="onClickModalMoveLeftSort"
      @search-right="getMoveClassRight"
      @sort-right="onClickModalMoveRightSort"
      @search-unallocation="onSearchUnallocation"
      @sort-unallocation="onClickModalUnallocationSort"
      @unallocation-check="onClickUnallocationCheckbox"
    />

    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
    <DeleteModal
      :open="deleteModalDesc.open"
      :title="deleteModalDesc.title"
      @delete="deleteClassList"
      @close="onCloseDeleteModalDesc"
    />

    <CustomSnackbar :show="openSnackbar.open" :message="message" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import NavBox from '@/components/operation/NavBox.vue'
import ClassModifyModal from '@/components/common/modal/operation/ClassModifyModal.vue'
import ClassDetailModal from '@/components/common/modal/operation/ClassDetailModal.vue'
import ClassMoveModal from '@/components/common/modal/operation/ClassMoveModal.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
import DeleteModal from '@/components/lecturecourse/DeletePlanModal.vue'
import CustomSnackbar from '@/components/common/CustomSnackbar.vue'
import { apiOperation } from '~/services'
export default {
  name: 'ClassManagement',
  components: {
    NavBox,
    ClassModifyModal,
    ClassDetailModal,
    ClassMoveModal,
    ModalDesc,
    DeleteModal,
    CustomSnackbar,
    draggable,
  },
  data() {
    return {
      studentInfoModalDesc: {
        open: false,
      },
      nickNameCheck: false,
      familySearchText: '',
      // 반 리스트
      classList: [],
      classInfo: [],
      studentInfo: {
        id: 0,
        identity: [],
        status: false,
        grade: '초1',
        grade_type: 0,
        class: [],
        name: '',
        nickname: '',
        family: [],
        account: '',
        phone: '',
        parent_phone: '',
        gender: 0,
        student_status: false,
        school: '',
        attendance_num: '',
        created_at: '',
        lecture_date: '',
        birthday: '',
        email: '',
        profile_image: '',
        lectureInfo: [],
      },
      studentTab: 0,

      teacherList: [],
      studentList: {},
      selectedTeacher: [],
      selectedStudentAll: [],
      selectedStudentList: [],

      // 왼쪽
      // 학생 선택
      selectedMoveModalLeftCheckbox: [],
      // 반 선택
      selectedMoveToClassCheckbox: [],
      // 오른쪽
      // 학생 선택
      selectedMoveModalRightCheckbox: [],
      // 반 선택
      selectedMoveToClassCheckboxRight: [],
      // 배정X 학생 선택
      selectedUnallocationCheckbox: [],

      // 정렬
      sortTeacherSelect: '선생님 전체',
      sortNumberSelect: '10개씩 보기',
      sortDetailChange: '최신 등록순',
      detailFilter: 1,
      sortCheckStd: null,
      sortStatus: true,

      // 상세 모달 더보기
      modalDetailMore: null,

      // 반 만들기/수정 반 학셍 학년, 반 상세
      modalModifyDetail: null,
      modalModifyClassDetail: null,
      modalModifySelectDetail: null,

      // 반 이동 펴기 버튼
      modalMoveDetail: null,

      // 반 이동 복사 여부
      modalMoveCopy: false,

      // 반 이동 왼족 리스트
      modalMoveLeftList: [],
      modalMoveLeftSearch: '',
      modalMoveLeftSort: true,
      // 반 이동 오른쪽 리스트
      modalMoveRightList: [],
      modalMoveRightSearch: '',
      modalMoveRightSort: true,
      // 배정X 학생 리스트
      noAssignStudent: {},
      modalUnallocationSearch: '',
      modalUnallocationSort: false,

      // 체크박스
      allCheck: false,
      checkList: [],

      // 모달
      openClassModify: {
        open: false,
        data: null,
      },
      openClassMove: {
        open: false,
        allocation: null,
      },
      openClassDetailModal: {
        open: false,
        class: '',
      },

      openSnackbar: {
        open: false,
      },
      message: '',

      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      deleteModalDesc: {
        open: false,
        title: '',
      },

      classListB: [],

      ins_code: this.$store.state.common.user.ins_code,
      fra_code: this.$store.state.common.user.fra_code,

      // 반 등록 반이름
      className: '',
      // 반 등록 반 선생님 검색
      classTeacherSearch: '',
      // 반 등록 반 학생 검색
      classStudentSearch: '',

      // 검색 반 이름 선택
      cond: true,
      // 상세
      csmIdx: null,
      // 선생님 선택
      tchIdx: 0,

      // 검색
      searchText: '',
      detailSearch: '',

      // 페이지네이션
      // 페이지 수
      endPage: 1,
      detailEndPage: 1,
      // 다음/이전
      next: false,
      prev: false,
      // 현재 페이지
      currentPage: 1,
      detailCurrentPage: 1,
      // 보여지는 개수
      showCount: 1,
    }
  },
  watch: {
    checkList: {
      handler() {
        console.log('checkList', this.checkList)
      },
      immediate: false,
    },
    showCount: {
      handler() {
        this.getClassList()
        this.currentPage = 1
      },
      immediate: false,
    },
    tchIdx: {
      handler() {
        this.getClassList()
      },
      immediate: false,
    },
    currentPage: {
      handler() {
        this.getClassList()
      },
      immediate: false,
    },

    detailFilter: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    sortStatus: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    detailCurrentPage: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },
    sortCheckStd: {
      handler() {
        this.onSearchFilterDetail()
      },
      immediate: false,
    },

    modalMoveLeftSort: {
      handler() {
        this.getMoveClassLeft()
      },
      immediate: false,
    },
    modalMoveRightSort: {
      handler() {
        this.getMoveClassRight()
      },
      immediate: false,
    },

    modalUnallocationSort: {
      handler() {
        this.onSearchUnallocation()
      },
      immediate: false,
    },
  },
  mounted() {
    this.getClassList()
    this.getSearchTeacher()
    this.getSearchStudent()
  },
  methods: {
    // 드래그 앤 드롭 기능
    onDrop(evt) {
      // item.list = list
      console.log(
        '이전',
        evt.oldDraggableIndex,
        this.classList[evt.oldDraggableIndex].csm_display_no
      )
      console.log('이후', evt.newDraggableIndex)
      this.getChangeOrder(
        this.classList[evt.oldDraggableIndex].csm_display_no,
        this.classList[evt.oldDraggableIndex].csm_idx,
        this.classList[evt.newDraggableIndex].csm_display_no
      )
    },

    // 반 리스트 api
    async getClassList() {
      const payload = {
        cond: this.cond === true ? '' : `&cond=${this.cond}`,
        current_page: this.currentPage,
        search: this.searchText === '' ? '' : `&search=${this.searchText}`,
        show_count: this.showCount === 1 ? '' : `&show_count=${this.showCount}`,
        tch_idx: this.tchIdx === 0 ? '' : `&tch_idx=${this.tchIdx}`,
      }

      await apiOperation
        .getClassList(this.ins_code, payload)
        .then(({ data: { data } }) => {
          this.classList = data.banList
          this.endPage = data.pageMaker.end_page
          this.next = data.pageMaker.next
          this.prev = data.pageMaker.prev
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 반 목록 이동
    async getChangeOrder(display, idx, update) {
      const payload = {
        csm_display_no: display,
        csm_idx: idx,
        update_order_no: update,
      }
      console.log(payload.update_order_no)
      if (
        this.cond === true &&
        this.searchText === '' &&
        this.showCount === 1 &&
        this.tchIdx === 0
      ) {
        await apiOperation
          .getChangeOrder(payload)
          .then(({ data: { data } }) => {
            console.log(data)
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 상세 api
    async getClassDetail(csm_idx, classroom) {
      this.onInitDetailFilterSearch()

      this.csmIdx = csm_idx
      const payload = {
        csm_idx: `&csm_idx=${this.csmIdx}`,
        ins_code: this.ins_code,
        search: this.detailSearch === '' ? '' : `&search=${this.detailSearch}`,
        filter: this.detailFilter === 1 ? '' : `&filter=${this.detailFilter}`,
        check_std:
          this.sortCheckStd === null ? '' : `&check_std=${this.sortCheckStd}`,
        status: this.sortStatus === true ? '' : `&status=${this.sortStatus}`,
        current_page:
          this.detailCurrentPage === 1
            ? ''
            : `&current_page=${this.detailCurrentPage}`,
      }

      await apiOperation
        .getClassDetail(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.modalDetailMore = null
          this.classInfo = data.dtoList

          this.detailEndPage = data.pageMaker.end_page
          this.openClassDetailModal.class = classroom
          this.onOpenClassDetailModal()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 상세모달 학생검색/필터 api
    async onSearchFilterDetail() {
      const payload = {
        csm_idx: this.csmIdx,
        ins_code: this.ins_code,
        search: this.detailSearch === '' ? '' : `&search=${this.detailSearch}`,
        filter: this.detailFilter === 1 ? '' : `&filter=${this.detailFilter}`,
        check_std:
          this.sortCheckStd === null ? '' : `&check_std=${this.sortCheckStd}`,
        status: this.sortStatus === true ? '' : `&status=${this.sortStatus}`,
        current_page:
          this.detailCurrentPage === 1
            ? ''
            : `&current_page=${this.detailCurrentPage}`,
      }

      await apiOperation
        .getClassDetail(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.modalDetailMore = null
          this.classInfo = data.dtoList
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 상세 필터/검색 값 초기화
    onInitDetailFilterSearch() {
      this.detailFilter = 1
      this.detailSearch = ''
      this.sortDetailChange = '최신 등록순'
      this.sortCheckStd = true
      this.sortStatus = true
      this.detailCurrentPage = 1
      this.openClassDetailModal.class = ''
    },

    // 반 등록
    // 반 선생님 검색 api
    async getSearchTeacher() {
      const payload = {
        ins_code: this.ins_code,
        search:
          this.classTeacherSearch === ''
            ? ''
            : `&search=${this.classTeacherSearch}`,
      }

      await apiOperation
        .getSearchTeacher(payload)
        .then(({ data: { data } }) => {
          // console.log(data)
          this.teacherList = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setInitSearchTeacher() {
      this.classTeacherSearch = ''
    },
    // 반 학생 검색 api
    async getSearchStudent() {
      const payload = {
        ins_code: this.ins_code,
        search:
          this.classStudentSearch === ''
            ? ''
            : `&search=${this.classStudentSearch}`,
      }

      await apiOperation
        .getSearchStudent(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.studentList = data
          console.log(this.studentList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setInitSearchStudent() {
      this.classStudentSearch = ''
    },
    // 반 등록하기 api
    async postRegistClass() {
      const selStudentList = []

      for (let i = 0; i < this.selectedStudentList.length; i++) {
        const student = {
          itm_idx: this.selectedStudentList[i].itm_idx,
          mem_idx: this.selectedStudentList[i].mem_idx,
          mem_name: this.selectedStudentList[i].mem_name,
          std_idx: this.selectedStudentList[i].std_idx,
        }
        selStudentList.push(student)
      }

      const payload = {
        csm_name: this.className,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        studentList: selStudentList,
        teacherList: this.selectedTeacher,
      }
      console.log(payload, selStudentList)

      if (
        payload.csm_name !== '' &&
        payload.studentList.length !== 0 &&
        payload.teacherList.length !== 0
      ) {
        await apiOperation
          .postRegistClass(payload)
          .then((res) => {
            console.log(res)
            this.openModalDesc('등록 성공', '반 등록을 성공했습니다.')
            this.onCloseClassModify()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.openModalDesc('등록 실패', '반을 작성해주세요.')
      }
    },
    // 반 수정하기 api
    async putUpdClass(csmIdx) {
      const selStudentList = []

      for (let i = 0; i < this.selectedStudentList.length; i++) {
        const student = {
          itm_idx: this.selectedStudentList[i].itm_idx,
          mem_idx: this.selectedStudentList[i].mem_idx,
          mem_name: this.selectedStudentList[i].mem_name,
          std_idx: this.selectedStudentList[i].std_idx,
        }
        selStudentList.push(student)
      }

      const payload = {
        choice_GradeList: [
          {
            std_num: 0,
            studentList: selStudentList,
          },
        ],
        csm_idx: csmIdx,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        teacherList: this.selectedTeacher,
      }
      console.log(payload)

      if (
        payload.choice_GradeList[0].studentList.length !== 0 &&
        payload.teacherList.length !== 0
      ) {
        await apiOperation
          .putUpdClass(payload)
          .then((res) => {
            console.log(res)
            this.openModalDesc('수정 성공', '반 수정을 성공했습니다.')
            this.onCloseClassModify()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 반 삭제 api
    async deleteClassList() {
      const payload = {
        data: {
          class_list: this.checkList,
          ins_code: this.ins_code,
        },
      }
      console.log('checkList', this.checkList)
      console.log(payload)

      await apiOperation
        .deleteClassList(payload)
        .then(() => {
          this.checkList = []
          this.onCloseDeleteModalDesc()
          this.getClassList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 반 복사 api
    async postClassCopy() {
      const postList = []
      console.log(
        'filter',
        this.classList.filter((item) =>
          item.csm_name.includes(
            this.classList.find((e) => e.csm_idx === this.checkList[0]).csm_name
          )
        )
      )

      for (let i = 0; i < this.checkList.length; i++) {
        const copyList = {
          copy_csm_idx: this.checkList[i],
          csm_name:
            this.classList.find((e) => e.csm_idx === this.checkList[i])
              .csm_name +
            `(${
              this.classList.filter((item) =>
                item.csm_name.includes(
                  this.classList.find((e) => e.csm_idx === this.checkList[i])
                    .csm_name
                )
              ).length
            })`,
        }
        postList.push(copyList)
      }
      console.log(postList)

      const payload = {
        copyBanList: postList,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        now_mem_idx: this.$store.state.common.user.mem_idx,
      }

      await apiOperation
        .postClassCopy(payload)
        .then((res) => {
          console.log(res)
          this.checkList = []
          this.allCheck = false
          this.getClassList()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 리스트 페이지네이션
    onClickNextPage() {
      if (this.currentPage >= this.endPage) {
        return false
      } else {
        this.currentPage = this.currentPage + 1
      }
    },
    onClickPrevPage() {
      if (this.currentPage <= 1) {
        return false
      } else {
        this.currentPage = this.currentPage - 1
      }
    },
    onClickCurrentPage(page) {
      this.currentPage = page
    },
    // 상세 페이지네이션
    onClickDetailNextPage() {
      if (this.detailCurrentPage >= this.detailEndPage) {
        return false
      } else {
        this.detailCurrentPage = this.detailCurrentPage + 1
      }
    },
    onClickDetailPrevPage() {
      if (this.detailCurrentPage <= 1) {
        return false
      } else {
        this.detailCurrentPage = this.detailCurrentPage - 1
      }
    },
    onClickDetailCurrentPage(page) {
      this.detailCurrentPage = page
    },

    // 검색 라디오 버튼
    searchRadio(radio) {
      this.searchText = ''
      this.cond = radio
    },

    onOpenClassDetailModal() {
      this.openClassDetailModal.open = true
    },
    onCloseClassDetailModal() {
      this.openClassDetailModal.open = false
    },

    // 스낵바
    onOpenSnackbar(text) {
      this.openSnackbar.open = true
      this.message = text
    },
    onCloseSnackbar() {
      this.openSnackbar.open = false
      this.message = ''
    },
    // 모달
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDesc.open = false
    },
    // 삭제모달
    openDeleteModalDesc(tit) {
      this.deleteModalDesc = {
        open: true,
        title: tit,
      }
    },
    onCloseDeleteModalDesc() {
      this.deleteModalDesc.open = false
    },

    // 반 만들기/수정 모달 열기
    onOpenClassRegist() {
      this.openClassModify.open = true
      this.openClassModify.data = null
    },
    async onOpenClassModify(item) {
      await apiOperation
        .getUpdClassList(item.csm_idx, this.ins_code)
        .then(({ data: { data } }) => {
          console.log('res', data, item)
          for (let i = 0; i < data.student_list.length; i++) {
            this.onClickAddSelectedStudent(
              data.student_list[i],
              data.student_list[i].std_year
            )
          }

          this.selectedTeacher = data.teacher_list
          this.selectedStudentList = data.student_list
          this.className = item.csm_name
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(item)
      this.openClassModify.open = true
      this.openClassModify.data = item
    },
    onCloseClassModify() {
      this.openClassModify.open = false
      this.openClassModify.data = null
      this.className = ''
      this.selectedTeacher = []
      this.selectedStudentAll = []
      this.selectedStudentList = []
    },

    // 반 이동 모달 열기
    onOpenClassMove(allocation) {
      this.openClassMove.open = true
      this.openClassMove.allocation = allocation
    },
    onCloseClassMove() {
      this.openClassMove.open = false
      this.modalMoveLeftList = []
      this.modalMoveRightList = []
      this.modalMoveLeftSearch = ''
      this.modalMoveLeftSort = true
      this.modalMoveRightSearch = ''
      this.modalMoveRightSort = true
      this.selectedMoveToClassCheckbox = []
      this.selectedMoveToClassCheckboxRight = []
      this.selectedMoveModalLeftCheckbox = []
      this.selectedMoveModalRightCheckbox = []
      this.modalMoveCopy = false
    },

    onClickOpenDetailMore(id) {
      console.log(id)
      if (this.modalDetailMore === id) {
        this.modalDetailMore = null
      } else {
        this.modalDetailMore = id
      }
    },

    // 체크박스
    onClickClassAllCheck() {
      if (this.allCheck) {
        this.checkList.splice(0, this.classList.length)
        this.allCheck = false
      } else {
        this.checkList.splice(0, this.classList.length)
        for (let i = 0; i < this.classList.length; i++) {
          this.checkList.push(this.classList[i].csm_idx)
        }
        this.allCheck = true
      }
    },
    onClickCheckBox(idx) {
      if (this.checkList.includes(idx)) {
        this.checkList = this.checkList.filter((item) => item !== idx)
        if (this.checkList.length !== this.classList.length) {
          this.allCheck = false
        }
      } else {
        this.checkList.push(idx)
        if (this.checkList.length === this.classList.length) {
          this.allCheck = true
        }
      }
    },

    // 배정X 버튼 클릭
    async onClickUnallocation() {
      const payload = {
        ins_code: this.ins_code,
        name_orderby: ``,
        search: ``,
        sort_check: '',
      }

      await apiOperation
        .getNoAssignStudent(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.noAssignStudent = data
        })
        .catch((err) => {
          console.log(err)
        })

      await apiOperation
        .getMoveClass(payload)
        .then(({ data: { data } }) => {
          this.modalMoveRightList = data
        })
        .catch((err) => {
          console.log(err)
        })

      this.onOpenClassMove(0)
    },
    // 배정X 학생 검색
    async onSearchUnallocation() {
      const payload = {
        ins_code: this.ins_code,
        search:
          this.modalUnallocationSearch === ''
            ? ''
            : `&search=${this.modalUnallocationSearch}`,
        sort_check: !this.modalUnallocationSort
          ? ''
          : `&sort_check=${this.modalUnallocationSort}`,
      }

      await apiOperation
        .getNoAssignStudent(payload)
        .then(({ data: { data } }) => {
          this.noAssignStudent = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 배정X 학생 정렬
    onClickModalUnallocationSort(sort) {
      this.modalUnallocationSort = sort
    },
    // 배정X로 이동
    async putMoveReverseClass() {
      const studentList = []

      for (let i = 0; i < this.selectedMoveModalRightCheckbox.length; i++) {
        const student = {
          csm_idx: this.selectedMoveModalRightCheckbox[i].csm_idx,
          fra_code: this.fra_code,
          ins_code: this.ins_code,
          itm_idx: this.selectedMoveModalRightCheckbox[i].itm_idx,
          mem_idx: this.selectedMoveModalRightCheckbox[i].mem_idx,
          std_idx: this.selectedMoveModalRightCheckbox[i].std_idx,
        }
        studentList.push(student)
      }

      const payload = {
        moveBanDataList: studentList,
      }

      console.log('sadfasdfag', payload, this.selectedMoveModalRightCheckbox)

      if (payload.moveBanDataList.length !== 0) {
        await apiOperation
          .putMoveReverseClass(payload)
          .then(({ data: { data } }) => {
            console.log(data)
            this.openModalDesc('이동 성공', '반 이동을 성공했습니다.')
            this.selectedMoveModalRightCheckbox = []
            this.onSearchUnallocation()
            this.getMoveClassRight()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.openModalDesc('이동 실패', '이동할 학생을 선택해주세요.')
      }
    },
    // 배정X 체크박스
    onClickUnallocationCheckbox(items) {
      if (
        this.selectedUnallocationCheckbox.find(
          (e) => e.mem_idx === items.mem_idx
        )?.mem_idx === items.mem_idx
      ) {
        this.selectedUnallocationCheckbox =
          this.selectedUnallocationCheckbox.filter(
            (item) => item.mem_idx === items.mem_idx
          )
      } else {
        const payload = {
          ...items,
        }
        // console.log('items', items, payload)
        this.selectedUnallocationCheckbox.push(payload)
      }
      console.log('asfsfsf', this.selectedUnallocationCheckbox)
    },
    // 배정X에서 반으로 이동
    async onUnallocationPutMoveClass() {
      const banList = []
      const studentList = []
      for (let i = 0; i < this.selectedMoveToClassCheckboxRight.length; i++) {
        const ban = {
          csm_idx: this.selectedMoveToClassCheckboxRight[i].csm_idx,
          csm_name: this.selectedMoveToClassCheckboxRight[i].csm_name,
        }
        banList.push(ban)
      }
      for (let i = 0; i < this.selectedUnallocationCheckbox.length; i++) {
        const student = {
          itm_idx: this.selectedUnallocationCheckbox[i].itm_idx,
          mem_idx: this.selectedUnallocationCheckbox[i].mem_idx,
          std_idx: this.selectedUnallocationCheckbox[i].std_idx,
        }
        studentList.push(student)
      }
      console.log(this.selectedMoveToClassCheckboxRight)

      const payload = {
        ban_list: banList,
        copy_check: false,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        student_list: studentList,
      }
      if (payload.ban_list.length !== 0 && payload.student_list.length !== 0) {
        await apiOperation
          .putMoveClass(payload)
          .then(({ data: { data } }) => {
            console.log(data)
            this.openModalDesc('이동 성공', '반 이동을 성공했습니다.')
            this.onSearchUnallocation()
            this.getMoveClassRight()
            this.getClassList()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.openModalDesc('이동 실패', '반 이동을 실패했습니다.')
      }
    },

    // 체크 박스 선택 후
    // 삭제버튼 클릭
    onClickClassDelete() {
      if (this.checkList.length === 0) {
        this.onOpenSnackbar('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.openDeleteModalDesc('반')
      }
    },
    // 이동 버튼 클릭
    async onClickClassMove() {
      if (this.checkList.length === 0) {
        this.onOpenSnackbar('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        const payload = {
          ins_code: this.ins_code,
          name_orderby: ``,
          search: ``,
        }
        const item = []

        await apiOperation
          .getMoveClass(payload)
          .then(({ data: { data } }) => {
            for (let i = 0; i < this.checkList.length; i++) {
              item.push(data.find((e) => e.csm_idx === this.checkList[i]))
            }

            this.modalMoveLeftList = item
            this.modalMoveRightList = data
          })
          .catch((err) => {
            console.log(err)
          })

        this.onOpenClassMove(1)
      }
    },
    // 복사 버튼
    onClickClassCopy() {
      if (this.checkList.length === 0) {
        this.onOpenSnackbar('반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      } else {
        this.postClassCopy()
      }
    },

    // 반 수정/만들기 모달
    // 반 선생님 추가/삭제
    onClickAddSelectedTeacher(data) {
      if (!this.selectedTeacher.includes(data)) {
        this.selectedTeacher.push(data)
      }
    },
    onClickDeleteSelectedTeacher(data) {
      this.selectedTeacher = this.selectedTeacher.filter(
        (item) => item !== data
      )
    },
    // 반 학생 학년 추가/삭제 (학년 전체)
    onClickAddSelectedStudentAll(data) {
      console.log(data)
      for (let i = 0; i < data.studentList.length; i++) {
        this.onClickAddSelectedStudent(data.studentList[i], data.std_year)
      }
    },
    onClickDeleteSelectedStudentAll(data) {
      for (let i = 0; i <= data.student.length; i++) {
        console.log(`student[${i}]`, data.student[0])
        this.onClickDeleteSelectedStudent(data.student[0], data.grade)
      }
    },
    onClickAddSelectedBanListAll(data) {
      console.log(data)
      for (let i = 0; i < data.studentList.length; i++) {
        this.onClickAddSelectedStudent(
          data.studentList[i],
          data.studentList[i].std_year
        )
      }
    },
    // 반 학생 반 학년 추가/삭제 (개인)
    onClickAddSelectedStudent(data, stdYear) {
      // console.log('data,stdYear', data, stdYear)

      if (
        this.selectedStudentAll.find((e) => e.grade === stdYear) === undefined
      ) {
        const student = {
          grade: stdYear,
          student: [data],
        }
        this.selectedStudentAll.push(student)
        this.selectedStudentList.push(data)
      } else {
        const students = this.selectedStudentAll.find(
          (e) => e.grade === stdYear
        )

        if (
          students.student?.filter((item) => item?.mem_idx === data?.mem_idx)[0]
            ?.mem_idx !== data.mem_idx
        ) {
          students.student.push(data)
          this.selectedStudentList.push(data)
        }
      }
    },
    onClickDeleteSelectedStudent(data, stdYear) {
      for (let i = 0; i < this.selectedStudentAll.length; i++) {
        if (this.selectedStudentAll[i].grade === stdYear) {
          this.selectedStudentAll[i].student = this.selectedStudentAll[
            i
          ].student.filter((item) => item.mem_idx !== data.mem_idx)

          this.selectedStudentList = this.selectedStudentList.filter(
            (item) => item.mem_idx !== data.mem_idx
          )

          if (this.selectedStudentAll[i].student.length === 0) {
            this.selectedStudentAll = this.selectedStudentAll.filter(
              (item) => item.student.length !== 0
            )
          }
        }
      }
    },

    // 반 만들기/수정 반 학생 학년 상세
    onClickModalModifyDetail(idx) {
      if (this.modalModifyDetail === idx) {
        this.modalModifyDetail = null
      } else {
        this.modalModifyDetail = idx
      }
    },
    onClickModalModifyClassDetail(idx) {
      if (this.modalModifyClassDetail === idx) {
        this.modalModifyClassDetail = null
      } else {
        this.modalModifyClassDetail = idx
      }
    },
    // 반 만들기/수정 선택된 학생 상세
    onClickModalModifySelectedDetail(idx) {
      if (this.modalModifySelectDetail === idx) {
        this.modalModifySelectDetail = null
      } else {
        this.modalModifySelectDetail = idx
      }
    },

    // 반 학생 탭 이동
    onMoveStudentTab(num) {
      this.studentTab = num
    },

    // 정렬
    onChangeTeacherSort(e, teacher) {
      this.sortTeacherSelect = e.target.innerText
      if (teacher !== undefined) {
        this.tchIdx = teacher
      } else {
        this.tchIdx = 0
      }
    },
    onChangeNumberSort(e) {
      this.sortNumberSelect = e.target.innerText
      if (e.target.innerText === '10개씩 보기') {
        this.showCount = 1
      } else if (e.target.innerText === '100개씩 보기') {
        this.showCount = 2
      } else {
        this.showCount = 3
      }
    },
    onChangeDetailSort(num) {
      this.detailFilter = num
      if (num === 1) {
        this.sortDetailChange = '최신 등록순'
      } else if (num === 2) {
        this.sortDetailChange = '이름 오름차순'
      } else if (num === 3) {
        this.sortDetailChange = '이름 내림차순'
      } else if (num === 4) {
        this.sortDetailChange = '학년 오름차순'
      } else {
        this.sortDetailChange = '학년 내림차순'
      }
    },
    onChangeCheckStdSort(std) {
      this.sortCheckStd = std
    },
    onFilterCheckStdSort() {
      let result = ''
      if (this.sortCheckStd === true) {
        result = '학생'
      } else if (this.sortCheckStd === false) {
        result = '학부모'
      } else if (this.sortCheckStd === null) {
        result = '학부모&학생'
      }
      return result
    },
    onChangeStatusSort(active) {
      this.sortStatus = active
    },

    // 반 이동 모달
    // 반 펴기
    onClickOpenDetail(idx) {
      if (this.modalMoveDetail === idx) {
        this.modalMoveDetail = null
      } else {
        this.modalMoveDetail = idx
      }
    },

    // 반 이동 학생 이름 검색 왼쪽
    async getMoveClassLeft() {
      const payload = {
        ins_code: this.ins_code,
        name_orderby: this.modalMoveLeftSort
          ? ''
          : `&name_orderby=${this.modalMoveLeftSort}`,
        search:
          this.modalMoveLeftSearch === ''
            ? ``
            : `&search=${this.modalMoveLeftSearch}`,
      }
      const item = []

      await apiOperation
        .getMoveClass(payload)
        .then(({ data: { data } }) => {
          for (let i = 0; i < this.checkList.length; i++) {
            item.push(data.find((e) => e.csm_idx === this.checkList[i]))
          }

          this.modalMoveLeftList = item
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onClickModalMoveLeftSort(sort) {
      this.modalMoveLeftSort = sort
    },
    // 반 이동 학생 이름 검색 오른쪽
    async getMoveClassRight() {
      const payload = {
        ins_code: this.ins_code,
        name_orderby: this.modalMoveRightSort
          ? ''
          : `&name_orderby=${this.modalMoveRightSort}`,
        search:
          this.modalMoveRightSearch === ''
            ? ``
            : `&search=${this.modalMoveRightSearch}`,
      }

      await apiOperation
        .getMoveClass(payload)
        .then(({ data: { data } }) => {
          this.modalMoveRightList = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onClickModalMoveRightSort(sort) {
      this.modalMoveRightSort = sort
    },
    // 반 이동 기능
    // 반 이동 api
    async putMoveClass(type) {
      const studentList = []
      const banList = []
      const banStudent = []
      // type => true: 오른쪽 화실표, false: 왼쪽 화살표
      if (type) {
        for (let i = 0; i < this.selectedMoveModalLeftCheckbox.length; i++) {
          const student = {
            csm_idx: this.selectedMoveModalLeftCheckbox[i]?.csm_idx,
            itm_idx: this.selectedMoveModalLeftCheckbox[i]?.itm_idx,
            mem_idx: this.selectedMoveModalLeftCheckbox[i]?.mem_idx,
            std_idx: this.selectedMoveModalLeftCheckbox[i]?.std_idx,
          }
          studentList.push(student)
        }
        for (let i = 0; i < this.selectedMoveToClassCheckboxRight.length; i++) {
          const ban = {
            csm_idx: this.selectedMoveToClassCheckboxRight[i].csm_idx,
            csm_name: this.selectedMoveToClassCheckboxRight[i].csm_name,
          }
          banList.push(ban)
          for (
            let j = 0;
            j < this.selectedMoveToClassCheckboxRight[i].studentList.length;
            j++
          ) {
            const studentInfo = {
              mem_idx:
                this.selectedMoveToClassCheckboxRight[i].studentList[j].mem_idx,
            }
            banStudent.push(studentInfo)
          }
        }
      } else {
        for (let i = 0; i < this.selectedMoveModalRightCheckbox.length; i++) {
          const student = {
            csm_idx: this.selectedMoveModalRightCheckbox[i]?.csm_idx,
            itm_idx: this.selectedMoveModalRightCheckbox[i]?.itm_idx,
            mem_idx: this.selectedMoveModalRightCheckbox[i]?.mem_idx,
            std_idx: this.selectedMoveModalRightCheckbox[i]?.std_idx,
          }
          studentList.push(student)
        }
        for (let i = 0; i < this.selectedMoveToClassCheckbox.length; i++) {
          const ban = {
            csm_idx: this.selectedMoveToClassCheckbox[i].csm_idx,
            csm_name: this.selectedMoveToClassCheckbox[i].csm_name,
          }
          banList.push(ban)

          for (
            let j = 0;
            j < this.selectedMoveToClassCheckbox[i].studentList.length;
            j++
          ) {
            const studentInfo = {
              mem_idx:
                this.selectedMoveToClassCheckbox[i].studentList[j].mem_idx,
            }
            banStudent.push(studentInfo)
          }
        }
      }
      console.log(studentList, banList)

      const payload = {
        ban_list: banList,
        copy_check: this.modalMoveCopy,
        fra_code: this.fra_code,
        ins_code: this.ins_code,
        student_list: studentList,
      }
      console.log('payload', payload)
      console.log('ClassCheckboxRight', this.selectedMoveToClassCheckboxRight)

      if (payload.ban_list.length !== 0 && payload.student_list.length !== 0) {
        if (
          // 이동하려는 반이 같은 반이 아닌지 체크
          studentList.filter((x1) =>
            banList.some((x2) => x1.csm_idx === x2.csm_idx)
          ).length === 0
        ) {
          if (
            // 이동하려는 반에 같은 학생이 없는지 체크
            studentList.filter((x1) =>
              banStudent.some((x2) => x1.mem_idx === x2.mem_idx)
            ).length === 0
          ) {
            await apiOperation
              .putMoveClass(payload)
              .then(({ data: { data } }) => {
                console.log(data)
                this.selectedMoveToClassCheckbox = []
                this.selectedMoveToClassCheckboxRight = []
                this.selectedMoveModalLeftCheckbox = []
                this.selectedMoveModalRightCheckbox = []
                this.openModalDesc('이동 성공', '반 이동을 성공했습니다.')
                this.getMoveClassLeft()
                this.getMoveClassRight()
                this.getClassList()
              })
              .catch((err) => {
                console.log(err)
              })
          } else {
            this.openModalDesc('이동 실패', '반 이동을 실패했습니다.')
          }
        } else {
          this.openModalDesc('이동 실패', '반 이동을 실패했습니다.')
        }
      } else {
        this.onOpenSnackbar('이동할 반을 선택해주세요.')
        setTimeout(() => {
          this.onCloseSnackbar()
        }, 2000)
      }
    },

    // 반 이동 시 복사 체크박스
    onClickCopyCheck() {
      if (this.modalMoveCopy) {
        this.modalMoveCopy = false
      } else {
        this.modalMoveCopy = true
      }
    },
    // 반 이동 학생 체크박스
    onClickMoveModalLeftCheckbox(items, csmIdx) {
      if (
        this.selectedMoveModalLeftCheckbox.find(
          (e) => e.mem_idx === items.mem_idx
        )?.mem_idx === items.mem_idx
      ) {
        this.selectedMoveModalLeftCheckbox =
          this.selectedMoveModalLeftCheckbox.filter(
            (item) => item.mem_idx !== items.mem_idx
          )
        console.log('delete')
      } else {
        const payload = {
          ...items,
          csm_idx: csmIdx,
        }
        this.selectedMoveModalLeftCheckbox.push(payload)
      }
      console.log('asfsfsf', this.selectedMoveModalLeftCheckbox)
    },
    // 이동할 반 선택 (오른쪽으로)
    onClickMoveToClass(item) {
      if (
        this.selectedMoveToClassCheckbox.find((e) => e.csm_idx === item.csm_idx)
          ?.csm_idx === item.csm_idx
      ) {
        this.selectedMoveToClassCheckbox =
          this.selectedMoveToClassCheckbox.filter(
            (idx) => idx.csm_idx !== item.csm_idx
          )
      } else {
        this.selectedMoveToClassCheckbox.push(item)
      }
      console.log('classCheckbox', this.selectedMoveToClassCheckbox)
    },
    // 학생 체크박스
    onClickMoveModalRightCheckbox(items, csmIdx) {
      if (
        this.selectedMoveModalRightCheckbox.find(
          (e) => e.mem_idx === items.mem_idx
        )?.mem_idx === items.mem_idx
      ) {
        this.selectedMoveModalRightCheckbox =
          this.selectedMoveModalRightCheckbox.filter(
            (item) => item.mem_idx !== items.mem_idx
          )
      } else {
        const payload = {
          ...items,
          csm_idx: csmIdx,
        }

        this.selectedMoveModalRightCheckbox.push(payload)
      }
      console.log(
        'RightCheckbox',
        this.selectedMoveModalRightCheckbox,
        items,
        this.selectedMoveModalRightCheckbox.some(
          (item) => item.mem_idx === items.mem_idx
        )
      )
    },
    // 이동할 반 선택 (왼쪽으로)
    onClickMoveToClassRight(item) {
      if (
        this.selectedMoveToClassCheckboxRight.find(
          (e) => e.csm_idx === item.csm_idx
        )?.csm_idx === item.csm_idx
      ) {
        this.selectedMoveToClassCheckboxRight =
          this.selectedMoveToClassCheckboxRight.filter(
            (idx) => idx.csm_idx !== item.csm_idx
          )
      } else {
        this.selectedMoveToClassCheckboxRight.push(item)
      }
      console.log('classCheckbox', this.selectedMoveToClassCheckboxRight)
    },

    // 학생 개별 등록/학생 상세 정보 모달
    // 모달 이벤트
    onOpenStudentInfoModalDesc(data) {
      this.studentInfoModalDesc.open = true
      this.studentInfo = data
      console.log(data)
    },
    onCloseStudentInfoModalDesc() {
      this.studentInfoModalDesc.open = false
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    openDatePickerLectureDateModalDesc() {
      this.datePickerLectureDateModalDesc.open = true
    },
    // 학생 정보 등록/수정
    onChangeUpdateInput({ target: { value, id, checked } }) {
      this.studentInfo[id] = value
      if (checked) {
        this.studentInfo.nickname = this.studentInfo.name
        this.nickNameCheck = true
      }
      if (this.studentInfo.nickname !== this.studentInfo.name) {
        this.nickNameCheck = false
      } else {
        this.nickNameCheck = true
      }
      if (id.includes('phone')) {
        this.studentInfo[id] = value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
    },
    // 나의 신분 수정
    onClickIdentityBtn(identity) {
      if (this.studentInfo.identity.includes(identity)) {
        for (let i = 0; i < this.studentInfo.identity.length; i++) {
          if (this.studentInfo.identity[i] === identity) {
            this.studentInfo.identity.splice(i, 1)
          }
        }
      } else {
        this.studentInfo.identity.push(identity)
      }
      console.log(this.studentInfo.identity)
    },
    // 학년 수정
    onClickTypeGrade() {
      this.studentInfo.grade_type = 0
    },
    onClickTypeAdult() {
      this.studentInfo.grade_type = 1
    },
    // 성별 수정
    onClickGenderMen() {
      this.studentInfo.gender = 0
    },
    onClickGenderWomen() {
      this.studentInfo.gender = 1
    },
    // 상태 변경 수정
    onClickStatusTrue() {
      this.studentInfo.status = true
    },
    onClickStatusFalse() {
      this.studentInfo.status = false
    },
    // 학생상태 변경 수정
    onClickStudentStatusTrue() {
      this.studentInfo.student_status = true
    },
    onClickStudentStatusFalse() {
      this.studentInfo.student_status = false
    },
    selectGrade(grade) {
      this.studentInfo.grade = grade
    },
    openUploadStudentImgModalDesc() {
      this.uploadStudentImgModalDesc.open = true
    },
    onClickFamilyDeleteBtn(id) {
      this.deleteFamilyId = id
    },
    // 일촌
    onChangeFamilySearchInput({ target: { value } }) {
      this.familySearchText = value
    },
    onClickSearchBtn() {
      const btn = document.getElementById('modalFamilySearch')
      btn.click()
      this.searchFamily()
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.classroom {
  max-width: 105px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.drag-box {
  display: contents;
}
</style>
