<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <CustomPageHeader />

      <div
        class="tab-content depth03 ac_manage_notice ac_manage_notice_personal"
      >
        <div class="tab-pane active notice_person">
          <div id="snb" class="snb">
            <section class="chat_list_search">
              <ul class="alarm_header">
                <!-- [개발참조] 활성화됐을때 class="active" 로 구분됨 -->
                <li class="active">
                  <button class="btn_alarm_menu button" type="button">
                    <span class="icon_person_w"></span>
                    <strong class="text_alarm">학생</strong>
                  </button>
                </li>
                <li class="">
                  <NuxtLink to="/management/notice/individual/chatting">
                    <button class="btn_alarm_menu button" type="button">
                      <span>
                        <span class="icon_talk_off"></span>
                      </span>
                      <strong class="text_alarm">채팅</strong>
                    </button>
                  </NuxtLink>
                </li>
              </ul>
              <div class="search_wrap">
                <div class="input-group input-search form-inline">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="학생 이름 검색"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn icons_x_circle_off"
                      type="button"
                    ></button>
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
              </div>
            </section>
            <section class="chat_list_area">
              <div class="stu_num">학생 &nbsp; <span>999</span></div>
              <!-- [개발참조] 학생탭 활성화된 경우 -->
              <ul class="chat_list">
                <!-- [개발참조]오른쪽 대화창에 나타나는 채팅방일 경우 배경색 변경 class="active" 으로 구분됨 -->
                <li class="active">
                  <div class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                          <span class="new_mark"
                            ><span class="new_font">new</span></span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

                <li class="">
                  <a class="chat_list_link">
                    <div class="info_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <div @click="onOpenChatModal">
                          <i class="icons_user"></i>
                        </div>
                      </div>
                      <div class="text_wrap">
                        <div class="name_area">
                          <strong class="name">홍나나 학생</strong>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <!-- /. [개발참조] 학생탭 활성화된 경우 -->

              <!-- [개발참조] 검색결과 돌아가기 -->
              <!-- <ul class="chat_list">
								 [개발참조]오른쪽 대화창에 나타나는 채팅방일 경우 배경색 변경 class="active" 으로 구분됨 
								 <li class="active">
									<a href="" class="chat_list_link">
										<div class="info_area">
											<div class="thumbnail_wrap" aria-hidden="true">
												<div data-toggle="modal" data-target="#modalChat" data-dismiss="modal">
													<i class="icons_user"></i>
												</div>
											</div>
											<div class="text_wrap">
												<div class="name_area">
													<strong class="name">홍나나 학생</strong>
													<span class="new_mark"><span class="new_font">new</span></span>
												</div>
											</div>
										</div>
									</a>
								</li>
							</ul>
							<div class="search_back">
								<a class="btn_sch_back">
									<span>돌아가기</span>
									<span class="icon_before"></span>
								</a>
							</div> -->
              <!-- [개발참조] 검색결과가 없을때 -->
              <!-- <div class="none_list_wrap">
								<div class="sch_none_wrap">
									<p class="sch_none_text">
										<span class="strong_blue">홍나나</span>에 대한 <br> 검색결과가 없습니다.
									</p>
									<div class="btn_sch_none">
										<span>전체 목록보기</span>
										<span class="icon_arrow_right_blue"></span>
									</div>
								</div>
							</div> -->
            </section>
            <section class="chat_list_footer">
              <div class="check_wrap">
                <input id="check_delete" type="checkbox" class="blind" />
                <label for="check_delete">
                  <span class="check_box">
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk01"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chk01"></label>
                    </div>
                  </span>
                </label>
              </div>
            </section>
          </div>
          <div id="content_chat" class="content_chat">
            <section class="chat_section">
              <!-- [개발참조] 공지사항이 없을 경우 -->
              <!-- <div class="nodata">공지사항이 없습니다.</div> -->
              <header class="chat_header">
                <div class="chat_header_top">
                  <div class="info_area">
                    <div class="thumbnail_area">
                      <div class="thumbnail_wrap" aria-hidden="true">
                        <i class="icons_user"></i>
                      </div>
                    </div>
                    <div class="text_wrap">
                      <div class="name_area">
                        <strong class="name">홍미미 학생</strong>
                      </div>
                    </div>
                  </div>
                  <div class="chat_header_menu">
                    <div class="chat_menu_wrap">
                      <i
                        class="icons_mobilemu cursor"
                        @click="onClickOpenSetting"
                      ></i>
                      <div v-if="openSetting" class="ly_setting_wrap">
                        <div class="title_section">
                          <h5 class="title_text">설정</h5>
                          <div
                            class="btn_setting_close"
                            @click="onClickOpenSetting"
                          >
                            <i class="icons_close"></i>
                          </div>
                        </div>
                        <ul class="lst_setting_menu">
                          <li>
                            <a
                              class="btn_setting_item"
                              @click="onOpenChatDeleteModal"
                            >
                              <div class="setting_item_wrap">
                                <strong class="btn_text">채팅방 나가기</strong>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <section class="chat_area _chatWindow">
                <ul class="group_message_balloon">
                  <li class="date_check">
                    <span
                      ><em><strong>22. 12. 7.</strong>(수)</em></span
                    >
                  </li>
                  <li class="new_message_balloon_area">
                    <div class="thumbnail_profile _thmbnail">
                      <span class="thumbnail_mask"
                        ><i class="icons_user"></i
                      ></span>
                    </div>
                    <div class="message_balloon card_message">
                      <p>메세지를 입력하세요. 메세지를 입력하세요.</p>
                      <div class="txt_confirm _status">
                        <span class="_time">
                          <em>오전</em>
                          <span>9:37</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="new_message_balloon_area _my">
                    <div class="message_balloon card_message rgt">
                      <p class="_copy_area">
                        메세지를 입력하세요. 메세지를 입력하세요. 메세지를
                        입력하세요. 메세지를 입력하세요.메세지를 입력하세요.
                        메세지를 입력하세요. 메세지를 입력하세요. 메세지를
                        입력하세요.메세지를 입력하세요. 메세지를 입력하세요.
                        메세지를 입력하세요. 메세지를 입력하세요.
                      </p>
                    </div>
                  </li>
                  <li class="new_message_balloon_area _my">
                    <div class="message_balloon card_message rgt space">
                      <div class="message_image" @click="onOpenImgModal">
                        <i class="icons_thumbnail"></i>
                      </div>
                      <div class="txt_confirm _status">
                        <span class="_time">
                          <em>오전</em>
                          <span>9:37</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="new_message_balloon_area _my">
                    <div class="message_balloon card_message rgt">
                      <p class="_copy_area">
                        메세지를 입력하세요. 메세지를 입력하세요. 메세지를
                        입력하세요. 메세지를 입력하세요.메세지를 입력하세요.
                        메세지를 입력하세요. 메세지를 입력하세요. 메세지를
                        입력하세요.메세지를 입력하세요. 메세지를 입력하세요.
                        메세지를 입력하세요. 메세지를 입력하세요.
                      </p>
                    </div>
                  </li>
                  <li class="new_message_balloon_area _my">
                    <div class="message_balloon card_message rgt space">
                      <p class="_copy_area">
                        메세지를 입력하세요. 메세지를 입력하세요. 메세지를
                        입력하세요. 메세지를 입력하세요.메세지를 입력하세요.
                        메세지를 입력하세요. 메세지를 입력하세요. 메세지를
                        입력하세요.메세지를 입력하세요. 메세지를 입력하세요.
                        메세지를 입력하세요. 메세지를 입력하세요.
                      </p>
                      <div class="txt_confirm _status">
                        <span class="_time">
                          <em>오전</em>
                          <span>9:37</span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="date_check">
                    <span
                      ><em><strong>22. 12. 8.</strong>(목)</em></span
                    >
                  </li>
                  <li class="new_message_balloon_area">
                    <div class="thumbnail_profile _thmbnail">
                      <span class="thumbnail_mask"
                        ><i class="icons_user"></i
                      ></span>
                    </div>
                    <div class="message_balloon card_message">
                      <p>메세지를 입력하세요. 메세지를 입력하세요.</p>
                      <div class="txt_confirm _status">
                        <span class="_time">
                          <em>오전</em>
                          <span>9:37</span>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <footer class="chat_write">
                <div>
                  <!-- [개발참조]이모티콘 버튼 클릭 시 대화창 위로 출력됨  -->
                  <div class="chat_layer_sticker">
                    <div class="chat_sticker">
                      <div class="chat_sticker_list">
                        <ul class="chat_lst_sticker_set">
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                          <li>
                            <a><span class="icon_emoticon_off_large"></span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="chat_write_area">
                    <div class="chat_write_wrap">
                      <div class="input_btn_wrap">
                        <label
                          id="imageUploadButton"
                          class="btn_photo"
                          for="imageUploader"
                          role="button"
                        >
                          <i class="icons_thumbnail"></i>
                        </label>
                        <input
                          id="imageUploader"
                          name="files[]"
                          type="file"
                          accept="image/*"
                          multiple=""
                          title="파일선택"
                          style="display: none"
                        />
                        <!-- <form
                          id="imageUploader"
                          class="imageUploader"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <input
                            id="imageUploader"
                            name="files[]"
                            type="file"
                            accept="image/*"
                            multiple=""
                            title="파일선택"
                            style="display: none"
                          />
                        </form> -->
                        <div
                          class="btn_sticker_open"
                          type="button"
                          aria-label="이모티콘 스티커"
                        >
                          <span class="icon_emoticon_off"></span>
                        </div>
                      </div>
                      <div class="chat_input_area">
                        <textarea
                          title="메시지 입력창"
                          class="chat_input"
                          maxlength="2000"
                          placeholder="메시지를 입력하세요."
                        ></textarea>
                        <span class="submit_btn_wrap">
                          <span class="btn_submit" type="submit">
                            <span class="icon_send_off"></span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </div>

    <ChatModal :open="openChatModal.open" @close="onCloseChatModal" />
    <ImgModal :open="openImgModal.open" @close="onCloseImgModal" />
    <ChatDeleteModal
      :open="openChatDeleteModal.open"
      @close="onCloseChatDeleteModal"
    />
  </div>
</template>

<script>
import CustomPageHeader from '@/components/notice/CustomPageHeader.vue'
import ChatModal from '@/components/common/modal/notice/ChatModal.vue'
import ImgModal from '@/components/common/modal/notice/ImgModal.vue'
import ChatDeleteModal from '@/components/common/modal/notice/ChatDeleteModal.vue'
export default {
  name: 'IndividualStudent',
  components: {
    CustomPageHeader,
    ChatModal,
    ImgModal,
    ChatDeleteModal,
  },
  data() {
    return {
      openChatModal: {
        open: false,
      },
      openImgModal: {
        open: false,
      },
      openChatDeleteModal: {
        open: false,
      },

      openSetting: false,
    }
  },
  methods: {
    // 모달
    onOpenChatModal() {
      this.openChatModal.open = true
    },
    onCloseChatModal() {
      this.openChatModal.open = false
    },

    onOpenImgModal() {
      this.openImgModal.open = true
    },
    onCloseImgModal() {
      this.openImgModal.open = false
    },

    onOpenChatDeleteModal() {
      this.openChatDeleteModal.open = true
    },
    onCloseChatDeleteModal() {
      this.openChatDeleteModal.open = false
    },

    // 설정 열기/닫기
    onClickOpenSetting() {
      if (this.openSetting) {
        this.openSetting = false
      } else {
        this.openSetting = true
      }
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
