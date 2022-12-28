<template>
  <div>
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
    <div class="tab-content depth03 ac_manage_notice ac_manage_report">
      <div class="tab-pane active">
        <!-- 검색 영역 -->
        <div class="search_section row">
          <div class="right_area">
            <div class="input-group input-search form-inline form-search">
              <input
                type="text"
                class="form-control"
                placeholder="학생이름 검색"
              />
              <div class="input-group-append">
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
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
                <th>번호</th>
                <th>학년</th>
                <th>이름</th>
                <th>ID</th>
                <th>연락처</th>
                <th>학부모 연락처</th>
                <th>학습리포트</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1학년</td>
                <td>김지원</td>
                <td>
                  <div class="report_id">aaaaabbbbbcccccdddddeeeee</div>
                </td>
                <td>공개</td>
                <td>4</td>
                <td>
                  <i
                    class="icons_zoom_off"
                    @click="onOpenMoreReportsFilterModal"
                  ></i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>1학년</td>
                <td>김지원</td>
                <td>
                  <div class="report_id">aaaaabbbbbcccccdddddeeeee</div>
                </td>
                <td>공개</td>
                <td>4</td>
                <td>
                  <i
                    class="icons_zoom_off"
                    @click="onOpenMoreReportsFilterModal"
                  ></i>
                </td>
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

    <MoreReportsFilterModal
      :open="openMoreReportsFilterModal.open"
      @close="onCloseMoreReportsFilterModal"
      @more-report-open="onOpenMoreReportsModal"
    />
    <MoreReportsModal
      :open="openMoreReportsModal.open"
      @close="onCloseMoreReportsModal"
    />
  </div>
</template>

<script>
import MoreReportsFilterModal from '@/components/common/modal/learningbox/MoreReportsFilterModal'
import MoreReportsModal from '@/components/common/modal/learningbox/MoreReportsModal'
export default {
  name: 'Report',
  components: {
    MoreReportsFilterModal,
    MoreReportsModal,
  },
  data() {
    return {
      openMoreReportsFilterModal: {
        open: false,
      },
      openMoreReportsModal: {
        open: false,
      },
    }
  },
  methods: {
    // 모달
    onOpenMoreReportsFilterModal() {
      this.openMoreReportsFilterModal.open = true
    },
    onCloseMoreReportsFilterModal() {
      this.openMoreReportsFilterModal.open = false
    },
    onOpenMoreReportsModal() {
      this.openMoreReportsFilterModal.open = false
      this.openMoreReportsModal.open = true
    },
    onCloseMoreReportsModal() {
      this.openMoreReportsModal.open = false
    },
  },
}
</script>

<style></style>
