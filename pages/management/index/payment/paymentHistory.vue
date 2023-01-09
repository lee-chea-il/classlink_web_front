<template>
  <div>
    <div>
      <!--  3Depth -->
      <NavBox />
      <div class="tab-content depth03 ac_manage_pay">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <button class="btn btn_crud_default">한번에 인쇄</button>
            </div>
            <div class="right_area">
              <div class="calendar_date_bluebox inline_block mr-2 div_height">
                {{ dateRange.start }} - {{ dateRange.end }}
              </div>
              <i class="icons_calendar_off mr-2" @click="openModalCalendar"></i>
              <button class="btn btn_crud_default paymentDetail">검색</button>
              <button
                class="btn btn_crud_default paymentDetail"
                @click="goBackPage"
              >
                돌아가기
              </button>
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="invoice_all_check"
                        type="checkbox"
                        class="custom-control-input"
                        :checked="invoiceList.length === checkList.length"
                        @input="handleCheckbox($event)"
                      />
                      <label
                        class="custom-control-label"
                        for="invoice_all_check"
                      ></label>
                    </div>
                  </th>
                  <th>청구서 번호</th>
                  <th>청구 날짜</th>
                  <th>기한</th>
                  <th>금액</th>
                  <th>영수증 인쇄</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in invoiceList" :key="idx">
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        :id="`check${idx}`"
                        :name="item.id"
                        :checked="checkList.includes(item)"
                        type="checkbox"
                        class="custom-control-input"
                        @input="handleCheckbox($event)"
                      />
                      <label
                        class="custom-control-label"
                        :for="`check${idx}`"
                      ></label>
                    </div>
                  </td>
                  <td>{{ item.invoice_number }}</td>
                  <td>{{ item.invoice_date }}</td>
                  <td>{{ item.invoice_deadline }}</td>
                  <td>{{ priceToString(item.price) }}원</td>
                  <td>
                    <i class="icons_printer"></i>
                  </td>
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
    <!-- 달력 기간 모달 호출 -->
    <RangeDataPicker
      :open="isRangeCalendar"
      @select-date="onChangeDate"
      @close="closeModalCalendar"
    />
  </div>
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
import RangeDataPicker from '~/components/common/modal/RangeDataPicker.vue'
export default {
  name: 'PaymentHistory',
  components: {
    NavBox,
    RangeDataPicker,
  },
  data() {
    return {
      // 기간 설정
      isRangeCalendar: false,
      dateRange: {
        start: '',
        end: '',
      },
      //
      invoiceList: [
        {
          id: 0,
          invoice_number: '2210382924458',
          invoice_date: '2022.01.02',
          invoice_deadline: '2022.02.02',
          price: '11900',
        },
        {
          id: 1,
          invoice_number: '2210382924440',
          invoice_date: '2022.01.02',
          invoice_deadline: '2022.02.02',
          price: '1120000',
        },
        {
          id: 2,
          invoice_number: '2210382924302',
          invoice_date: '2022.01.02',
          invoice_deadline: '2022.02.02',
          price: '112000000',
        },
        {
          id: 3,
          invoice_number: '2210382924459',
          invoice_date: '2022.01.02',
          invoice_deadline: '2022.02.02',
          price: '1190000',
        },
        {
          id: 4,
          invoice_number: '2210382924460',
          invoice_date: '2022.01.02',
          invoice_deadline: '2022.02.02',
          price: '119000',
        },
        {
          id: 5,
          invoice_number: '2210382924461',
          invoice_date: '2022.01.02',
          invoice_deadline: '2022.02.02',
          price: '11900',
        },
      ],
      // checkBox
      checkList: [],
    }
  },
  created() {
    // 현재 날짜의 월요일, 일요일 구하기
    const setDate = (date) =>
      `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
    this.dateRange = {
      start: setDate(
        new Date(
          new Date().setDate(
            new Date().getDate() -
              new Date().getDay() +
              (new Date().getDay() === 0 ? -6 : 1)
          )
        )
      ),
      end: setDate(
        new Date(
          new Date().setDate(
            new Date().getDate() -
              new Date().getDay() +
              (new Date().getDay() === 0 ? -6 : 7)
          )
        )
      ),
    }
  },
  methods: {
    // 기간 달력 모달
    openModalCalendar() {
      this.isRangeCalendar = true
    },
    closeModalCalendar() {
      this.isRangeCalendar = false
    },
    // 달력 날짜 설정
    onChangeDate({ start, end }) {
      const setDate = (date) =>
        `${date?.getFullYear()}.${date?.getMonth() + 1}.${date?.getDate()}`
      console.log(setDate(start), setDate(end))
      this.dateRange.start = setDate(start)
      this.dateRange.end = setDate(end)
      this.isRangeCalendar = false
    },
    // 가격 포맷
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    // 돌아가기
    goBackPage() {
      this.$router.push('/management/payment')
    },
    // // checkbox 리스트 추가삭제
    handleCheckbox({ target: { checked, id, name } }) {
      console.log(id, checked, name)
      const idx = this.invoiceList.findIndex(
        (item) => item.id === parseInt(name)
      )
      console.log(idx)
      if (id === 'invoice_all_check') {
        if (checked) {
          this.checkList = [...this.invoiceList]
        } else {
          this.checkList = []
        }
      } else if (checked) {
        this.checkList = [...this.checkList, this.invoiceList[idx]]
      } else {
        const idx = this.checkList.findIndex(
          (item) => item.id === parseInt(name)
        )
        console.log(idx)
        this.checkList.splice(idx, 1)
      }
      console.log(this.checkList)
    },
  },
}
</script>
<style scoped>
.div_height {
  height: 43px !important;
}
</style>
