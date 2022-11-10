<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item">
          <a class="nav-link active" href="(완)강의코스-강의계획서.html">
            강의계획서
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="(완)강의코스-과제함.html"> 과제함 </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="(완)강의코스-노트함.html"> 노트함 </a>
        </li>
      </ul>
      <div class="tab-content depth03 ac_manage_notice ac_manage_classplan">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <span class="course_tit">영어리딩심화</span>
              <span class="course_con">영어 / 심화 A반 / 홍길동 선생님</span>
            </div>
            <!-- [개발참조] 데이터 없을 경우 출력됨 -->
            <!-- <div class="right_area">
							<a href="(완)강의코스.html" class="btn btn_crud_default">강의목록 보기</a>
							<div class="input-group input-search form-inline form-search">
								<input type="text" class="form-control" placeholder="키워드 검색">
								<div class="input-group-append">
									<button class="btn icons_search_off" type="button"></button>
								</div>
							</div>
						</div> -->
            <div class="right_area">
              <nuxt-link to="/class/lecturecourse" class="btn btn_crud_default"
                >강의목록 보기</nuxt-link
              >
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalDataDelete"
                data-dismiss="modal"
              >
                삭제
              </button>
              <div class="input-group input-search form-inline form-search">
                <input
                  type="text"
                  class="form-control"
                  placeholder="키워드 검색"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
              <a
                href="(완)강의코스-강의계획서-과제 등록.html"
                class="btn btn_crud_point"
                >등록</a
              >
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <!-- [개발참조] 데이터 없을 경우 
					<div class="page_nodata">
						등록된 강의계획서가 없습니다.
					</div>
					-->
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
                  <th>공개여부</th>
                  <th>읽은 수/전체</th>
                  <th></th>
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
                  <td>
                    <div
                      class="classplan_tit"
                      data-toggle="modal"
                      data-target="#modalNoticeView"
                      data-dismiss="modal"
                    >
                      성격심리학 레슨1 강의계획서
                    </div>
                  </td>
                  <td>김지원 선생님</td>
                  <td>2022.07.10</td>
                  <td>공개</td>
                  <td>4/10</td>
                  <td></td>
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
                  <td>
                    <div
                      class="classplan_tit"
                      data-toggle="modal"
                      data-target="#modalNoticeView"
                      data-dismiss="modal"
                    >
                      성격심리학 레슨1 강의계획서
                    </div>
                  </td>
                  <td>김지원 선생님</td>
                  <td>2022.07.10</td>
                  <td>공개</td>
                  <td>4/10</td>
                  <td></td>
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
          <!-- [개발참조] 데이터 없을 경우 출력됨
					<div class="btn_sec">
						<button class="btn btn_crud_point">등록</button>
						<button class="btn btn_crud_default">취소</button>
					</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
