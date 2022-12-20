<template>
  <!-- 자료등록01:자료의 6가지 구분 선택 (팝업 L) -->
  <div
    id="modalDataregi"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <ModalHeader
          idProps="referenceSelectClose"
          title="자료 등록"
          @close="$emit('close')"
        />

        <div class="modal-body">
          <div class="modal_dataregi">
            <!-- 모달 내용 구분 class-->
            <div class="box_up">
              <SelectItem
                title="동영상"
                className="box01"
                icon="regi_icon01"
                target="#modalDataregi02"
                desc="mp4, mp3, avi, mov, flv 등의
                동영상 파일을 업로드할 수 있습니다."
                @click-item="$emit('set-type', '01')"
              />
              <SelectItem
                title="문서"
                className="box02"
                icon="regi_icon02"
                target="#modalDataregi02"
                desc="pdf, ppt, doc, xls, hwp, txt 등의
                문서 파일을 업로드할 수 있습니다."
                @click-item="$emit('set-type', '02')"
              />

              <SelectItem
                title="퀴즈"
                className="box03"
                icon="regi_icon03"
                desc="OX 퀴즈, 단답형 퀴즈,
                주관식 단답형 퀴즈를 만들 수 있습니다."
                @click-item="$emit('add-quiz')"
              />
            </div>

            <div class="box_down">
              <SelectItem
                title="쪽지시험"
                className="box04"
                icon="regi_icon04"
                desc="OX 퀴즈, 단답형 퀴즈,
                주관식 단답형 퀴즈를 만들 수 있습니다."
                @click-item="$emit('add-test')"
              />
              <SelectItem
                title="유튜브"
                className="box05"
                icon="regi_icon05"
                target="#modalDataregi03"
                desc="유튜브 동영상 URL을 등록할 수 있습니다.
                영상의 제목과 설명을 자동으로 가져옵니다."
                @click-item="$emit('set-type', '05')"
              />
              <SelectItem
                title="URL"
                className="box06"
                icon="regi_icon06"
                target="#modalDataregi03"
                desc="OX 퀴즈, 단답형 퀴즈,
                주관식 단답형 퀴즈를 만들 수 있습니다."
                @click-item="$emit('set-type', '06')"
              />
            </div>
            <SelectItem
              v-if="pageRoot === 'world'"
              title="배경음"
              className="box07"
              icon="regi_icon07"
              target="#modalDataregi02"
              desc="mp3, wav, aac, flac, dsd 등의
              음원 파일을 업로드할 수 있습니다."
              @click-item="$emit('set-type', '07')"
            />
          </div>
        </div>
        <div class="modal-footer" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import SelectItem from '../common/SelectItem.vue'

export default {
  name: 'SelectReferenceModal',
  components: { ModalHeader, SelectItem },
  props: {
    pageRoot: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
