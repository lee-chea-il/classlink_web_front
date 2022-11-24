<template>
  <div
    id="modalFriendsregi"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">일촌 등록</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="input-group input-search form-inline">
            <input
              type="text"
              class="form-control"
              placeholder="일촌 이름 / ID 검색"
              :value="familySearchText"
              @input="$emit('change-Input', $event)"
              @keyup.enter="$emit('search-family')"
            />
            <div class="input-group-append">
              <button
                class="btn icons_x_circle_off"
                type="button"
                @click="$emit('reset-input')"
              ></button>
              <button
                class="btn icons_search_off"
                type="button"
                @click="$emit('search-family')"
              ></button>
            </div>
          </div>
          <div class="table_area">
            <div class="table_thead">
              <table class="tb">
                <!-- <colgroup>
									<col width="55">
									<col width="70">
									<col>
									<col width="90">
									<col width="55">
									<col width="55">
								</colgroup> -->
                <thead>
                  <tr>
                    <th></th>
                    <th class="th01">이름</th>
                    <th class="th02">아이디</th>
                    <th class="th03">연락처</th>
                    <th class="th04">성별</th>
                    <th class="th05">나이</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="table_tbody">
              <table class="tb">
                <!-- <colgroup>
									<col width="55">
									<col width="70">
									<col>
									<col width="90">
									<col width="55">
									<col width="50">
								</colgroup> -->
                <tbody v-if="familySearchList.length !== 0">
                  <tr v-for="(item, idx) in familySearchList" :key="idx">
                    <td>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          :id="item.id"
                          type="checkbox"
                          class="custom-control-input"
                          @input="$emit('check-family', $event)"
                        />
                        <label
                          class="custom-control-label"
                          :for="item.id"
                        ></label>
                      </div>
                    </td>
                    <td>{{ item.name }}</td>
                    <td class="id">{{ item.account }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.gender }}</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="$emit('add-family')"
          >
            등록
          </button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterFamilyModal',
  props: {
    familySearchText: {
      type: String,
      default: '',
    },
    familySearchList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped></style>
