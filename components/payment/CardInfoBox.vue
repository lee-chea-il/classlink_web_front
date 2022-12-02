<template>
  <div class="step-2">
    <div v-show="!isCardInfoTab" class="page_title">
      등록된 카드 정보를 확인합니다.
    </div>
    <div class="info_box">
      <div class="title_area">
        <span>청구 연락처</span>
        <i class="icons_pencil_off" @click="$emit('click-updateIcon', 0)"></i>
      </div>
      <div class="info_area">
        <div class="form-group">
          <label for="">이름</label>
          <div class="col">{{ myCardInfo.billingContact.name }}</div>
        </div>
        <div class="form-group">
          <label for="">이메일</label>
          <div class="col">{{ myCardInfo.billingContact.email }}</div>
        </div>
        <div class="form-group">
          <label for="">휴대전화</label>
          <div class="col">{{ myCardInfo.billingContact.phone }}</div>
        </div>
        <div class="form-group">
          <label for="">회사/조직 이름</label>
          <div class="col">{{ myCardInfo.billingContact.groupName }}</div>
        </div>
        <div class="form-group">
          <label for="">주소</label>
          <div class="col">{{ myCardInfo.billingContact.address }}</div>
        </div>
      </div>
      <!-- [개발참조]수정일 경우 박스 -->
      <div v-show="isBillingContact" class="modify_section">
        <div class="modify_area">
          <div class="title_area">
            <span>청구 연락처</span>
          </div>
          <div class="info_area">
            <div class="form-group">
              <label for="">이름</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="name"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.name"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">이메일</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="email"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.email"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">휴대전화</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="phone"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.phone"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">회사/조직 이름</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="groupName"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.groupName"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">주소</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="address"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.address"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">동/호</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="addressDetail"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.addressDetail"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">도시</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="city"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.city"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">주/도</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="state"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.state"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">우편번호</label>
              <div class="col">
                <input
                  id="billingContact"
                  name="postCode"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.billingContact.postCode"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">국가/지역</label>
              <div class="col">
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ cardInfo.billingContact.country }}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">등록한 국가01</a>
                    <a class="dropdown-item" href="#">등록한 국가02</a>
                    <a class="dropdown-item" href="#">등록한 국가03</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn_area">
          <button
            class="btn btn_crud_point"
            @click="$emit('click-save', 'billingContact')"
          >
            저장
          </button>
          <button
            class="btn btn_crud_default"
            @click="$emit('click-cancel', 'billingContact')"
          >
            취소
          </button>
        </div>
      </div>

      <div class="title_area">
        <span>구매자 연락처</span>
        <i class="icons_pencil_off" @click="$emit('click-updateIcon', 1)"></i>
      </div>
      <div class="info_area">
        <!-- <div class="form-group">
          <label for="">연락처 정보</label>
          <div class="col">청구지 연락처와 동일</div>
        </div> -->
        <div class="form-group">
          <label for="">이름</label>
          <div class="col">{{ myCardInfo.buyerContact.name }}</div>
        </div>
        <div class="form-group">
          <label for="">이메일</label>
          <div class="col">{{ myCardInfo.buyerContact.email }}</div>
        </div>
        <div class="form-group">
          <label for="">휴대전화</label>
          <div class="col">{{ myCardInfo.buyerContact.phone }}</div>
        </div>
        <div class="form-group">
          <label for="">주소</label>
          <div class="col">{{ myCardInfo.buyerContact.address }}</div>
        </div>

        <div class="form-group">
          <label for="">사업자 번호</label>
          <div class="col">-</div>
        </div>
      </div>
      <!-- [개발참조]수정일 경우 박스 - 구매자 연락처 -->
      <div v-show="isBuyerContact" class="modify_section">
        <div class="modify_area">
          <div class="title_area">
            <span>구매자 연락처</span>
          </div>
          <div class="info_area font04">
            <div class="custom-control custom-checkbox form-inline">
              <input
                id="checkbox01"
                type="checkbox"
                class="custom-control-input"
                @input="$emit('click-sameContact', $event)"
              />
              <label class="custom-control-label check01" for="checkbox01"
                >청구지 연락처와 동일</label
              >
            </div>
            <div class="form-group">
              <label for="">이름</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="name"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.name"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">이메일</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="email"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.email"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">휴대전화</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="phone"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.phone"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">회사/조직 이름</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="groupName"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.groupName"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">주소</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="address"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.address"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">동/호</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="addressDetail"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.addressDetail"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">도시</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="city"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.city"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">주/도</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="state"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.state"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">우편번호</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="postCode"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.postCode"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">국가/지역</label>
              <div class="col">
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ cardInfo.buyerContact.country }}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">등록한 국가01</a>
                    <a class="dropdown-item" href="#">등록한 국가02</a>
                    <a class="dropdown-item" href="#">등록한 국가03</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">사업자 등록한 경우</label>
              <div class="col">
                <input
                  id="buyerContact"
                  name="businessNumber"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.buyerContact.businessNumber"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="btn_area">
          <button
            class="btn btn_crud_point"
            @click="$emit('click-save', 'buyerContact')"
          >
            저장
          </button>
          <button
            class="btn btn_crud_default"
            @click="$emit('click-cancel', 'buyerContact')"
          >
            취소
          </button>
        </div>
      </div>

      <div class="title_area">
        <span>결제 방법</span>
        <i class="icons_pencil_off" @click="$emit('click-updateIcon', 2)"></i>
      </div>
      <div class="info_area">
        <div class="form-group">
          <label for="">지불 방법</label>
          <div class="col">{{ myCardInfo.paymentType.paymentType }}</div>
        </div>
        <div class="form-group">
          <label for="">카드 번호</label>
          <div class="col">{{ myCardInfo.paymentType.cardNumber }}</div>
        </div>
      </div>
      <!-- [개발참조]수정일 경우 박스 - 결제방법(신용카드) -->
      <div v-show="isPaymentType" class="modify_section">
        <div class="modify_area">
          <div class="title_area">
            <span>결제 방법</span>
          </div>
          <div class="info_area">
            <div class="pay_choice">
              <div class="credit"><span class="font03">신용카드</span></div>
              <div class="account"><span class="font03">계좌이체</span></div>
            </div>
            <div class="form-group">
              <label for="" class="font04">전체주소</label>
              <div class="col">
                <div class="custom-control custom-checkbox form-inline address">
                  <input
                    id="checkbox02"
                    type="checkbox"
                    class="custom-control-input"
                    @input="$emit('click-sameAddress', $event)"
                  />
                  <label
                    class="custom-control-label address02 font04"
                    for="checkbox02"
                    >청구지 주소와 동일</label
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">카드 소유자 이름</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="name"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.name"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">신용카드 번호</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="cardNumber"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.cardNumber"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">CVV</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="cvv"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.cvv"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">만료일</label>
              <div class="col">
                <div class="dropdown form-inline">
                  <input
                    id="paymentType"
                    name="expirationDateYear"
                    type="text"
                    placeholder=""
                    class="form-control date"
                    :value="cardInfo.paymentType.expirationDateYear"
                    @input="$emit('change-input', $event)"
                  />
                </div>
                년
                <div class="dropdown form-inline">
                  <input
                    id="paymentType"
                    name="expirationDateMonth"
                    type="text"
                    placeholder=""
                    class="form-control date"
                    :value="cardInfo.paymentType.expirationDateMonth"
                    @input="$emit('change-input', $event)"
                  />
                </div>
                월
              </div>
            </div>
            <div class="form-group">
              <label for="">주소</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="address"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.address"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">동/호</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="addressDetail"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.addressDetail"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">도시</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="city"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.city"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">주/도</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="state"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.state"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">우편번호</label>
              <div class="col">
                <input
                  id="paymentType"
                  name="postCode"
                  type="text"
                  placeholder=""
                  class="form-control"
                  :value="cardInfo.paymentType.postCode"
                  @input="$emit('change-input', $event)"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="">국가/지역</label>
              <div class="col">
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ cardInfo.paymentType.country }}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">등록한 국가01</a>
                    <a class="dropdown-item" href="#">등록한 국가02</a>
                    <a class="dropdown-item" href="#">등록한 국가03</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn_area">
          <button
            class="btn btn_crud_point"
            @click="$emit('click-save', 'paymentType')"
          >
            저장
          </button>
          <button
            class="btn btn_crud_default"
            @click="$emit('click-cancel', 'paymentType')"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardInfoBox',
  props: {
    cardInfo: {
      type: Object,
      default: () => {},
    },
    isBillingContact: {
      type: Boolean,
      default: false,
    },
    isBuyerContact: {
      type: Boolean,
      default: false,
    },
    isPaymentType: {
      type: Boolean,
      default: false,
    },
    myCardInfo: {
      type: Object,
      default: () => {},
    },
    isCardInfoTab: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.show {
  display: block;
}
.date {
  width: 100px;
}
</style>
