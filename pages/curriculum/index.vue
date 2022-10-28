<template>
  <div>
    <PageHeader title="자료실" />
    <div class="tab-content depth03 ac_manage_dtr">
				<div class="tab-pane active">
					<!-- 컨트롤 버튼 영역 -->
					<div class="search_section">
						<div class="left_area">
							<div class="btn btn_crud_default">복사</div>
							<button class="btn btn_crud_default">붙여넣기</button>
							<button class="btn btn_crud_default">삭제</button>
						</div>
						<div class="right_area">
							<button class="btn btn_crud_point" data-toggle="modal" data-target="#modalCuriRegi">등록</button>
						</div>
					</div>
					<!-- /.컨트롤 버튼 영역 -->
					
					<!-- [개발참조] 커리큘럼 : 컨텐츠구성 자료실과 동일 -->
					<!-- 2단 분류 컨텐츠 -->
					<div class="divide_section">
						<!-- 왼쪽 영역 -->
						<div class="divide_area left">
							<!-- 탭 컨텐츠 -->
							<ul class="nav nav-tabs" id="myTab" role="tablist">
								<li class="nav-item" role="presentation">
									<button class="nav-link active" id="grade-tab" data-toggle="tab" data-target="#institute" type="button" role="tab" aria-controls="home" aria-selected="true">
										교육기관
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="class-tab" data-toggle="tab" data-target="#franchise" type="button" role="tab" aria-controls="profile" aria-selected="false">
										프랜차이즈
									</button>
								</li>
							</ul>
							<div class="tab-content" id="myTabContent">
								<!-- 탭 내용01 -->
								<div class="tab-pane fade show active" id="institute" role="tabpanel" aria-labelledby="grade-tab">
									<ul>
										<li>
											<!-- 리스트01 -->
											<div class="list">
												<div class="custom-control custom-checkbox form-inline">
													<input type="checkbox" class="custom-control-input" id="chkA01">
													<label class="custom-control-label" for="chkA01"></label>
												</div>
												<i id="show_sublist01" class="btn icons_arrow_r"></i>
												<span class="text">국어</span>
												<i class="icons_plus_circle_off"></i>
											</div>
											<!-- 리스트01_sub-->
											<div id="list_sub01" class="list_sub" style="display: none;">
												<ul>
													<li>
														<div class="custom-control custom-checkbox form-inline">
															<input type="checkbox" class="custom-control-input" id="chkB01">
															<label class="custom-control-label" for="chkB01"></label>
														</div>
														<i id="show_sublist01_sub" class="btn icons_arrow_r"></i>
														<span class="text">대단원1</span>
														<i class="icons_plus_circle_off"></i>
													</li>
												</ul>
											</div>
											<!-- /.리스트01_sub-->
											<!-- 리스트01_sub_sub-->
											<div id="list_sub01_sub" class="list_sub_sub" style="display: none;">
												<ul>
													<li>
														<div class="custom-control custom-checkbox form-inline">
															<input type="checkbox" class="custom-control-input" id="chkC01">
															<label class="custom-control-label" for="chkC01"></label>
														</div>
														<span class="text">자연수의 혼합 계산 영상1.mp4</span>
														<i class="btn icons_mu_off more_mu">
															<div class="more_list" style="display: none;">
																<ul>
																	<li>다운로드</li>
																	<li>수정</li>
																	<li>보기</li>
																	<li>삭제</li>
																	<li>복사</li>
																</ul>
															</div>
														</i>
													</li>
													<li>
														<div class="custom-control custom-checkbox form-inline">
															<input type="checkbox" class="custom-control-input" id="chkC02">
															<label class="custom-control-label" for="chkC02"></label>
														</div>
														<span class="text">자연수의 혼합 계산 영상2.mp4</span>
														<i class="btn icons_mu_off more_mu">
															<div class="more_list" style="display: none;">
																<ul>
																	<li>다운로드</li>
																	<li>수정</li>
																	<li>보기</li>
																	<li>삭제</li>
																	<li>복사</li>
																</ul>
															</div>
														</i>
													</li>
												</ul>
											</div>
											<!-- /.리스트01_sub_sub-->
											<!-- /.리스트01 -->
										</li>
										<li>
											<!-- 리스트02 -->
											<div class="list">
												<div class="custom-control custom-checkbox form-inline">
													<input type="checkbox" class="custom-control-input" id="chkA02">
													<label class="custom-control-label" for="chkA02"></label>
												</div>
												<i id="show_sublist02" class="btn icons_arrow_r"></i>
												<span class="text">수학</span>
												<i class="icons_plus_circle_off"></i>
											</div>
											<div id="list_sub02" class="list_sub" style="display: none;">
												<ul>
													<li>
														<div class="custom-control custom-checkbox form-inline">
															<input type="checkbox" class="custom-control-input" id="chkB02">
															<label class="custom-control-label" for="chkB02"></label>
														</div>
														<i id="show_sublist02_sub" class="btn icons_arrow_r"></i>
														<span class="text">자연수 I</span>
														<i class="icons_plus_circle_off"></i>
													</li>
												</ul>
											</div>
											<!-- /.리스트02 -->
										</li>
									</ul>
								</div>
								<!-- /.탭 내용01 -->
								<!-- 탭 내용02 -->
								<div class="tab-pane fade" id="franchise" role="tabpanel" aria-labelledby="class-tab">
									프랜차이즈 동일 구성
								</div>
								<!-- /.탭 내용02 -->
							</div>
							<!-- /.탭 컨텐츠 -->
						</div>
						<!-- /.왼쪽 영역 -->
						<!-- 오른쪽 영역 -->
						<div class="divide_area right">
							<!-- 탭 컨텐츠 -->
							<ul class="nav nav-tabs" id="myTab" role="tablist">
								<li class="nav-item" role="presentation">
									<button class="nav-link active" id="grade-tab" data-toggle="tab" data-target="#mydata" type="button" role="tab" aria-controls="home" aria-selected="true">
										내 커리큘럼
									</button>
								</li>
							</ul>
							<div class="tab-content" id="myTabContent">
								<!-- 탭 내용01 -->
								<div class="tab-pane fade show active" id="mydata" role="tabpanel" aria-labelledby="grade-tab">
									<ul>
										<li>
											<!-- 리스트01 -->
											<div class="list">
												<div class="custom-control custom-checkbox form-inline">
													<input type="checkbox" class="custom-control-input" id="chkAr01">
													<label class="custom-control-label" for="chkAr01"></label>
												</div>
												<i id="show_sublist01" class="btn icons_arrow_r"></i>
												<span class="text">국어</span>
												<i class="icons_plus_circle_off"></i>
											</div>
											<!-- /.리스트01 -->
										</li>
										<li>
											<!-- 리스트02 -->
											<div class="list">
												<div class="custom-control custom-checkbox form-inline">
													<input type="checkbox" class="custom-control-input" id="chkAr02">
													<label class="custom-control-label" for="chkAr02"></label>
												</div>
												<i id="show_sublist02" class="btn icons_arrow_r"></i>
												<span class="text">수학</span>
												<i class="icons_plus_circle_off"></i>
											</div>
											<!-- /.리스트02 -->
										</li>
									</ul>
								</div>
								<!-- /.탭 내용01 -->
							</div>
							<!-- /.탭 컨텐츠 -->
						</div>
						<!-- /.오른쪽 영역 -->
					</div>
					<!-- /.2단 분류 컨텐츠 -->
				</div>
			</div>
  </div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader.vue'

export default {
  name: 'Curriculum',
  components: {
    PageHeader,
  },
  layout: 'EducationLayout',
  data() {
    return {
      uploadType: '',
      uploadFile: {},
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
      urlData: {
        youtube: '',
        page: '',
      },
    }
  },
  methods: {
    
  },
}
</script>

<style></style>
