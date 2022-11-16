<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader
        title1="전체"
        title2="반"
        title3="개인"
        url1="/management/notice/regist/all"
        url2="/management/notice/regist/class"
        url3="/management/notice/regist/individual"
      />
      <div class="tab-content depth03 ac_manage_notice notice_rigi">
        <div class="tab-pane active">
          <div class="setting_section">
            <div class="left_section">
              <div class="subject_area">
                <span class="title">제목</span>
                <input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  class="form-control form-inline"
                  value="컴플레인 이슈사항 공지드립니다."
                />
                <span class="content">작성자는 자동으로 기록에 남습니다.</span>
              </div>
              <div class="file_area">
                <span class="title">파일첨부</span>
                <input
                  id="fileSelect"
                  type="file"
                  class="custom-control-input"
                />
                <label for="fileSelect" class="btn btn_crud_default mypc"
                  >내 PC</label
                >
                <button class="btn btn_crud_default">삭제</button>
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
              <div class="target_area">
                <button
                  class="btn btn_crud_default"
                  data-toggle="modal"
                  data-target="#modalNoticeTarget"
                >
                  대상 설정
                </button>
                <span class="box02">
                  <span class="content02"> 심화A | 심화B | 심화C</span>
                </span>
              </div>
            </div>
          </div>
          <div class="file_list">
            <div id="searchTable" class="search_result">
              <table class="table table-borderless">
                <!-- <colgroup>
									<col width="10%" />
									<col width="20%" />
									<col width="20%" />
									<col width="10%" />
									<col width="20%" />
									<col width="20%" />
								</colgroup> -->
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
                  <!-- 	<tr>
										<td colspan="6">
											<span class="exp_txt">마우스로 파일을 끌어오세요</span>
										</td>
									</tr> -->

                  <tr v-for="(item, idx) in 5" :key="idx">
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          :id="`chk${idx}`"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          :for="`chk${idx}`"
                        ></label>
                      </div>
                    </td>
                    <td class="table001">영어리딩심화.pdf</td>
                    <td></td>
                    <td>4MB</td>
                    <td>대용량첨부</td>
                    <td>~22/08/01(30일간)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="write_area">
            <div class="page_nodata">글쓰기 공간입니다.</div>
          </div>
          <div class="btn_area">
            <button class="btn btn_crud_point">등록</button>
            <NuxtLink to="/management/notice/class" class="btn btn_crud_default"
              >취소</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <SettingNoticeDeadline
      :selectedDate="selectedDate"
      :masks="masks"
      @onClickSuccess="onClickSuccess"
    />
    <!-- @click-date="onDayClick" -->
    <SettingNoticeTarget />
  </div>
</template>

<script>
// import PageHeader from '~/components/common/PageHeader.vue'
import CustomPageHeader from '~/components/common/custom/CustomPageHeader.vue'
import SettingNoticeDeadline from '~/components/common/modal/notice/SettingNoticeDeadline.vue'
import SettingNoticeTarget from '~/components/common/modal/notice/SettingNoticeTarget.vue'

export default {
  name: 'All',
  components: {
    CustomPageHeader,
    SettingNoticeDeadline,
    SettingNoticeTarget,
  },
  data() {
    return {
      regist: {
        title: '',
        deadline: {
          startAmPm: '',
          startTime: '',
          endAmPm: '',
          endTime: '',
          startDate: '',
          endDate: '',
        },
      },
      targetSetting: ['심화A', '심화B', '심화C'],
      attributes: [
        {
          key: 'today',
          highlight: 'blue', // Boolean, String, Object
          bar: 'blue',
          content: '#2c51d7', // Boolean, String, Object
          dates: new Date(),
          excludeDates: null,
          order: 1,
        },
      ],
      masks: {
        input: 'YYYY-MM-DD h:mm A',
      },
      selectedDate: {
        start: new Date(),
        end: new Date(),
      },
      selectedDateTitle: '',
      // deadline: {
      //   startAmPm: '',
      //   startTime: '',
      //   endAmPm: '',
      //   endTime: '',
      //   startdate: '',
      // },
      // selectedDateTaskList: [],
    }
  },
  methods: {
    onClickSuccess() {
      console.log(
        this.selectedDate && this.selectedDate.start.toISOString().substr(0, 10)
      )
      console.log(
        this.selectedDate && this.selectedDate.end.toISOString().substr(0, 10)
      )
    },
  },
}
</script>

<style></style>
