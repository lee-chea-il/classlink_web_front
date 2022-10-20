<script setup lang="ts">
	//import { defineProps } from 'vue';
	//defineProps< {title:String} >()
	import { ref } from "vue";
	import { storeToRefs } from 'pinia';
	import { myHome } from "@/stores/Myhome"
	
	const myHomeStore = myHome();
	const { pageType } = storeToRefs(myHomeStore);
	const showDataRoom = (e) => {
		pageType.value = "dataroom";
	}
	/*watch(pageType, () => {
	  listData.value = pageType.value;
	})*/
</script>

<template>
	<div id="header" class="header">
		<!-- 탭, PC 버전 상단메뉴 ≥992px and up -->
		<div class="nav_web">
			<div class="nav_top_wrap">
				<div class="nav_top">
					<div class="logo_area">
						<a><img src="assets/images/ClassLink_logo.svg" alt="ClassLink" /></a>
					</div>
					<div class="nav_area">
						<ul class="nav nav_dapth01 justify-content-center">
							<li class="nav-item">
								<a class="nav-link active" href="#">수업 준비</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">수업</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">관리</a>
							</li>
						</ul>
					</div>
					<div class="function_area">
						<button type="button" class="btn btn-refresh"></button>
						<!-- [개발참조]버튼 활성 : class="active" 추가 -->
						<button class="btn btn_nav_myhome" style="margin-right:3px;">마이홈</button>
						<button class="btn btn_nav_user active" style="margin-right:3px;">홍길동 학생</button>
						<!-- [개발참조]신규알림표시 : class="newlabel" 추가 -->
						<button class="btn btn_alert icons_bell_off newlabel"></button>
					</div>

				</div>
			</div>
			<div class="nav_sub">
				<ul class="nav nav_dapth02 justify-content-center">
					<li @click='showDataRoom' class="nav-item">
						<!-- [개발참조]버튼 활성 : class="nav-link에 active" 추가 -->
						<a class="nav-link active" href="#">자료실</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">레슨</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">커리큘럼</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">강좌</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- 작은탬, 모바일 상단메뉴 < 991.98-->
		<div class="nav_mobile">
			<div class="nav_top_wrap">
				<div class="nav_top">
					<div class="mobile_navbtn_area left">
						<button id="mobilebackBtn" class="btn icons_arrow2_l" onclick="history.back();"></button>
					</div>
					<div class="title_area" style="color: #2C51D7;">마이홈</div>
					<div class="mobile_navbtn_area">
						<button id="mobilemuBtn" class="btn icons_mobilemu"></button>
					</div>
				</div>
			</div>
		</div>

		<!-- 알림창 -->
		<div class="alert_cover"></div>
		<div id="alertPops" class="alert_pops">
			<div class="title">
				<span class="tit">전체 알림</span>
				<span class="del_area">
					<button class="btn">읽은 알림 삭제</button>
					<button class="btn">전체 삭제</button>
					<button class="btn close_alert icons_close"></button>
				</span>
			</div>
			<div class="cnts">
				<!-- [개발참조]: 알림이 없을때 -->
				<!-- <div class="alert_none">
					새로운 알림이 없습니다.
				</div> -->

				<!-- 알림기본박스 -->
				<div class="alert_box">
					<div class="tit_area">
						<label class="type01">질문함</label>
						<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
					</div>
					<div class="info_area">
						<div class="teacher">
							<span class="cat">영어</span>
							<span class="cat">영어리딩심화글이넘치네요</span>
							<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
						</div>
						<div class="date">어제 오전 9:00</div>
					</div>
					<button class="btn btn_del icons_x_circle_off" type="button"></button>
				</div>
				<!-- 알림기본박스 -->
				<div class="alert_box">
					<div class="tit_area">
						<label class="type02">과제함</label>
						<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
					</div>
					<div class="info_area">
						<div class="teacher">
							<span class="cat">영어</span>
							<span class="cat">영어리딩심화글이넘치네요</span>
							<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
						</div>
						<div class="date">어제 오전 9:00</div>
					</div>
					<button class="btn btn_del icons_x_circle_off" type="button"></button>
				</div>
				<!-- 알림기본박스 -->
				<div class="alert_box">
					<div class="tit_area">
						<label class="type03">노트함</label>
						<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
					</div>
					<div class="info_area">
						<div class="teacher">
							<span class="cat">영어</span>
							<span class="cat">영어리딩심화글이넘치네요</span>
							<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
						</div>
						<div class="date">어제 오전 9:00</div>
					</div>
					<button class="btn btn_del icons_x_circle_off" type="button"></button>
				</div>

			</div>
			<a href="javascript:;" class="btn_area close_alert" data-toggle="modal" data-target="#modalAlertclasslink">
				<i class="icons_plus_circle"></i> 알림 더보기
			</a>
		</div>

		<!-- 클래스링크 알림 모달 팝업 -->
		<div class="modal fade" id="modalAlertclasslink" tabindex="-1" aria-labelledby="modalAlertclasslink" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="modalAlertclasslink">클래스링크 알림</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<i class="icons_close"></i>
						</button>
					</div>
					<div class="modal-body">
						<div class="alert_cl_wrap">
							<!-- 알림1일단위 -->
							<div class="alert_cl">
								<div class="title">
									<i class="icons_clock"></i>
									<span>01월01일(월)</span>
								</div>
								<div class="cnts">
									<!-- [개발참조]: 알림기본박스는 전체알림의 기본박스와 소스 동일함-->
									<!-- 알림기본박스 -->
									<div class="alert_box">
										<div class="tit_area">
											<label class="type01">질문함</label>
											<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
										</div>
										<div class="info_area">
											<div class="teacher">
												<span class="cat">영어</span>
												<span class="cat">영어리딩심화글이넘치네요</span>
												<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
											</div>
											<div class="date">어제 오전 9:00</div>
										</div>
										<button class="btn btn_del icons_x_circle_off" type="button"></button>
									</div>
									<!-- 알림기본박스 -->
									<div class="alert_box">
										<div class="tit_area">
											<label class="type02">과제함</label>
											<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
										</div>
										<div class="info_area">
											<div class="teacher">
												<span class="cat">영어</span>
												<span class="cat">영어리딩심화글이넘치네요</span>
												<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
											</div>
											<div class="date">어제 오전 9:00</div>
										</div>
										<button class="btn btn_del icons_x_circle_off" type="button"></button>
									</div>
									<!-- 알림기본박스 -->
									<div class="alert_box">
										<div class="tit_area">
											<label class="type03">노트함</label>
											<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
										</div>
										<div class="info_area">
											<div class="teacher">
												<span class="cat">영어</span>
												<span class="cat">영어리딩심화글이넘치네요</span>
												<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
											</div>
											<div class="date">어제 오전 9:00</div>
										</div>
										<button class="btn btn_del icons_x_circle_off" type="button"></button>
									</div>
								</div>
							</div>
							<!-- 알림1일단위 -->
							<div class="alert_cl">
								<div class="title">
									<i class="icons_clock"></i>
									<span>01월01일(월)</span>
								</div>
								<div class="cnts">
									<!-- [개발참조]: 알림기본박스는 전체알림의 기본박스와 소스 동일함-->
									<!-- 알림기본박스 -->
									<div class="alert_box">
										<div class="tit_area">
											<label class="type01">질문함</label>
											<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
										</div>
										<div class="info_area">
											<div class="teacher">
												<span class="cat">영어</span>
												<span class="cat">영어리딩심화글이넘치네요</span>
												<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
											</div>
											<div class="date">어제 오전 9:00</div>
										</div>
										<button class="btn btn_del icons_x_circle_off" type="button"></button>
									</div>
									<!-- 알림기본박스 -->
									<div class="alert_box">
										<div class="tit_area">
											<label class="type02">과제함</label>
											<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
										</div>
										<div class="info_area">
											<div class="teacher">
												<span class="cat">영어</span>
												<span class="cat">영어리딩심화글이넘치네요</span>
												<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
											</div>
											<div class="date">어제 오전 9:00</div>
										</div>
										<button class="btn btn_del icons_x_circle_off" type="button"></button>
									</div>
									<!-- 알림기본박스 -->
									<div class="alert_box">
										<div class="tit_area">
											<label class="type03">노트함</label>
											<span class="tit">알림제목알림제목알림제목알림제목알림제목알림제목알림제목알림제목</span>
										</div>
										<div class="info_area">
											<div class="teacher">
												<span class="cat">영어</span>
												<span class="cat">영어리딩심화글이넘치네요</span>
												<span class="cat">심화A반글이넘치네요</span><span class="cat">홍길동 선생님</span>
											</div>
											<div class="date">어제 오전 9:00</div>
										</div>
										<button class="btn btn_del icons_x_circle_off" type="button"></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn_crud_default">읽은 알림 삭제</button>
						<button class="btn btn_crud_default">전체 삭제</button>
					</div>
				</div>
			</div>
		</div>

		<!-- goTop 버튼 -->
		<button class="btn btn_gotop hide"></button>

	</div>
</template>

<style scoped>
.hide{
  display: none;
}
</style>
