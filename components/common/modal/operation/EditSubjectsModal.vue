<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modal_subject_modify"
      class="modal double modal_subject_modify modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">과목 수정</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group input-search form-inline">
              <button class="btn btn_crud_default" @click="$emit('click-add')">
                과목 추가
              </button>
            </div>
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <thead>
                    <tr>
                      <th></th>
                      <th class="th01">과목</th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <tbody>
                    <tr v-show="isAddSubject">
                      <td class="form_add td04 row">
                        <input
                          type="text"
                          placeholder="과목 이름 입력"
                          class="form-control subject_form"
                          :value="newSubjectTitle"
                          @input="$emit('change-input', $event)"
                        />
                        <button
                          class="btn btn_crud_point"
                          @click="$emit('add-subject')"
                        >
                          등록
                        </button>
                        <i
                          class="icons_x_circle_off"
                          @click="$emit('close-add')"
                        ></i>
                      </td>
                    </tr>
                    <tr v-for="(item, idx) in newSubjectList" :key="idx">
                      <td
                        v-if="isUpdateSubject && newSubject === item.is_title"
                        class="form_add td04 row"
                      >
                        <input
                          type="text"
                          class="form-control subject_form"
                          :value="newSubjectTitle"
                          @input="$emit('change-input', $event)"
                        />
                        <button class="btn btn_crud_point">저장</button>
                        <i
                          class="icons_x_circle_off"
                          @click="$emit('close-add')"
                        ></i>
                      </td>
                      <td v-else>
                        {{ item.is_title }}
                      </td>
                      <td>
                        <i
                          class="btn icons_mu_off more_mu"
                          @click.stop="$emit('click-more', item.is_title)"
                        >
                          <div
                            v-show="isMoreBtn && newSubject === item.is_title"
                            class="more_list"
                          >
                            <ul>
                              <li
                                @click.stop="
                                  $emit('update-title', item.is_title)
                                "
                              >
                                수정
                              </li>
                              <li @click.stop="$emit('delete-subject')">
                                삭제
                              </li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">확인</button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'EditSubjectsModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    newSubjectList: {
      type: Array,
      default: () => [],
    },
    isAddSubject: {
      type: Boolean,
      default: false,
    },
    newSubjectTitle: {
      type: String,
      default: '',
    },
    isSubjectMore: {
      type: Array,
      default: () => [],
    },
    isUpdateSubject: {
      type: Boolean,
      default: false,
    },
    isMoreBtn: {
      type: Boolean,
      default: false,
    },
    newSubject: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped></style>
