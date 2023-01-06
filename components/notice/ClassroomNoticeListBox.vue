<template>
  <div class="tab-pane active">
    <!-- 검색 영역 -->
    <div class="search_section">
      <div class="left_area">
        <div class="dropdown form-inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            {{ sortChange }}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="$emit('select-sort', $event)"
              >조회 높은 순</a
            >
            <a class="dropdown-item" @click="$emit('select-sort', $event)"
              >최신순</a
            >
            <a class="dropdown-item" @click="$emit('select-sort', $event)"
              >이름순</a
            >
          </div>
        </div>
        <button class="btn btn_crud_danger" @click="$emit('notice-delete')">
          삭제
        </button>
      </div>
      <div class="right_area">
        <div class="input-group input-search form-inline form-search">
          <input
            type="text"
            class="form-control"
            placeholder="제목, 내용, 작성자 검색"
          />
          <div class="input-group-append">
            <button class="btn icons_search_off" type="button"></button>
          </div>
        </div>
        <button
          type="button"
          class="btn btn_crud_point"
          @click="$emit('open-noticeTarget')"
        >
          등록
        </button>
      </div>
    </div>
    <!-- /.검색 영역 -->
    <!-- 테이블 영역 -->
    <!-- [개발참조] 데이터 없을 경우 -->
    <div v-if="noticeList.length === 0" class="page_nodata">
      등록된 공지사항이 없습니다.
    </div>

    <div v-else class="table_section">
      <table class="table">
        <thead>
          <tr>
            <th>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="chkAll"
                  :checked="allCheck"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('click-allcheck')"
                />
                <label class="custom-control-label" for="chkAll"></label>
              </div>
            </th>
            <th>제목</th>
            <th>상태</th>
            <th>기한</th>
            <th>작성자</th>
            <th>대상</th>
            <th>게시일</th>
            <th>조회</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(item, idx) in noticeList" :key="idx">
          <tr>
            <td>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  :id="idx"
                  v-model="item.attributes.check"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('notice-checkbox', item)"
                />
                <label class="custom-control-label" :for="idx"></label>
              </div>
            </td>
            <td class="word">{{ item.attributes.title }}</td>
            <td>
              <span
                class="state"
                :class="{
                  warning: item.attributes.state.includes('D-'),
                }"
              >
                {{ item.attributes.state }}
              </span>
            </td>
            <td>
              <span class="date">
                {{ item.attributes.deadline.startDate }} -
                {{ item.attributes.deadline.endDate }}<br />
                {{ item.attributes.deadline.startTime }} -
                {{ item.attributes.deadline.endTime }}
              </span>
            </td>
            <td>{{ item.attributes.writer }}</td>
            <td>{{ item.attributes.target }}</td>
            <td>{{ item.attributes.createdAt }}</td>
            <td>{{ item.attributes.view_count }}</td>
            <td>
              <button
                id="btnExpand cursor"
                class="btn icons_arrow_dn btn_expand"
                :class="{ up: open_detail.includes(idx) }"
                @click="$emit('open-content', idx)"
              ></button>
            </td>
          </tr>
          <!-- 상세 tr [개발참조] 공지사항 상세 TR 펼치고 접기 -->
          <tr v-if="open_detail.includes(idx)" id="trExpand" class="tr_expand">
            <td></td>
            <td class="td_expand" colspan="8">
              <div class="file_info">
                <span class="file_icon"></span>
                일반 첨부파일 1개(10KB)
                <span class="save">모두 저장</span>
              </div>
              <div class="file_name">컴플레인 응대 매뉴얼.hwp</div>
              <div class="notice_contents">
                {{ item.attributes.content }}
              </div>
              <div class="functional_area">
                <div class="thumbnail_area">
                  <!-- <div
                          class="thumbnail"
                          style="
                            background-image: url('../images/sample_teacher.jpg');
                          "
                        ></div> -->
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail"></div>
                  <div class="thumbnail">
                    <div class="more_cover">+3</div>
                  </div>
                </div>
                <div class="btns_area">
                  <NuxtLink
                    class="btn btn_crud_default"
                    :to="`/management/notice/modify/classroom/${item.id}`"
                    >수정</NuxtLink
                  >
                  <button
                    class="btn btn_crud_default"
                    @click="$emit('open-detail', item.attributes)"
                  >
                    상세
                  </button>
                  <button
                    class="btn btn_crud_default"
                    @click="$emit('open-confirm', item.attributes)"
                  >
                    컨펌체크
                  </button>
                </div>
              </div>
              <!-- [개발참조]댓글이 있는 경우 출력됨 -->
              <div v-if="item.attributes.commentCheck === true">
                <div
                  v-if="item.attributes.comments.length !== 0"
                  class="reply_o"
                >
                  <div class="ReplyBox">
                    <div class="button_comment">
                      <span class="icon_reply_new"></span>
                      댓글
                      <strong class="num">{{
                        item.attributes.comments.length
                      }}</strong>
                    </div>
                  </div>
                  <div class="CommentBox">
                    <div class="comment_option">
                      <h3 class="comment_title">댓글</h3>
                      <div class="comment_tab">
                        <ul class="comment_tab_list">
                          <li class="comment_tab_item">
                            <a
                              href="#"
                              role="button"
                              aria-selected="true"
                              class="comment_tab_button"
                              >등록순</a
                            >
                          </li>
                          <li class="comment_tab_item">
                            <a
                              href="#"
                              role="button"
                              aria-selected="false"
                              class="comment_tab_button"
                              >최신순</a
                            >
                          </li>
                        </ul>
                        <span type="button"><i class="icons_refresh"></i></span>
                      </div>
                    </div>
                  </div>
                  <ul class="comment_list">
                    <li
                      v-for="(items, id) in item.attributes.comments"
                      :key="id"
                      class="CommentItem"
                    >
                      <div
                        class="comment_area"
                        :class="
                          items.name === item.attributes.writer
                            ? 'CommentItem--mine'
                            : ''
                        "
                      >
                        <i class="icons_user comment_thumb"></i>
                        <div class="comment_box">
                          <div class="comment_nick_box">
                            <div class="comment_nick_info">
                              <a
                                href="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                class="comment_nickname"
                                >{{ items.name }}</a
                              >
                              <!-- [개발참조]작성자일 경우에 붙는 아이콘 -->
                              <span
                                v-if="items.name === item.attributes.writer"
                                class="comment_badge_writer"
                                >작성자</span
                              >
                            </div>
                          </div>
                          <div class="comment_text_box">
                            <p class="comment_text_view">
                              <span class="text_comment">{{
                                items.content
                              }}</span>
                            </p>
                          </div>
                          <div class="comment_info_box">
                            <span class="comment_info_date"
                              >{{ items.date }} {{ items.time }}</span
                            >
                            <a
                              href="#"
                              role="button"
                              class="comment_info_button"
                              >답글쓰기</a
                            >
                          </div>
                          <!-- [개발참조]본인 댓글일때 출력되는 메뉴버튼 -->
                          <div class="comment_tool">
                            <i class="btn icons_mu_off more_mu">
                              <div class="more_list" style="display: none">
                                <ul>
                                  <li data-toggle="modal">수정</li>
                                  <li data-toggle="modal">삭제</li>
                                </ul>
                              </div>
                            </i>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li
                          v-for="(iteme, idxd) in items.reply"
                          :key="idxd"
                          class="CommentItem CommentItem--reply"
                        >
                          <div class="comment_area">
                            <i class="icons_user comment_thumb"></i>
                            <div class="comment_box">
                              <div class="comment_nick_box">
                                <div class="comment_nick_info">
                                  <a
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="comment_nickname"
                                    >{{ iteme.name }}</a
                                  >
                                  <!-- [개발참조]작성자일 경우에 붙는 아이콘 -->
                                  <span
                                    v-if="iteme.name === item.attributes.writer"
                                    class="comment_badge_writer"
                                    >작성자</span
                                  >
                                </div>
                              </div>
                              <div class="comment_text_box">
                                <p class="comment_text_view">
                                  <span class="text_comment"
                                    >안녕하십니까? 홍길동 학원장입니다. 컴플레인
                                    관련 이슈사항 공지드립니다.</span
                                  >
                                </p>
                              </div>
                              <div class="comment_info_box">
                                <span class="comment_info_date"
                                  >2022.11.24. 23:55</span
                                >
                                <a
                                  href="#"
                                  role="button"
                                  class="comment_info_button"
                                  >답글쓰기</a
                                >
                              </div>
                              <!-- [개발참조]본인 댓글일때 출력되는 메뉴버튼 -->
                              <div class="comment_tool">
                                <i class="btn icons_mu_off more_mu">
                                  <div class="more_list" style="display: none">
                                    <ul>
                                      <li data-toggle="modal">수정</li>
                                      <li data-toggle="modal">삭제</li>
                                    </ul>
                                  </div>
                                </i>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li
                          class="CommentItem CommentItem--reply CommentItem--textarea"
                        >
                          <div class="CommentWriter">
                            <div class="comment_inbox">
                              <textarea
                                placeholder="댓글을 남겨보세요"
                                rows="1"
                                class="comment_inbox_text"
                              ></textarea>
                            </div>
                            <div class="comment_attach">
                              <div class="register_box">
                                <a
                                  href="#"
                                  role="button"
                                  class="btn btn_crud_default text_regi"
                                  >등록</a
                                >
                              </div>
                            </div>
                          </div>
                          <i class="icons_x_circle_off"></i>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div class="CommentWriter CommentWriter_main">
                    <div class="comment_inbox">
                      <textarea
                        placeholder="댓글을 남겨보세요"
                        rows="1"
                        class="comment_inbox_text"
                      ></textarea>
                    </div>
                    <div class="comment_attach">
                      <div class="register_box">
                        <a
                          href="#"
                          role="button"
                          class="btn btn_crud_default text_regi"
                          >등록</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- [개발참조]댓글이 없는 경우 출력 -->
                <div v-else class="reply_x">
                  <div class="ReplyBox">
                    <div class="button_comment">
                      <span class="icon_reply"></span>
                      댓글
                      <strong class="num">0</strong>
                    </div>
                  </div>
                  <div class="CommentBox">
                    <div class="comment_option">
                      <h3 class="comment_title">댓글</h3>
                    </div>
                  </div>
                  <div class="CommentWriter CommentWriter_main">
                    <div class="comment_inbox">
                      <textarea
                        placeholder="댓글을 남겨보세요"
                        rows="1"
                        class="comment_inbox_text"
                      ></textarea>
                    </div>
                    <div class="comment_attach">
                      <div class="register_box">
                        <a
                          href="#"
                          role="button"
                          class="btn btn_crud_default text_regi"
                          >등록</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <!-- /.상세 tr -->
        </tbody>
      </table>
    </div>
    <!-- /.테이블 영역 -->
    <!-- 페이징 영역 -->
    <div class="pagination_section">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              <span class="previous"></span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link active" href="#">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <span class="next"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.페이징 영역 -->
  </div>
</template>

<script>
export default {
  name: 'ClassroomNoticeListBox',
  props: {
    sortChange: {
      type: String,
      default: '',
    },
    noticeList: {
      type: Array,
      default: () => [],
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
    open_detail: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.table tbody + tbody {
  border-top: 0;
}
.CommentItem--reply {
  border-top: 0.4px solid #d1d3d4 !important;
}
.word {
  max-width: 525px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cursor {
  cursor: pointer;
}
</style>
