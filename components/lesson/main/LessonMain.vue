<template>
  <div class="tab-content depth03 ac_manage_dtr">
    <div class="tab-pane active">
      <!-- 컨트롤 버튼 영역 -->
      <SearchSection
        @copy="$emit('copy', $event)"
        @paste="$emit('paste', $event)"
        @del="$emit('del', $event)"
      />
      <!-- /.컨트롤 버튼 영역 -->

      <!-- [개발참조] 레슨 : 컨텐츠구성 자료실과 동일 -->
      <!-- 2단 분류 컨텐츠 -->
      <div class="divide_section">
        <!-- 왼쪽 영역 -->
        <div class="divide_area left">
          <!-- 탭 컨텐츠 -->
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="grade-tab"
                class="nav-link active"
                data-toggle="tab"
                data-target="#institute"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span class="icon_institute"></span>
                교육기관
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="class-tab"
                class="nav-link"
                data-toggle="tab"
                data-target="#franchise"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span class="icon_fran"></span>
                프랜차이즈
              </button>
            </li>
          </ul>

          <div id="myTabContent" class="tab-content">
            <!-- 탭 내용01 -->
            <div
              id="institute"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="grade-tab"
            >
              <TreeView
                ref="institution"
                :dataList="receiveInstitutionLessonData"
                :editable="identity == 'master' ? true : false"
                :identity="identity"
                :pidNum="0"
                :copyCheckData="copyCheckData"
                @copyDataCallBack="$emit('callback', $event)"
              />
            </div>
            <!-- /.탭 내용01 -->
            <!-- 탭 내용02 -->
            <div
              id="franchise"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="class-tab"
            >
              <TreeView
                ref="franchise"
                :dataList="receiveFranchiseLessonData"
                :editable="identity == 'master' ? true : false"
                :identity="identity"
                :pidNum="1000"
                :copyCheckData="copyCheckData"
                @copyDataCallBack="$emit('callback', $event)"
              />
            </div>
            <!-- /.탭 내용02 -->
          </div>
          <!-- /.탭 컨텐츠 -->
        </div>
        <!-- /.왼쪽 영역 -->

        <!-- 오른쪽 영역 -->
        <div class="divide_area right">
          <!-- 탭 컨텐츠 -->
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="grade-tab"
                class="nav-link active"
                data-toggle="tab"
                data-target="#mydata"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span class="icon_mydata"></span>
                내 레슨
              </button>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content">
            <!-- 탭 내용01 -->
            <div
              id="mydata"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="grade-tab"
            >
              <TreeView
                ref="curriculum"
                :expanded="false"
                :dataList="receiveLessonList"
                identity="master"
                :pidNum="2000"
              />
            </div>
            <!-- /.탭 내용01 -->
          </div>
          <!-- /.탭 컨텐츠 -->
        </div>
        <!-- /.오른쪽 영역 -->
      </div>
      <!-- /.2단 분류 컨텐츠 -->
    </div>
  </div>
</template>

<script>
import TreeView from '~/components/common/custom/CustomReferenceTreeView.vue'
import SearchSection from '~/components/lesson/main/SearchSection.vue'

export default {
  name: 'LessonMain',
  components: {
    TreeView,
    SearchSection,
  },
  props: {
    identity: {
      type: String,
      default: '',
    },
    receiveInstitutionLessonData: {
      type: Array,
      default: () => [],
    },
    receiveFranchiseLessonData: {
      type: Array,
      default: () => [],
    },
    receiveLessonList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
