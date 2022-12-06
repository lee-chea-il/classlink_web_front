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
      <div class="tab-content depth03 ac_manage_que">
        <div class="tab-pane active">
          <!-- [개발참조] 데이터가 없는 경우 
					<div class="page_nodata">
						<div class="txt">
							질문이 없습니다.
						</div>
						<button class="btn btn_crud_point" data-toggle="modal" data-target="#modalLectureRegi">강좌 만들기</button>
					</div>
					-->
          <!-- /.데이터가 없는 경우 -->
          <!-- 검색 영역 -->
          <!-- [개발참조] 필터링한 목록이 없는 경우 출력됨 -->
          <!-- <div class="search_section">
						<div class="left_area">
							<button class="btn btn_crud_default">삭제</button>
						</div>
						<div class="right_area">
							<div class="input-group input-search form-inline form-lec">
								<input type="text" placeholder="키워드 검색" class="form-control">
								<div class="input-group-append">
									<button class="btn icons_search_off" type="button"></button>
								</div>
							</div>
							<button class="btn btn_filter">필터</button>
							<button class="btn btn_crud_default" disabled>필터 해제</button>
						</div>
					</div> -->

          <!-- [개발참조] 필터링한 목록이 있는 경우 출력됨 -->
          <div class="search_section">
            <div class="left_area">
              <div class="row">
                <div class="keyword_area left_area">
                  <div class="keyword_area_01">
                    <span
                      v-for="(item, idx) in 20"
                      :key="idx"
                      class="keyword01"
                    >
                      <span class="keyword01-1">내가 한 질문</span
                      ><span class="x cursor"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right_area">
              <button class="btn btn_crud_default">삭제</button>
              <div class="input-group input-search form-inline form-lec">
                <input
                  type="text"
                  placeholder="키워드 검색"
                  class="form-control"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
              <button
                class="btn btn_filter"
                data-toggle="modal"
                data-target="#modalQueFilter"
                data-dismiss="modal"
              >
                필터
              </button>
              <button class="btn btn_crud_default filter_lift" disabled>
                필터 해제
              </button>
            </div>
          </div>
          <!-- 검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkAll"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkAll"></label>
                    </div>
                  </th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>강좌</th>
                  <th>공개여부</th>
                  <th>조회</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                  <td
                    data-toggle="modal"
                    data-target="#modalNoticeView"
                    data-dismiss="modal"
                  >
                    <div class="study_qustion">
                      성격심리학 레슨1 관련 질문드립니다 성격심리학 레슨1 관련
                      질문드립니다성격심리학 레슨1 관련 질문드립니다성격심리학
                      레슨1 관련 질문드립니다
                    </div>
                  </td>
                  <td>김지원</td>
                  <td>2022.07.10</td>
                  <td>성격심리학</td>
                  <td>공개</td>
                  <td>4</td>
                </tr>
                <tr class="que_reply">
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
                  <td
                    data-toggle="modal"
                    data-target="#modalReplyView"
                    data-dismiss="modal"
                    class="study_qustion"
                  >
                    └─ 답변드립니다.
                  </td>
                  <td>정미미 선생님</td>
                  <td>2022.07.10</td>
                  <td>성격심리학</td>
                  <td>공개</td>
                  <td>4</td>
                </tr>
                <tr>
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
                  <td
                    data-toggle="modal"
                    data-target="#modalNoticeView"
                    data-dismiss="modal"
                    class="study_qustion"
                  >
                    성격심리학 레슨1 관련 질문드립니다
                  </td>
                  <td>김지원</td>
                  <td>2022.07.10</td>
                  <td>성격심리학</td>
                  <td>공개</td>
                  <td>4</td>
                </tr>
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
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
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
  </div>
</template>

<script>
export default {
  name: 'Question',
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
