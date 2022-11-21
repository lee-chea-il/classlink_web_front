<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLectureRegi"
      class="modal modal_ac_manage_lec modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <Header title="강좌 수정" @close="$emit('close')" />
          <div class="modal-body">
            <div class="cnts_section">
              <!-- 왼쪽 SECTION -->
              <LeftSection
                :lecture="lecture"
                :teacherList="teacherList"
                @change-lecture="$emit('change-lecture', $event)"
                @show-menu="$emit('show-menu', $event)"
                @add-teacher="$emit('add-teacher', $event)"
                @add-spare-teacher="$emit('add-spare-teacher', $event)"
                @delete-teacher="$emit('delete-teacher', $event)"
                @delete-spare-teacher="$emit('delete-spare-teacher', $event)"
              />

              <!-- 오른쪽 SECTION -->
              <RightSection
                :classList="classList"
                :lecture="lecture"
                @add-class="$emit('add-class', $event)"
                @change-lecture="$emit('change-lecture', $event)"
                @delete-class="$emit('delete-class', $event)"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_default" @close="$emit('close')">
              취소
            </button>
            <button
              class="btn btn_crud_point"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalLectureRegi02"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import Header from '../../ModalHeader.vue'
import LeftSection from '~/components/lecture/changeLecture/ChangeLectureLeftSection.vue'
import RightSection from '~/components/lecture/changeLecture/ChangeLectureRightSection.vue'
export default {
  name: 'ChangeLectureModal',
  components: { LeftSection, RightSection, Header },
  props: {
    open: { type: Boolean, default: false },
    lecture: { type: Object, default: () => {} },
    teacherList: { type: Array, default: () => [] },
    classList: { type: Array, default: () => [] },
  },
}
</script>

<style></style>
