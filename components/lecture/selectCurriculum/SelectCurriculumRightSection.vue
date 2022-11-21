<template>
  <div class="class_section">
    <div class="tit"></div>
    <div class="move_section my_cur">
      <div class="list_section selected">
        <div class="sum_info">선택된 커리큘럼 <span>2</span>개</div>
        <div class="list_area02">
          <!-- 탭 내용01 -->
          <div
            id="mydata"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="grade-tab"
          >
            <ul>
              <li>
                <!-- 리스트01 -->
                <div class="list">
                  <i id="show_sublist01" class="btn icons_arrow_r"></i>
                  <span class="text">국어</span>
                  <i class="icons_minus_circle_off"></i>
                </div>
                <!-- 리스트01_sub-->
                <div id="list_sub01" class="list_sub">
                  <ul>
                    <li>
                      <i id="show_sublist01_sub" class="btn icons_arrow_r"></i>
                      <span class="text">대단원1</span>
                      <i class="icons_minus_circle_off icon"></i>
                    </li>
                  </ul>
                </div>
                <!-- /.리스트01_sub-->
                <!-- 리스트01_sub_sub-->
                <div id="list_sub01_sub" class="list_sub_sub">
                  <ul>
                    <li>
                      <span class="text">소단원1.link</span>
                      <i class="icons_minus_circle_off"></i>
                      <!-- <div class="more_list" style="display: none;">
																		<ul>
																			<li>다운로드</li>
																			<li>수정</li>
																			<li>보기</li>
																			<li>삭제</li>
																			<li>복사</li>
																		</ul>
																	</div> -->
                    </li>
                    <li>
                      <span class="text">소단원2.link</span>
                      <i class="icons_minus_circle_off"></i>
                      <!-- <div class="more_list" style="display: none;">
																		<ul>
																			<li>다운로드</li>
																			<li>수정</li>
																			<li>보기</li>
																			<li>삭제</li>
																			<li>복사</li>
																		</ul>
																	</div> -->
                    </li>
                  </ul>
                </div>
                <!-- /.리스트01_sub_sub-->
                <!-- /.리스트01 -->
              </li>
              <li>
                <!-- 리스트02 -->
                <div class="list">
                  <i id="show_sublist02" class="btn icons_arrow_r"></i>
                  <span class="text">수학</span>
                  <i class="icons_minus_circle_off"></i>
                </div>
                <!-- /.리스트02 -->
              </li>
            </ul>
          </div>
          <!-- /.탭 내용01 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
