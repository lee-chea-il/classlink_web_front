<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/list') }"
            to="/management/franchise/list"
            >가맹한 리스트</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/monthly') }"
            to="/management/franchise/monthlyuse"
            >월별 이용 현황</NuxtLink
          >
        </li>
      </ul>

      <div class="tab-content depth03 ac_manage_frc frc_monthlyusage_list">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="right_area">
              <button class="btn btn_crud_default" @click="onMovePrev">
                목록보기
              </button>
            </div>
          </div>
          <!-- 검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>기간</th>
                  <th>FC 이름</th>
                  <th>기관장 이름</th>
                  <th>이용 학생 수</th>
                  <th>총 학생 수</th>
                  <th>상세</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in monthlyUseList" :key="idx">
                  <td>{{ item.id }}</td>
                  <td>2022.01.20 - 2022.01.20</td>
                  <td>{{ item.fc_name }}</td>
                  <td>{{ item.chief_name }}</td>
                  <td>{{ item.use_student }}</td>
                  <td>{{ item.total_student }}</td>
                  <td>
                    <i
                      class="btn icons_zoom_off"
                      @click="onOpenFCDetailModal(item.student)"
                    ></i>
                  </td>
                </tr>
                <!-- <tr>
                  <td>1</td>
                  <td>2022.01.20 - 2022.01.20</td>
                  <td>잉글리쉬캐슬</td>
                  <td>홍길동</td>
                  <td>2</td>
                  <td>4</td>
                  <td>
                    <i
                      class="btn icons_zoom_off"
                      data-toggle="modal"
                      data-target="#modalFrcdetail"
                    ></i>
                  </td>
                </tr> -->
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

    <FranchiseDetailModal
      :data="openFCDetailModal"
      @close="onCloseFCDetailModal"
    />
  </div>
</template>

<script>
import FranchiseDetailModal from '@/components/common/modal/franchise/FranchiseDetailModal.vue'

export default {
  name: 'MonthlyId',
  components: {
    FranchiseDetailModal,
  },
  data() {
    return {
      monthlyUseList: [
        {
          id: 1,
          fc_name: '잉글리쉬캐슬',
          chief_name: '홍길동',
          use_student: 2,
          total_student: 4,
          student: [
            {
              id: 1,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 1,
              access_count: 2,
            },
            {
              id: 2,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 3,
              access_count: 9,
            },
            {
              id: 3,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 1,
              access_count: 3,
            },
            {
              id: 4,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 2,
              access_count: 15,
            },
          ],
        },
        {
          id: 2,
          fc_name: '잉글리쉬캐슬',
          chief_name: '홍길동',
          use_student: 2,
          total_student: 4,
          student: [
            {
              id: 1,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 1,
              access_count: 3,
            },
            {
              id: 2,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 3,
              access_count: 6,
            },
          ],
        },
      ],

      openFCDetailModal: {
        open: false,
        data: {},
      },
    }
  },
  methods: {
    onMovePrev() {
      this.$router.push('/management/franchise/monthlyuse')
    },

    onOpenFCDetailModal(data) {
      this.openFCDetailModal.open = true
      this.openFCDetailModal.data = data
    },
    onCloseFCDetailModal() {
      this.openFCDetailModal.open = false
      this.openFCDetailModal.data = {}
    },
  },
}
</script>

<style></style>
