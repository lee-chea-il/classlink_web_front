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
          :value="lectureInfo.name"
          @input="$emit('change-lecture', $event)"
        />
      </div>
      <div class="form-group">
        <label for="">강좌 이미지</label>
        <div class="input_area">
          <div class="input_file">
            <input
              type="text"
              placeholder="이미지를 선택해 주세요."
              class="file_input_textbox"
              :value="lectureInfo.image"
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
          @add-teacher="$emit('add-teacher', $event)"
          @add-spare-teacher="$emit('add-spare-teacher', $event)"
          @show-menu="$emit('show-menu', $event)"
        />
      </div>
      <div class="list_section">
        <div class="list_area_all">
          <TeacherList
            :teacherList="lectureInfo.teacher"
            @delete="$emit('delete-teacher', $event)"
          />
          <TeacherList
            :teacherList="lectureInfo.spareTeacher"
            @delete="$emit('delete-spare-teacher', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllTeacherList from '~/components/lecture/AllTeacherList.vue'
import TeacherList from '~/components/lecture/TeacherList.vue'

export default {
  name: 'LeftSection',
  components: { AllTeacherList, TeacherList },
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
    lectureInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
