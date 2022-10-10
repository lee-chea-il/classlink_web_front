<template>
	<div id="content" class="content">
	  <div class="content_area">
		  <!--  3Depth -->
		  <ul class="nav nav-tabs depth03">
			  <li class="nav-item">
				  <a class="nav-link active">
					  자료실
				  </a>
			  </li>
		  </ul>
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
						  <div class="input-group input-search form-inline">
							  <input type="text" placeholder="검색어 입력" class="form-control">
							  <div class="input-group-append">
								  <button class="btn icons_search_off" type="button" data-toggle="modal" data-target="#modalDatafilterResult" data-dismiss="modal"></button>
							  </div>
						  </div>
						  <button class="btn btn_filter" data-toggle="modal" data-target="#modalDatafilter">필터</button>
						  <button class="btn btn_crud_point" data-toggle="modal" data-target="#modalDataregi">등록</button>
					  </div>
				  </div>
				  <!-- /.컨트롤 버튼 영역 -->
				  
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
							  <li class="nav-item" role="presentation">
								  <button class="nav-link" id="class-tab" data-toggle="tab" data-target="#open" type="button" role="tab" aria-controls="profile" aria-selected="false">
									  공개자료실
								  </button>
							  </li>
						  </ul>
						  <div class="tab-content" id="myTabContent">
							  <!-- 탭 내용01 -->
							  <div class="tab-pane fade show active" id="institute" role="tabpanel" aria-labelledby="grade-tab">
								<treeview :config="config" :nodes="nodes1"> </treeview>





							  </div>
							  <!-- /.탭 내용01 -->
							  <!-- 탭 내용02 -->
							  <div class="tab-pane fade" id="franchise" role="tabpanel" aria-labelledby="class-tab">
								  프랜차이즈 동일 구성
							  </div>
							  <!-- /.탭 내용02 -->
							  <!-- 탭 내용03 -->
							  <div class="tab-pane fade" id="open" role="tabpanel" aria-labelledby="class-tab">
								  공개자료실 동일 구성
							  </div>
							  <!-- /.탭 내용03 -->
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
									  내 자료
								  </button>
							  </li>
						  </ul>
						  <div class="tab-content" id="myTabContent">
							  <!-- 탭 내용01 -->
							  <div class="tab-pane fade show active" id="mydata" role="tabpanel" aria-labelledby="grade-tab">
								  <treeview :config="config" :nodes="nodes2"> </treeview>



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
  </div>
  <!-- //container -->
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import { storeToRefs } from 'pinia';
	import { myHome } from "@/stores/Myhome"
	import treeview from "vue3-treeview";
	import "vue3-treeview/dist/style.css";

	const myHomeStore = myHome();
	const { myDatas } = storeToRefs(myHomeStore);
	/*watch(pageType, () => {
	listData.value = pageType.value;
	})*/

	const config = {
        roots: ["korean", "math"],
        keyboardNavigation: false,
        dragAndDrop: true,
        checkboxes: true,
        editable: false,
        disabled: false,
        padding: 25,
    };

	const nodes1 = ref({
		korean:{
			text:'국어',
			children:['kor_lesson_1','kor_lesson_2','kor_lesson_3']
		},
		kor_lesson_1:{
			text:"국어 1.한글",
			children:['kor_lesson_1_sub_1','kor_lesson_1_sub_2']
		},
		kor_lesson_1_sub_1:{
			text:'1.한글의 이해'
		},
		kor_lesson_1_sub_2:{
			text:'2.한글의 구성'
		},
		kor_lesson_2:{
			text:"국어 2.외래어",
			children:['kor_lesson_2_sub_1','kor_lesson_2_sub_2']
		},
		kor_lesson_2_sub_1:{
			text:'1.외래어의 이해'
		},
		kor_lesson_2_sub_2:{
			text:'2.외래어의 구성'
		},
		kor_lesson_3:{
			text:"국어 3.영어",
			children:['kor_lesson_3_sub_1','kor_lesson_3_sub_2']
		},
		kor_lesson_3_sub_1:{
			text:'1.영어의 이해'
		},
		kor_lesson_3_sub_2:{
			text:'2.영어의 구성'
		},
		math:{
			text:'수학',
			children:['math_lesson_1','math_lesson_2']
		},
		math_lesson_1:{
			text:"수학 1.이차방정식",
			children:['kor_lesson_3_sub_1','kor_lesson_3_sub_2']
		},
		math_lesson_1_sub_1:{
			text:'1.이차방정식 이해'
		},
		math_lesson_1_sub_2:{
			text:'2.이차방벙식의 활용'
		},
		math_lesson_2:{
			text:"수학 2.삼각함수",
			children:['kor_lesson_3_sub_1','kor_lesson_3_sub_2']
		},
		math_lesson_2_sub_1:{
			text:'1.삼각함수의 이해'
		},
		math_lesson_2_sub_2:{
			text:'2.삼각함수의 구성'
		},
	});
	const nodes2 = ref({
		korean:{
			text:'국어',
			children:['kor_lesson_1','kor_lesson_2','kor_lesson_3']
		},
		kor_lesson_1:{
			text:"국어 1.한글",
			children:['kor_lesson_1_sub_1','kor_lesson_1_sub_2']
		},
		kor_lesson_1_sub_1:{
			text:'1.한글의 이해'
		},
		kor_lesson_1_sub_2:{
			text:'2.한글의 구성'
		},
		kor_lesson_2:{
			text:"국어 2.외래어",
			children:['kor_lesson_2_sub_1','kor_lesson_2_sub_2']
		},
		kor_lesson_2_sub_1:{
			text:'1.외래어의 이해'
		},
		kor_lesson_2_sub_2:{
			text:'2.외래어의 구성'
		},
		kor_lesson_3:{
			text:"국어 3.영어",
			children:['kor_lesson_3_sub_1','kor_lesson_3_sub_2']
		},
		kor_lesson_3_sub_1:{
			text:'1.영어의 이해'
		},
		kor_lesson_3_sub_2:{
			text:'2.영어의 구성'
		},
		math:{
			text:'수학',
			children:['math_lesson_1','math_lesson_2']
		},
		math_lesson_1:{
			text:"수학 1.이차방정식",
			children:['kor_lesson_3_sub_1','kor_lesson_3_sub_2']
		},
		math_lesson_1_sub_1:{
			text:'1.이차방정식 이해'
		},
		math_lesson_1_sub_2:{
			text:'2.이차방벙식의 활용'
		},
		math_lesson_2:{
			text:"수학 2.삼각함수",
			children:['kor_lesson_3_sub_1','kor_lesson_3_sub_2']
		},
		math_lesson_2_sub_1:{
			text:'1.삼각함수의 이해'
		},
		math_lesson_2_sub_2:{
			text:'2.삼각함수의 구성'
		},
	});

</script>

<style scoped>

</style>