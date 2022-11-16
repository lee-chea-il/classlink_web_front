<template>
  <div
    id="modalLectureRegi"
    class="modal fade modal_ac_manage_lec"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <CreateLectureHeader />
        <div class="modal-body">
          <div class="cnts_section">
            <!-- 왼쪽 SECTION -->
            <LeftSection
              :teacherList="teacherList"
              :lectureInfo="lectureInfo"
              @add-teacher="$emit('add-teacher', $event)"
              @add-spare-teacher="$emit('add-spare-teacher', $event)"
              @show-menu="$emit('show-menu', $event)"
              @delete-teacher="$emit('delete-teacher', $event)"
              @delete-spare-teacher="$emit('delete-spare-teacher', $event)"
              @change-lecture="$emit('change-lecture', $event)"
            />
            <!--/. 왼쪽 SECTION -->
            <!-- 오른쪽 SECTION -->
            <RightSection
              :classList="classList"
              :lectureInfo="lectureInfo"
              @add-class="$emit('add-class', $event)"
              @delete-class="$emit('delete-class', $event)"
              @change-lecture="$emit('change-lecture', $event)"
            />
            <!-- /.오른쪽 SECTION -->
          </div>
        </div>
        <CreateLectureBtn @next-btn="$emit('next-btn')" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateLectureHeader from '~/components/lecture/createLecture/CreateLectureHeader.vue'
import LeftSection from '~/components/lecture/createLecture/LeftSection.vue'
import RightSection from '~/components/lecture/createLecture/RightSection.vue'
import CreateLectureBtn from '~/components/lecture/createLecture/CreateLectureBtn.vue'

export default {
  name: 'CreateLectureModal',
  components: {
    LeftSection,
    RightSection,
    CreateLectureHeader,
    CreateLectureBtn,
  },
  props: {
    lectureInfo: {
      type: Object,
      default: () => {},
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
    classList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
