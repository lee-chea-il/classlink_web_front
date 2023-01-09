<template>
  <div class="tab-pane active">
    <div class="search_section02">
      <div class="left_area">
        <div class="row">
          <div class="keyword_area left_area">
            <div class="keyword_area_01">
              <span
                v-for="(item, idx) in syncNoticeList.targetSetting"
                :key="idx"
                class="keyword01"
              >
                <span class="keyword01-1">{{ item }}</span>
                <span class="x" @click="$emit('delete-filter', idx)"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="right_area">
        <button class="btn btn_filter" @click="$emit('open-noticetarget')">
          필터
        </button>
        <button
          class="btn btn_crud_default filter_lift"
          :disabled="syncNoticeList.targetSetting.length === 0"
          @click="$emit('alldelete-filter')"
        >
          필터 해제
        </button>
      </div>
    </div>
    <div class="line"></div>
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
          <input id="fileSelect" type="file" class="custom-control-input" />
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
              {{ syncNoticeList.date_range_start }} -
              {{ syncNoticeList.date_range_end }}
              {{ syncNoticeList.time_range_start_m === 0 ? '오전' : '오후' }}
              {{ syncNoticeList.time_range_start }} -
              {{ syncNoticeList.time_range_end_m === 0 ? '오전' : '오후' }}
              {{ syncNoticeList.time_range_end }}
            </span>
          </span>
        </div>
        <!-- <div class="target_area">
                <button
                  class="btn btn_crud_default"
                  data-toggle="modal"
                  data-target="#modalNoticeTarget"
                >
                  대상 설정
                </button>
                <span class="box02">
                  <span class="content02"> 선생님 | 학부모 | 학생</span>
                </span>
              </div> -->
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
                  <label class="custom-control-label" :for="`chk${idx}`">
                  </label>
                </div>
              </td>
              <td class="table001">
                <label class="cursor" :for="`chk${idx}`"
                  >영어리딩심화.pdf</label
                >
              </td>
              <td></td>
              <td>4MB</td>
              <td>대용량첨부</td>
              <td>~22/08/01(30일간)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <VueEditor
      id="quiz_editor"
      v-model="syncNoticeList.content"
      :editorToolbar="editorToolbar"
      :editorOptions="editorOptions"
      :useCustomImageHandler="true"
    />
    <div class="reply_onoff">
      <div class="custom-control custom-switch">
        <input
          id="customSwitch1"
          type="checkbox"
          class="custom-control-input"
          :checked="syncNoticeList.commentCheck"
        />
        <label class="custom-control-label" for="customSwitch1"
          >댓글 기능 ON/OFF</label
        >
      </div>
    </div>
    <div class="btn_area">
      <button class="btn btn_crud_point" @click="$emit('regist-notice')">
        등록
      </button>
      <NuxtLink to="/management/notice/classroom" class="btn btn_crud_default"
        >취소</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistClassroomBox',
  props: {
    noticeList: {
      type: Object,
      default: () => {},
    },
    editorToolbar: {
      type: Array,
      default: () => [],
    },
    editorOptions: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    syncNoticeList: {
      get() {
        return this.noticeList
      },
      set(value) {
        this.$emit('update:noticeList', value)
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-toolbar,
/deep/.ql-container {
  border-width: 0 !important;
}
/deep/.ql-toolbar {
  border-bottom: 0.4px solid rgba(167, 169, 172, 0.4) !important;
}
/deep/.ql-editor {
  min-height: 400px;
  font-size: 15px;
}
</style>
<style scoped>
#upload-input {
  visibility: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
