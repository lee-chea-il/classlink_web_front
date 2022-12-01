<template>
  <div>
    <!-- container -->
    <div id="content" class="content">
      <div class="content_area">
        <!--  3Depth -->
        <NavBox />
        <div class="tab-content depth03 ac_manage_pay">
          <div class="tab-pane active">
            <!-- 검색 영역 -->
            <div class="search_section">
              <div class="right_area">
                <button class="btn btn_crud_default" onclick="history.back();">
                  돌아가기
                </button>
              </div>
            </div>
            <!-- 검색 영역 -->

            <div class="info_box">
              <div class="title_area">
                <span>청구 연락처</span>
                <i class="icons_pencil_off"></i>
              </div>
              <div class="info_area">
                <div class="form-group">
                  <label for="">이름</label>
                  <div class="col">홍길동</div>
                </div>
                <div class="form-group">
                  <label for="">이메일</label>
                  <div class="col">example@mail.com</div>
                </div>
                <div class="form-group">
                  <label for="">휴대전화</label>
                  <div class="col">010-1111-2222</div>
                </div>
                <div class="form-group">
                  <label for="">회사/조직 이름</label>
                  <div class="col">에듀케이</div>
                </div>
                <div class="form-group">
                  <label for="">주소</label>
                  <div class="col">경기도 이천시 증포동 381</div>
                </div>
              </div>
              <!-- [개발참조]수정일 경우 박스 - 청구연락처 -->
              <div class="modify_section">
                <div class="modify_area">
                  <div class="title_area">
                    <span>청구 연락처</span>
                  </div>
                  <div class="info_area">
                    <div class="form-group">
                      <label for="">이름</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">이메일</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">휴대전화</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">회사/조직 이름</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">주소</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">동/호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">도시</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">주/도</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">우편번호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
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
                            대한민국
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
                  <button class="btn btn_crud_point">저장</button>
                  <button class="btn btn_crud_default">취소</button>
                </div>
              </div>

              <div class="title_area">
                <span>구매자 연락처</span>
                <i class="icons_pencil_off"></i>
              </div>
              <div class="info_area">
                <div class="form-group">
                  <label for="">연락처 정보</label>
                  <div class="col">청구지 연락처와 동일</div>
                </div>
                <div class="form-group">
                  <label for="">사업자 번호</label>
                  <div class="col">-</div>
                </div>
              </div>
              <!-- [개발참조]수정일 경우 박스 - 구매자 연락처 -->
              <div class="modify_section">
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
                      />
                      <label
                        class="custom-control-label check01"
                        for="checkbox01"
                        >청구지 연락처와 동일</label
                      >
                    </div>
                    <div class="form-group first_name">
                      <label for="">이름</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">이메일</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">휴대전화</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">회사/조직 이름</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">주소</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">동/호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">도시</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">주/도</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">우편번호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group dropdown_title">
                      <label for="">국가/지역</label>
                      <div class="col">
                        <div class="dropdown form-inline">
                          <button
                            class="btn dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            대한민국
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
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn_area">
                  <button class="btn btn_crud_point">저장</button>
                  <button class="btn btn_crud_default">취소</button>
                </div>
              </div>

              <div class="title_area">
                <span>결제 방법</span>
                <i class="icons_pencil_off"></i>
              </div>
              <div class="info_area">
                <div class="form-group">
                  <label for="">지불 방법</label>
                  <div class="col">Credit Card</div>
                </div>
                <div class="form-group">
                  <label for="">카드 번호</label>
                  <div class="col">************0000</div>
                </div>
              </div>
              <!-- [개발참조]수정일 경우 박스 - 결제방법(신용카드) -->
              <div class="modify_section">
                <div class="modify_area">
                  <div class="title_area">
                    <span>결제 방법</span>
                  </div>
                  <div class="info_area">
                    <div class="pay_choice">
                      <div class="credit">
                        <span class="font03">신용카드</span>
                      </div>
                      <div class="account">
                        <span class="font03">계좌이체</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="font04">전체주소</label>
                      <div class="col">
                        <div
                          class="custom-control custom-checkbox form-inline address"
                        >
                          <input
                            id="checkbox02"
                            type="checkbox"
                            class="custom-control-input"
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
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">신용카드 번호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">CVV</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">만료일</label>
                      <div class="col">
                        <div class="dropdown form-inline">
                          <button
                            class="btn dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            선택하세요
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">2022</a>
                            <a class="dropdown-item" href="#">2023</a>
                            <a class="dropdown-item" href="#">2024</a>
                          </div>
                        </div>
                        <div class="dropdown form-inline">
                          <button
                            class="btn dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            선택하세요
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">01</a>
                            <a class="dropdown-item" href="#">02</a>
                            <a class="dropdown-item" href="#">03</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">주소</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">동/호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">도시</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">주/도</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">우편번호</label>
                      <div class="col">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
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
                            대한민국
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
                  <button class="btn btn_crud_point">저장</button>
                  <button class="btn btn_crud_default">취소</button>
                </div>
              </div>
            </div>

            <div class="btn_area">
              <!-- <button class="btn btn_crud_default" onclick="history.back();">뒤로</button>
						<button class="btn btn_crud_point" onclick="location.href = '(완)결제관리-현재요금제편집03.html'">다음</button> -->
              <button
                class="btn btn_crud_point"
                type="button"
                data-toggle="modal"
                data-target="#modalServiceSub"
                data-dismiss="modal"
              >
                서비스 구독하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //container -->

    <!-- 팝업 S2- 결제관리 - 카드정보 - 카드 등록 확인 팝업 -->
    <!-- [개발참조] 서비스 구독 버튼 클릭 시 출력되는 팝업 -->
    <div
      id="modalServiceSub"
      class="modal fade double"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm s2">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">자료 공유</h5>
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
            <p class="title">
              카드가 등록되었습니다. <br />
              바로 서비스를 구독할까요?
            </p>
            ‘예’를 선택하시면 서비스 구독 페이지로 이동합니다.
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point" data-dismiss="modal">예</button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              아니오
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
export default {
  name: 'CardInfo',
  components: {
    NavBox,
  },
}
</script>
<style scoped></style>
