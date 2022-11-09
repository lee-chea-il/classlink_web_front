<template>
  <div>
    <PageHeader title="강좌 리스트" />
    <div class="tab-content depth03 ac_manage_lec">
      <div class="tab-pane active">
        <!-- [개발참조] 데이터가 없는 경우 -->
        <div class="page_nodata">
          <div class="txt">
            현재 개설한 강좌가 없습니다. <br />
            먼저 강좌를 개설해 보세요
          </div>
          <button
            class="btn btn_crud_point"
            data-toggle="modal"
            data-target="#modalLectureRegi"
          >
            강좌 만들기
          </button>
        </div>

        <!-- /.데이터가 없는 경우 -->
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'

export default {
  name: 'LecturePage',
  components: { PageHeader },
}
</script>

<style></style>
