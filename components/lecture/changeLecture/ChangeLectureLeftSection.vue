<template>
  <div class="class_section">
    <div class="search_class">
      <div class="form-group">
        <label for="name">강좌 이름</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control form-inline lec_regi01"
          placeholder="강좌 이름을 입력해주세요."
          :value="lecture.name"
          @input="$emit('change-lecture', $event)"
        />
      </div>
      <div class="form-group">
        <label for="">강좌 이미지</label>
        <div class="input_area">
          <div class="input_file">
            <input
              id="fileName"
              type="text"
              placeholder="이미지를 선택해 주세요."
              class="file_input_textbox"
              :value="lecture.image"
              readonly
            />
            <div class="file_input_div">
              <button class="btn btn_crud_default">이미지 변경</button>
              <input
                id="image"
                type="file"
                name="image"
                class="file_input_hidden"
                @change="$emit('change-lecture', $event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="exp">
        기본 이미지는 정담임 선생님의 CW 이미지가 선택됩니다.
      </div>
    </div>
    <div class="tit">담당 선생님</div>
    <div class="move_section">
      <div class="list_section">
        <div class="input-group input-search">
          <input type="text" placeholder="선생님 이름" class="form-control" />
          <div class="input-group-append">
            <button class="btn icons_x_circle_off" type="button"></button>
            <button class="btn icons_search_off" type="button"></button>
          </div>
        </div>
        <AllTeacherList
          :dataList="teacherList"
          :teacher="lecture.teacher"
          :spare="lecture.spareTeacher"
          @add-teacher="$emit('add-teacher', $event)"
          @add-spare-teacher="$emit('add-spare-teacher', $event)"
          @show-menu="$emit('show-menu', $event)"
        />
      </div>
      <div class="list_section">
        <div class="list_area_all">
          <TeacherList
            :teacherList="lecture.teacher"
            @delete="$emit('delete-teacher', $event)"
          />
          <TeacherList
            :teacherList="lecture.spareTeacher"
            @delete="$emit('delete-spare-teacher', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherList from '../TeacherList.vue'
import AllTeacherList from './ChangeLectureAllTeacherList.vue'

export default {
  name: 'LectruenChangeLeftSection',
  components: { AllTeacherList, TeacherList },
  props: {
    lecture: {
      type: Object,
      default: () => {},
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
