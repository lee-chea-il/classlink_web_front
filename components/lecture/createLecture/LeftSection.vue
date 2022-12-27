<template>
  <div class="class_section">
    <div class="search_class">
      <div class="form-group">
        <label for="name">강좌 이름</label>

        <CustomModalInput
          id="title"
          name="강좌 이름"
          placeholder="강좌 이름을 입력해주세요."
          rules="min:2|required"
          type="text"
          target="lectureInfo"
          :inputValue="lectureInfo.title"
          @change-input="$emit('change-input', $event)"
        />
      </div>
      <BtnInput
        :value="lectureInfo.image"
        title="강좌 이미지"
        btnTitle="이미지 변경"
        placeholder="이미지를 선택해 주세요"
        target="lectureInfo"
        @change-item="$emit('change-input', $event)"
      />
      <div class="exp">
        기본 이미지는 정담임 선생님의 CW 이미지가 선택됩니다.
      </div>
    </div>
    <div class="tit">담당 선생님</div>
    <div class="move_section">
      <div class="list_section">
        <SearchInput
          placeholder="선생님 이름"
          :value="searchValue"
          name="teacher"
          target="searchData"
          @delete-item="$emit('clear-teacher')"
          @change-input="$emit('change-input', $event)"
        />
        <AllTeacherList
          :dataList="teacherList"
          :teacher="lectureInfo.homeroom_teacher"
          :spare="lectureInfo.assistant_teacher"
          @add-teacher="$emit('add-teacher', $event)"
          @add-spare-teacher="$emit('add-spare-teacher', $event)"
          @show-menu="$emit('show-menu', $event)"
        />
      </div>
      <div class="list_section">
        <div class="list_area_all">
          <TeacherList
            :teacherList="lectureInfo.homeroom_teacher"
            @delete="$emit('delete-teacher', $event)"
          />
          <TeacherList
            :teacherList="lectureInfo.assistant_teacher"
            @delete="$emit('delete-spare-teacher', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnInput from '../custom/BtnInput.vue'
import SearchInput from '../custom/SearchInput.vue'
import CustomModalInput from '~/components/common/custom/CustomModalInput.vue'
import AllTeacherList from '~/components/lecture/AllTeacherList.vue'
import TeacherList from '~/components/lecture/TeacherList.vue'

export default {
  name: 'LeftSection',
  components: {
    AllTeacherList,
    TeacherList,
    CustomModalInput,
    BtnInput,
    SearchInput,
  },
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
    lectureInfo: {
      type: Object,
      default: () => {},
    },
    searchValue: { type: String, default: '' },
  },
}
</script>

<style></style>
