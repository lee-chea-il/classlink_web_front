<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRegiModi"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 수정" @close="$emit('close')" />

          <div class="modal-body">
            <div class="modal_dataregi row">
              <!-- 모달 내용 구분 class-->
              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="reference"
                :pushKeyword="pushKeyword"
                @change-input="$emit('change-input', $event)"
                @set-keyword="$emit('set-keyword', $event)"
                @change-keyword="$emit('changePushKeyword', $event)"
                @delete-keyword="$emit('delete-keyword', $event)"
              />
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="right_area">
                <div class="regi_area right">
                  <div class="thumb_box">
                    <!-- [개발참조] 동영상, 문서 미리보기 칸 -->
                    <div class="row">
                      <div class="title">미리보기</div>
                      <div class="thumbnail_view">
                        <video
                          v-if="reference.uploadType === 'video'"
                          id="video"
                          class="video"
                          :src="reference.savePath"
                          controls
                        ></video>
                        <embed
                          v-if="reference.uploadType === 'pdf'"
                          class="embed"
                          :src="reference.savePath"
                        />
                        <iframe
                          v-if="
                            reference.uploadType === 'youtube' ||
                            reference.uploadType === 'url'
                          "
                          class="iframe"
                          :src="reference.savePath"
                        />
                      </div>
                      <label for="" class="data_title name cont"
                        >자료 구분</label
                      >
                      <div class="col name cont">
                        <span>프랜차이즈</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="data_title cont">유형</label>
                      <div class="col cont">
                        <span>동영상</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="data_title cont">등록 일시</label>
                      <div class="col cont">
                        <span>2022.07.14 18:28:54</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="data_title cont">용량</label>
                      <div class="col cont">
                        <span>21.4MB</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="data_title cont">등록자</label>
                      <div class="col cont">
                        <span>홍길동</span>
                      </div>
                    </div>

                    <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
                    <!-- <div class="row">
										<button for="" class="btn btn_crud_default fileChange">파일 교체</button>
									</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
            <button class="btn btn_crud_point">등록</button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>
            <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
            <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import ReferenceAddLeftField from '@/components/reference/ReferenceAddLeftField.vue'

export default {
  name: 'ReferenceChangeModal',
  components: { ReferenceAddLeftField, ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    reference: {
      type: Object,
      default: () => {},
    },
    pushKeyword: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.video,
.embed,
.iframe {
  width: 100%;
  height: 100%;
}
</style>
