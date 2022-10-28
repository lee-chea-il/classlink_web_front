<template>
  <div>
    <PageHeader title="커리큘럼" />
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
							<ul id="myTab" class="nav nav-tabs" role="tablist">
								<li class="nav-item" role="presentation">
									<button id="grade-tab" class="nav-link active" data-toggle="tab" data-target="#institute" type="button" role="tab" aria-controls="home" aria-selected="true">
										교육기관
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button id="class-tab" class="nav-link" data-toggle="tab" data-target="#franchise" type="button" role="tab" aria-controls="profile" aria-selected="false">
										프랜차이즈
									</button>
								</li>
							</ul>
							<div id="myTabContent" class="tab-content">
								<!-- 탭 내용01 -->
								<div id="institute" class="tab-pane fade show active" role="tabpanel" aria-labelledby="grade-tab">
									내 커리큘럼
								</div>
								<!-- /.탭 내용01 -->

								<!-- 탭 내용02 -->
								<div id="franchise" class="tab-pane fade" role="tabpanel" aria-labelledby="class-tab">
									내 커리큘럼
								</div>
								<!-- /.탭 내용02 -->
							</div>
							<!-- /.탭 컨텐츠 -->
						</div>
						<!-- /.왼쪽 영역 -->

						<!-- 오른쪽 영역 -->
						<div class="divide_area right">
							<!-- 탭 컨텐츠 -->
							<ul id="myTab" class="nav nav-tabs" role="tablist">
								<li class="nav-item" role="presentation">
									<button id="grade-tab" class="nav-link active" data-toggle="tab" data-target="#mydata" type="button" role="tab" aria-controls="home" aria-selected="true">
										내 커리큘럼
									</button>
								</li>
							</ul>
							<div id="myTabContent" class="tab-content">
								<!-- 탭 내용01 -->
								<div id="mydata" class="tab-pane fade show active" role="tabpanel" aria-labelledby="grade-tab">
									내 커리큘럼
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
  name: 'MyCurriculum',
  components: {
    PageHeader,
  },
  layout: 'EducationLayout',
  data() {
    return {
    }
  },
  methods: {
    
  },
}
</script>

<style></style>
