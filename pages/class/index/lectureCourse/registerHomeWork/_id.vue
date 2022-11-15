<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item cursor">
          <div class="nav-link active" @click="onClickLecturePlan">
            강의계획서
          </div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickHomeWorkBox">과제함</div>
        </li>
        <li class="nav-item cursor">
          <div class="nav-link" @click="onClickNoteBox">노트함</div>
        </li>
      </ul>
      <div
        class="tab-content depth03 ac_manage_notice notice_rigi ac_manage_taskregi"
      >
        <div class="tab-pane active">
          <div class="left_area">
            <div class="taskregi_tit">
              <span class="course_tit">{{ lectureCourse.subject }}</span>
              <span class="course_con"
                >{{ lectureCourse.lessonTitle }} /
                {{ lectureCourse.lessonClass }} /
                {{ lectureCourse.lessonClass }}</span
              >
            </div>
          </div>
          <div class="setting_section">
            <div class="left_section">
              <div class="subject_area">
                <span class="title">제목</span>
                <input
                  id="title"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  class="form-control form-inline"
                  :value="lecturePlan.title"
                  @input="$emit('change-input', $event)"
                />
                <span class="content">작성자는 자동으로 기록에 남습니다.</span>
              </div>
              <div class="file_area">
                <span class="title">파일첨부</span>
                <button
                  class="btn btn_crud_default mypc"
                  @click="$emit('click-inputBtn')"
                >
                  내 PC
                </button>
                <button class="btn btn_crud_default">삭제</button>
                <input id="upload-input" type="file" />
              </div>
            </div>
            <div class="right_section">
              <div class="date_area">
                <button
                  class="btn btn_crud_default"
                  data-toggle="modal"
                  data-target="#modalNoticeData"
                >
                  기한 설정
                </button>
                <span class="box01">
                  <span class="content02">
                    2022.08.05 - 2022.08.07 오전 09:00 - 오후 11:59
                  </span>
                </span>
              </div>
              <!-- <div class="target_area">
								<button class="btn btn_crud_default" data-toggle="modal" data-target="#modalNoticeTarget">대상 설정</button>
								<span class="box02">
									<span class="content02"> 선생님 | 학부모 | 학생</span>
								</span>
							</div> -->
            </div>
          </div>
          <div class="file_list">
            <div id="searchTable" class="search_result">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">선택</th>
                    <th scope="col">파일이름</th>
                    <th scope="col">업로드 상태</th>
                    <th scope="col">용량</th>
                    <th scope="col">첨부방식(전환)</th>
                    <th scope="col">다운로드 가능기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <!-- [개발참조] 첨부파일 없을때	
										<td colspan="6">
											<span class="exp_txt">마우스로 파일을 끌어오세요</span>
										</td> -->
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk01"></label>
                      </div>
                    </td>
                    <td>영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>대용량첨부</td>
                    <td>~22/08/01(30일간)</td>
                  </tr>

                  <tr>
                    <!-- [개발참조] 첨부파일 없을때	
											<td colspan="6">
												<span class="exp_txt">마우스로 파일을 끌어오세요</span>
											</td> -->
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk01"></label>
                      </div>
                    </td>
                    <td>영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>일반첨부</td>
                    <td>제한없음</td>
                  </tr>

                  <tr>
                    <!-- [개발참조] 첨부파일 없을때	
												<td colspan="6">
													<span class="exp_txt">마우스로 파일을 끌어오세요</span>
												</td> -->
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk01"></label>
                      </div>
                    </td>
                    <td>영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>일반첨부</td>
                    <td>제한없음</td>
                  </tr>

                  <tr>
                    <!-- [개발참조] 첨부파일 없을때	
												<td colspan="6">
													<span class="exp_txt">마우스로 파일을 끌어오세요</span>
												</td> -->
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk01"></label>
                      </div>
                    </td>
                    <td>영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>일반첨부</td>
                    <td>제한없음</td>
                  </tr>

                  <tr>
                    <!-- [개발참조] 첨부파일 없을때	
											<td colspan="6">
												<span class="exp_txt">마우스로 파일을 끌어오세요</span>
											</td> -->
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chk01"></label>
                      </div>
                    </td>
                    <td>영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>일반첨부</td>
                    <td>제한없음</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="write_area">
            <div class="page_nodata">글쓰기 공간입니다.</div>
          </div>
          <div class="custom-control custom-checkbox form-inline open_regi">
            <input
              id="checkbox01"
              type="checkbox"
              class="custom-control-input"
              checked
            />
            <label class="custom-control-label" for="checkbox01"
              >글을 공개 상태로 등록합니다.</label
            >
          </div>
          <div class="btn_area">
            <button class="btn btn_crud_point">등록</button>
            <a href="(완)강의코스-강의계획서.html" class="btn btn_crud_default"
              >취소</a
            >
            <button
              class="btn btn_crud_default"
              data-toggle="modal"
              data-target="#modalNoticeView"
              data-dismiss="modal"
            >
              미리보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterLecturePlan',
  props: {},
  data() {
    return {
      lectureCourse: {
        id: 0,
        academy: '일산어학원',
        time: '월수금 09:00 ~ 12:00',
        subject: '영어심화리딩',
        lessonTitle: '영어',
        lessonClass: '심화 A반',
        teacher: '홍길동 선생님',
        state: true,
        students: 12,
      },
      lecturePlan: {
        id: 0,
        course_id: 0,
        title: '성격심리학 레슨1 강의계획서0',
        writer: '홍길동 선생님',
        created_at: '2022.07.10',
        date_range_start: '2022.08.05',
        date_range_end: '2022.08.07',
        time_range_start: '09:00',
        time_range_end: '11:59',
        time_range_start_m: '0',
        time_range_end_m: '1',
        open: false,
        views: 3,
        contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
      },
    }
  },
  methods: {
    // click tab-menu
    onClickLecturePlan() {
      this.$router.push(
        `/class/lecturecourse/lectureplan/${this.$route.params.id}`
      )
    },
    onClickHomeWorkBox() {
      this.$router.push(
        `/class/lecturecourse/homeworkbox/${this.$route.params.id}`
      )
    },
    onClickNoteBox() {
      this.$router.push(`/class/lecturecourse/notebox/${this.$route.params.id}`)
    },
  },
}
</script>
<style scoped>
#upload-input {
  visibility: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
