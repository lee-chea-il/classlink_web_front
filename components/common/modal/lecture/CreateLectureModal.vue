<template>
  <div
    id="modalLectureRegi"
    class="modal fade modal_ac_manage_lec"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="background_close" />
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <ModalHeader :title="modalTitle" />
        <div class="modal-body">
          <div class="cnts_section">
            <!-- 왼쪽 SECTION -->
            <LeftSection
              :teacherList="teacherList"
              :lectureInfo="lectureInfo"
              :searchValue="searchData.teacher"
              @filter-teacher="$emit('filter-teacher', $event)"
              @clear-teacher="$emit('clear-teacher')"
              @change-input="$emit('change-input', $event)"
              @show-menu="$emit('show-menu', $event)"
              @add-teacher="$emit('add-teacher', $event)"
              @add-spare-teacher="$emit('add-spare-teacher', $event)"
              @delete-teacher="$emit('delete-teacher', $event)"
              @delete-spare-teacher="$emit('delete-spare-teacher', $event)"
            />
            <!--/. 왼쪽 SECTION -->
            <!-- 오른쪽 SECTION -->
            <RightSection
              :classList="classList"
              :lectureInfo="lectureInfo"
              :searchValue="searchData.class"
              @clear-class="$emit('clear-class')"
              @add-class="$emit('add-class', $event)"
              @change-input="$emit('change-input', $event)"
              @delete-class="$emit('delete-class', $event)"
            />
            <!-- /.오른쪽 SECTION -->
          </div>
        </div>
        <CreateLectureBtn :isDisabled="isDisabled(lectureInfo)" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from '~/components/common/ModalHeader.vue'
import LeftSection from '~/components/lecture/createLecture/LeftSection.vue'
import RightSection from '~/components/lecture/createLecture/RightSection.vue'
import CreateLectureBtn from '~/components/lecture/createLecture/CreateLectureBtn.vue'

export default {
  name: 'CreateLectureModal',
  components: {
    LeftSection,
    RightSection,
    CreateLectureBtn,
    ModalHeader,
  },
  props: {
    modalTitle: { type: String, default: '' },
    lectureInfo: { type: Object, default: () => {} },
    teacherList: { type: Array, default: () => [] },
    classList: { type: Array, default: () => [] },
    searchData: { type: Object, default: () => {} },
  },
  methods: {
    isDisabled(obj) {
      if (
        obj.title !== '' &&
        obj.homeroom_teacher.length > 0 &&
        obj.classroom.length > 0
      )
        return false
      else return true
    },
  },
}
</script>

<style scoped>
.background_close {
  background: none;
}
</style>
