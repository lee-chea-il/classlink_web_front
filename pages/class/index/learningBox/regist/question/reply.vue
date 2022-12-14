<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/question') }"
            to="/class/learningBox/question"
            >질문함</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/report') }"
            to="/class/learningBox/report"
            >리포트</NuxtLink
          >
        </li>
      </ul>
      <div
        class="tab-content depth03 ac_manage_notice notice_rigi ac_manage_que02"
      >
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
            <div class="right_section row">
              <div class="date_area">
                <span class="box">
                  <span class="content02">선택한 과목</span>
                </span>
                <span class="box">
                  <span class="content02">선택한 강좌</span>
                </span>
              </div>
              <!-- <div class="target_area">
								<span class="box01">
									<span class="content02">선택한 강좌</span>
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
                  <tr>
                    <td colspan="6">
                      <span class="exp_txt">마우스로 파일을 끌어오세요</span>
                    </td>
                  </tr>

                  <!-- <tr>
										<td>
											<div class="custom-control custom-checkbox form-inline">
											<input type="checkbox" class="custom-control-input" id="chk01">
											<label class="custom-control-label" for="chk01"></label>
										</div>
										</td>
										<td class="table001">영어리딩심화.pdf</td>
										<td></td>
										<td>4MB</td>
										<td>대용량첨부</td>
										<td>~22/08/01(30일간)</td>
									</tr>

									<tr>
										<td>
											<div class="custom-control custom-checkbox form-inline">
											<input type="checkbox" class="custom-control-input" id="chk01">
											<label class="custom-control-label" for="chk01"></label>
										</div>
										</td>
										<td class="table001">영어리딩심화.pdf</td>
										<td></td>
										<td>4MB</td>
										<td>대용량첨부</td>
										<td>~22/08/01(30일간)</td>
									</tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <div class="write_area">
            <div class="page_nodata">글쓰기 공간입니다.</div>
          </div>
          <div class="btn_area">
            <button class="btn btn_crud_point">완료</button>
            <NuxtLink
              to="/class/learningBox/question"
              class="btn btn_crud_default"
              >취소</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
