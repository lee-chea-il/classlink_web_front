<template>
  <div class="class_section">
    <TeacherSelectBox :teacherList="teacherList" />
    <div class="move_section my_cur">
      <div class="list_section selected">
        <div class="list_area" style="border: none">
          <!-- 탭 컨텐츠 -->
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="grade-tab"
                class="nav-link active"
                data-toggle="tab"
                data-target="#grade"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                홍길동 선생님 커리큘럼
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
              <ul>
                <li>
                  <!-- 리스트01 -->
                  <div class="list">
                    <i id="show_sublist01" class="btn icons_arrow_r"></i>
                    <span class="text">국어</span>
                    <i class="icons_minus_circle_off"></i>
                  </div>
                  <!-- 리스트01_sub-->
                  <div id="list_sub01" class="list_sub">
                    <ul>
                      <li>
                        <i
                          id="show_sublist01_sub"
                          class="btn icons_arrow_r"
                        ></i>
                        <span class="text">대단원1</span>
                        <i class="icons_minus_circle_off icon"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트01_sub-->
                  <!-- 리스트01_sub_sub-->
                  <div id="list_sub01_sub" class="list_sub_sub">
                    <ul>
                      <li>
                        <span class="text">소단원1.link</span>
                        <i class="icons_minus_circle_off"></i>
                        <!-- <div class="more_list" style="display: none;">
																		<ul>
																			<li>다운로드</li>
																			<li>수정</li>
																			<li>보기</li>
																			<li>삭제</li>
																			<li>복사</li>
																		</ul>
																	</div> -->
                      </li>
                      <li>
                        <span class="text">소단원2.link</span>
                        <i class="icons_minus_circle_off"></i>
                        <!-- <div class="more_list" style="display: none;">
																		<ul>
																			<li>다운로드</li>
																			<li>수정</li>
																			<li>보기</li>
																			<li>삭제</li>
																			<li>복사</li>
																		</ul>
																	</div> -->
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트01_sub_sub-->
                  <!-- /.리스트01 -->
                </li>
                <li>
                  <!-- 리스트02 -->
                  <div class="list">
                    <i id="show_sublist02" class="btn icons_arrow_r"></i>
                    <span class="text">수학</span>
                    <i class="icons_minus_circle_off"></i>
                  </div>
                  <!-- /.리스트02 -->
                </li>
              </ul>
            </div>
            <!-- /.탭 내용01 -->
          </div>
          <!-- /.탭 컨텐츠 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherSelectBox from '~/components/lecture/selectCurriculum/TeacherSelectBox.vue'

export default {
  name: 'SelectCurriculumLeftSection',
  components: {
    TeacherSelectBox,
  },
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
