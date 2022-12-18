<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalCuriRegi"
      class="modal fade modal_ac_manage_curi"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              {{txtInfo.modatTitle}}
            </h5>
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
            <div class="modal_curiregi">
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      <input
                        v-model="curriculumData.subTitle"
                        type="text"
                        placeholder="입력해 주세요"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      <textarea
                        v-model="curriculumData.desc"
                        placeholder="메모입력"
                      ></textarea>
                    </div>
                  </div>
                  <ul
                    v-show="!isCurriculum"
                    id="myTab"
                    class="nav nav-tabs"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        id="grade-tab"
                        class="nav-link active"
                        data-toggle="tab"
                        data-target="#institute"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        @click="changeTab(0)"
                      >
                        건물 내부
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="class-tab"
                        class="nav-link"
                        data-toggle="tab"
                        data-target="#franchise"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        @click="changeTab(1)"
                      >
                        건물 외부
                      </button>
                    </li>
                  </ul>
                    
                  <div
                    v-show="isCurriculum"
                    class="title"
                  >
                    {{txtInfo.ioTitle}}
                  </div>
                  <div class="cw_box">
                    <img id="cwBoxBackImg" />
                    <CustomImgListView
                      ref="imgListView"
                      :expanded="false"
                      :pidNum="0"
                      @link-data="linkData"
                      @unlink-data-to-img="unLinkDataToImg"
                      @unlink-data-to-list="unLinkDataToList"
                      @img-resize="imgResize"
                    />
                    <div class="dropdown form-inline">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {{ currentClassName }}
                      </button>
                      <div class="dropdown-menu">
                        <a
                          v-for="dropMenu in dropMenuList"
                          :key="dropMenu"
                          class="dropdown-item"
                          href="#"
                          :value="dropMenu"
                          @click="selectDropMenu(dropMenu)"
                        >
                          {{ dropMenu }}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="item_list_wrap">
                    <div class="item_list">
                      <CustomCurriculumSwiper
                        ref="imgListViewSwiper"
                        :isHorizontal="true"
                        @unLink-event="unLinkEvent"
                        @item-click="itemClick"
                      />
                    </div>
                  </div>
                </div>
                <!-- /.왼쪽 영역 -->
                <!-- 오른쪽 영역 -->
                <div class="divide_area right">
                  <div class="title">{{txtInfo.rightTitle}}</div>
                  <div class="form-group">
                    <label for="">불러오기</label>
                    <div class="col">
                      <div class="input_file">
                        <input
                          v-model="lessonFullPath"
                          type="text"
                          class="file_input_textbox"
                          readonly
                        />
                        <div
                          class="file_input_div"
                          @click="
                            () => {
                              $emit('open-file-path')
                            }
                          "
                        >
                          <button class="btn btn_crud_default">찾아보기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      {{ currentLessonData.title }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      {{ currentLessonData.desc }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">
                      {{ currentLessonData.role }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" style="place-self: flex-start"
                      >{{txtInfo.listTitle}}
                      </label>
                    <div class="col">
                      <div class="list_box">
                        <div
                          v-if="currentLessonData.title === ''"
                          class="nothing_txt"
                        >
                        {{txtInfo.listEmptyTxt}}
                        </div>
                        <div v-else class="section">
                          <!-- 커리큘럼 등록 시 출력됨 -->
                          <span v-if="!isUpdate" class="sum"
                            >연결 개수: {{ linkDataCnt }}개</span
                          >
                          <button
                            class="btn btn_crud_default cancel"
                            @click="unLinkAllItem"
                          >
                            전체 해제
                          </button>
                          <!-- 커리큘럼 수정 시 출력됨 -->
                          <button
                            v-if="isUpdate"
                            class="btn btn_crud_default cancel"
                          >
                            초기화
                          </button>
                        </div>
                        <div class="list_area">
                          <CustomListView
                            ref="listView"
                            :pidNum="3000"
                            @update-link-cnt="updateLinkCnt"
                            @select-list-img="selectListImg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">저장 경로</label>
                    <div class="col">
                      <input
                        v-model="saveFileFullPath"
                        type="text"
                        placeholder="저장할 폴더를 선택해 주세요"
                        class="form-control form-inline front_button"
                      />
                      <button
                        class="btn btn_crud_default"
                        data-toggle="modal"
                        data-target="#modalStoragepath"
                        @click="
                          () => {
                            $emit('open-save-path')
                          }
                        "
                      >
                        찾아보기
                      </button>
                    </div>
                  </div>

                  <div class="check_sec">
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox60"
                        :checked="curriculumData.isOpenEducation"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label checkbox60"
                        for="checkbox60"
                        >교육기관에 해당 자료를 공개합니다.</label
                      >
                    </span>
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox61"
                        :checked="curriculumData.isContinuedRegist"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label checkbox61"
                        for="checkbox61"
                        >계속 등록하기</label
                      >
                    </span>
                  </div>
                </div>
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>
          <div class="modal-footer">
            <ModalBtnBox
              :submitTxt="submitBtnName"
              :isUpdate="isUpdate"
              @submit="checkUpload"
              @close="$emit('close')"
              @del="$emit('update-file-del')"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import $ from 'jquery'
import CustomListView from '@/components/common/custom/CustomListView.vue'
import CustomImgListView from '@/components/curriculum/custom/CustomImgListView.vue'
import CustomCurriculumSwiper from '@/components/curriculum/custom/CustomCurriculumSwiper.vue'
import ModalBtnBox from '@/components/common/ModalBtnBox.vue'

export default {
  name: 'CurriculumUpdateModal',
  components: {
    CustomListView,
    CustomImgListView,
    CustomCurriculumSwiper,
    ModalBtnBox,
  },
  props: {
    open: Boolean,
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    txtInfo: {
      type: Object,
      default: ()=>{},
    },
    dropMenuData:{
      type:Array,
      default:()=>[]
    },
    isCurriculum:{
      type:Boolean
    }
  },
  data() {
    return {
      isUpdate: false,
      tabIdx:0,
      submitBtnName: '등록',
      dropMenuList: [],
      dropMenuListData: [],
      linkDataCnt: 0,
      currentClassName: '교실선택',
      saveFileFullPath: '',
      currentDropMenuData:{data:[]},
      curriculumData: {
        subTitle: '',
        desc: '',
        savePathInfo: {
          type: '',
          path: '',
          fileName: '',
        },
        cwInfo: '',
        isOpenEducation: true,
        isContinuedRegist: true,
        linkData:[],
        lessonId:null
      },
      currentLessonData:{
        desc:'',
        title:'',
        role:''
      },
      lessonFullPath:'',
    }
  },
  mounted() {
    this.dropMenuListData = this.dropMenuData
    this.dropMenuList = []
    if(this.isCurriculum){
      for (let i = 0; i < this.dropMenuListData.length; i++) {
        this.dropMenuList.push(this.dropMenuListData[i].name)
      }
    }else{
      this.changeTab(0)
    }
  },
  methods: {
    changeTab(tabIdx){
      this.dropMenuList=[]
      this.tabIdx=tabIdx
      const list=this.dropMenuListData[tabIdx]
      for (let i = 0; i < list.length; i++) {
        this.dropMenuList.push(list[i].name)
      }
    },
    selectDropMenu(value) {
      if(this.isCurriculum){
        for (let i = 0; i < this.dropMenuListData.length; i++) {
          if (value === this.dropMenuListData[i].name) {
            this.currentDropMenuData = this.dropMenuListData[i]
            break
          }
        }
      }else{
        const list=this.dropMenuListData[this.tabIdx]
        for (let i = 0; i < list.length; i++) {
          if (value === list[i].name) {
            this.currentDropMenuData = list[i]
            break
          }
        }
      }
      this.$refs.imgListView.setIOType(this.currentDropMenuData.codeNum)
      this.$refs.imgListViewSwiper.setIOType(this.currentDropMenuData.codeNum)
      this.currentClassName = value
      this.$refs.listView.unLinkAllItem()
      this.$refs.imgListView.setData(this.currentDropMenuData.data)
      this.$refs.imgListViewSwiper.setData(
        this.currentDropMenuData.data.interactionObjects
      )
    },
    setData(curriculumData) {
      $('#modalCuriRegi .modal-body').scrollTop(0)
      this.tabIdx=0
      if (curriculumData) {
        this.isUpdate = true
        this.submitBtnName = '수정'
        this.$refs.listView.unLinkAllItem()
        this.curriculumData = curriculumData

        if(this.isCurriculum){
          for (let i = 0; i < this.dropMenuListData.length; i++) {
            if (this.curriculumData.cwId === this.dropMenuListData[i].codeNum) {
              this.currentDropMenuData = $.extend(true, {}, this.dropMenuListData[i])
              break
            }
          }
        }else{
          let isComp=false
          for (let i = 0; i < this.dropMenuListData.length; i++) {
            for (let j = 0; j < this.dropMenuListData[i].length; j++) {
              if (this.curriculumData.cwId === this.dropMenuListData[i][j].codeNum) {
                this.currentDropMenuData = $.extend(true, {}, this.dropMenuListData[i][j])
                isComp=true
                break
              }
            }
            if(isComp)break
          }
        }

        this.currentClassName = this.currentDropMenuData.name
        const linkData=this.curriculumData.linkData
        for (let i=0;i<linkData.length;i++) {
          this.currentDropMenuData.data.interactionObjects[parseInt(linkData[i].codeNum)-1].isLink=true
          this.currentDropMenuData.data.interactionObjects[parseInt(linkData[i].codeNum)-1].referId=linkData[i].referId
        }
        this.$refs.imgListViewSwiper.setIOType(this.currentDropMenuData.codeNum)
        this.$refs.imgListView.setData(this.currentDropMenuData.data)
        this.$refs.imgListViewSwiper.setData(
          this.currentDropMenuData.data.interactionObjects
        )
        this.saveFileFullPath =
          this.curriculumData.savePathInfo.path +
          ' > ' +
          this.curriculumData.savePathInfo.fileName +
          '.'+this.txtInfo.fileSet
        this.currentLessonData=this.getLessonData(this.curriculumData.lessonId)
        this.lessonFullPath=this.currentLessonData.savePath+' > '+this.currentLessonData.name
        
        const referList=this.currentLessonData.referenceList
        for (let j=0;j<referList.length;j++) {
          referList[j].isLink=false
          referList[j].imgIdx=''
        }
        for (let i=0;i<linkData.length;i++) {
          for (let j=0;j<referList.length;j++) {
            if(linkData[i].referId===referList[j].id){
              referList[j].isLink=true
              referList[j].imgIdx=parseInt(linkData[i].codeNum)-1
              break
            }
          }
        }
        this.$refs.listView.setDataList(this.currentLessonData)
        this.$refs.listView.checkLinkDataCnt()
      } else {
        this.isUpdate = false
        this.submitBtnName = '등록'
        this.curriculumData = {
          subTitle: '',
          desc: '',
          savePathInfo: {
            type: '',
            path: '',
            fileName: '',
          },
          cwId: '',
          isOpenEducation: true,
          isContinuedRegist: true,
          linkData:[],
          lessonId:null
        }
        this.currentDropMenuData=null
        this.saveFileFullPath=''
        this.lessonFullPath=''
        this.currentClassName = '교실선택'
        this.currentLessonData={
          desc:'',
          title:'',
          role:''
        }
        this.$refs.imgListViewSwiper.setIOType('')
        this.$refs.imgListView.setData([])
        this.$refs.imgListViewSwiper.setData([])
      }
    },
    linkData(listIdx, imgIdx) {
      this.$refs.listView.linkData(listIdx, imgIdx)
      this.$refs.imgListViewSwiper.linkData(listIdx, imgIdx)
    },
    unLinkDataToList(listIdx) {
      this.$refs.listView.unLinkData(listIdx)
    },
    unLinkDataToImg(imgIdx) {
      this.$refs.imgListViewSwiper.unLinkData(imgIdx)
    },
    unLinkEvent(listIdx, imgIdx) {
      this.$refs.listView.unLinkData(listIdx)
      this.$refs.imgListView.unLinkData(imgIdx)
    },
    updateLinkCnt(cnt) {
      this.linkDataCnt = cnt
    },
    unLinkAllItem() {
      this.$refs.listView.unLinkAllItem()
      this.$refs.imgListView.unLinkAllItem()
      this.$refs.imgListViewSwiper.unLinkAllItem()
    },
    setSavePath(pathInfo) {
      this.curriculumData.savePathInfo = pathInfo
      this.saveFileFullPath =
        this.curriculumData.savePathInfo.path +
        ' > ' +
        this.curriculumData.savePathInfo.fileName +
        '.'+this.txtInfo.fileSet
    },
    setFileInfo(lessonInfo) {
      this.unLinkAllItem()
      this.curriculumData.lessonId=lessonInfo.lesson.dbId
      this.currentLessonData=this.getLessonData(lessonInfo.lesson.dbId)
      this.lessonFullPath=this.currentLessonData.savePath+' > '+this.currentLessonData.name
      this.$refs.listView.setDataList(this.currentLessonData)
    },
    imgResize(perRatio) {
      this.$refs.imgListViewSwiper.imgResize(perRatio)
    },
    itemClick(imgIdx) {
      this.$refs.imgListView.itemClick(imgIdx)
      this.$refs.listView.itemClick(imgIdx)
    },
    selectListImg(imgIdx) {
      this.$refs.imgListView.selectListImg(imgIdx)
      this.$refs.imgListViewSwiper.selectListImg(imgIdx)
    },
    checkUpload() {
      let isAllClear = true
      if (this.curriculumData.subTitle === '') {
        isAllClear = false
        this.$emit('change-desc', '제목을 입력해 주세요.')
      }
      if (isAllClear && this.curriculumData.desc === '') {
        isAllClear = false
        this.$emit('change-desc', '설명을 입력해 주세요.')
      }
      if (isAllClear && this.curriculumData.lessonId&&this.curriculumData.lessonId === '') {
        isAllClear = false
        this.$emit('change-desc', '불러온 레슨정보가 없습니다.')
      }
      if (isAllClear && this.curriculumData.savePathInfo.path === '') {
        isAllClear = false
        this.$emit('change-desc', '저장할 경로를 선택해주세요.')
      }
      if (isAllClear && this.currentClassName === '교실선택') {
        isAllClear = false
        this.$emit('change-desc', 'CW 교실 정보가 없습니다.')
      }
      /* isAllClear = true */
      if (isAllClear) {
        const newData = {}
        newData.subTitle=this.curriculumData.subTitle
        newData.desc=this.curriculumData.desc
        newData.isOpenEducation=this.curriculumData.isOpenEducation
        newData.isContinuedRegist=this.curriculumData.isContinuedRegist
        newData.cwId=this.currentDropMenuData.codeNum
        newData.savePathInfo=this.curriculumData.savePathInfo
        newData.linkData=this.$refs.imgListView.getData()
        newData.lessonId=this.curriculumData.lessonId

        newData.type = this.currentLessonData.type
        if(this.isCurriculum){
          newData.name = newData.savePathInfo.fileName + '.link'
        }else{
          newData.name = newData.savePathInfo.fileName + '.set'
        }
        
        newData.active = true
        console.log(newData)
        if(!this.isUpdate){
          this.$emit('add-curiiculum-data', newData)
        }else{
          this.$emit('update-curiiculum-data', newData)
        }
        $('#modalCuriRegi').modal('hide')
      }
    },
    getLessonData(idx){
      if(this.isCurriculum){
        const lessonDatas=[
          {
            name: '2-1반 수학 수업자료.lesson',
            type: 'institution',
            id: 1,
            title: '2-1반 수업',
            desc: '2-1반 전체 수업 내용',
            role: '2-1반 학생들의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '마포 학원>국어>1단원',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '국어학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                type: 'institution',
              },
              {
                id: 1,
                name: '수학 학습자료.pdf',
                subject: '수학',
                desc: '등록한 자료 2',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'application/pdf',
                uploadType: 'pdf',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                type: 'franchise',
                linkIdx: 1,
                isLink: true,
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                type: 'institution',
              },
            ],
          },
          {
            name: '고등교육 영어자료.lesson',
            type: 'institution',
            dbId: 2,
            title: '고등교육 영어자료',
            desc: '고등교육 영어자료 수업 내용',
            role: '고등교육 영어자료의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '수학>대단원>피타고라스',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '미술학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                dbId: 1,
                type: 'institution',
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                dbId: 3,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 4,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 5,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                dbId: 6,
                type: 'institution',
              },
            ],
          },
          {
            name: '수학적 귀납법 설명자료.lesson',
            type: 'institution',
            dbId: 3,
            title: '수학적 귀납법 설명자료',
            desc: '수학적 귀납법 설명자료 수업 내용',
            role: '수학적 귀납법 설명자료의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '수학>대단원>피타고라스',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '국어학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                dbId: 1,
                type: 'institution',
              },
              {
                id: 1,
                name: '수학 학습자료.pdf',
                subject: '수학',
                desc: '등록한 자료 2',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'application/pdf',
                uploadType: 'pdf',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 2,
                type: 'franchise',
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                dbId: 3,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 4,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 5,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                dbId: 6,
                type: 'institution',
              },
            ],
          },
          {
            name: '6학년 영재반 수업자료.lesson',
            type: 'institution',
            dbId: 4,
            title: '6학년 영재반 수업자료',
            desc: '6학년 영재반 수업자료 수업 내용',
            role: '6학년 영재반 수업자료의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '수학>대단원>피타고라스',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '국어학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                dbId: 1,
                type: 'institution',
              },
              {
                id: 1,
                name: '수학 학습자료.pdf',
                subject: '수학',
                desc: '등록한 자료 2',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'application/pdf',
                uploadType: 'pdf',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 2,
                type: 'franchise',
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                dbId: 3,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 4,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 5,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                dbId: 6,
                type: 'institution',
              },
            ],
          },
        ]
        return lessonDatas[idx]
      }else{
        const packDatas=[
          {
            name: '2-1반 수학 수업자료.pack',
            type: 'institution',
            id: 1,
            title: '2-1반 수업',
            desc: '2-1반 전체 수업 내용',
            role: '2-1반 학생들의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '마포 학원>국어>1단원',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '국어학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                type: 'institution',
              },
              {
                id: 1,
                name: '수학 학습자료.pdf',
                subject: '수학',
                desc: '등록한 자료 2',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'application/pdf',
                uploadType: 'pdf',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                type: 'franchise',
                linkIdx: 1,
                isLink: true,
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                type: 'institution',
              },
            ],
          },
          {
            name: '고등교육 영어자료.pack',
            type: 'institution',
            dbId: 2,
            title: '고등교육 영어자료',
            desc: '고등교육 영어자료 수업 내용',
            role: '고등교육 영어자료의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '수학>대단원>피타고라스',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '미술학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                dbId: 1,
                type: 'institution',
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                dbId: 3,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 4,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 5,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                dbId: 6,
                type: 'institution',
              },
            ],
          },
          {
            name: '수학적 귀납법 설명자료.pack',
            type: 'institution',
            dbId: 3,
            title: '수학적 귀납법 설명자료',
            desc: '수학적 귀납법 설명자료 수업 내용',
            role: '수학적 귀납법 설명자료의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '수학>대단원>피타고라스',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '국어학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                dbId: 1,
                type: 'institution',
              },
              {
                id: 1,
                name: '수학 학습자료.pdf',
                subject: '수학',
                desc: '등록한 자료 2',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'application/pdf',
                uploadType: 'pdf',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 2,
                type: 'franchise',
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                dbId: 3,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 4,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 5,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                dbId: 6,
                type: 'institution',
              },
            ],
          },
          {
            name: '6학년 영재반 수업자료.pack',
            type: 'institution',
            dbId: 4,
            title: '6학년 영재반 수업자료',
            desc: '6학년 영재반 수업자료 수업 내용',
            role: '6학년 영재반 수업자료의 평균적인 이해를 도와줄 수 있다.',
            keyword: ['국어', '수학', '영어', '사회'],
            isOpen: true,
            savePath: '수학>대단원>피타고라스',
            createAt: '2022.05.03',
            ragistrant: '홍길남',
            subject: '수학',
            referenceList: [
              {
                id: 0,
                name: '국어학습자료 애니메이션.mp4',
                subject: '국어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'video/mp4',
                uploadType: 'video',
                fileVolume: '',
                createAt: '',
                dbId: 1,
                type: 'institution',
              },
              {
                id: 1,
                name: '수학 학습자료.pdf',
                subject: '수학',
                desc: '등록한 자료 2',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'application/pdf',
                uploadType: 'pdf',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 2,
                type: 'franchise',
              },
              {
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath:
                  'https://media.w3.org/2010/05/sintel/trailer.mp4',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'quiz',
                uploadType: 'quiz',
                fileVolume: '',
                createAt: '',
                quizList: [
                  {
                    id: 0,
                    problem: '<p>asdfaaaaasdf</p>',
                    oxAnswer: 0,
                    dificultade: 1,
                    limitTime: '3분',
                    quizType: 0,
                    shortAnswer: '123',
                    subjectiveAnswer: '123',
                    shortWrongAnswer: '123',
                  },
                  {
                    id: 2,
                    problem: '<p>asdggggg</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '234',
                    subjectiveAnswer: '234',
                    shortWrongAnswer: '234',
                  },
                  {
                    id: 3,
                    problem: '<p>234242242424</p>',
                    dificultade: 0,
                    limitTime: '2분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '345',
                    subjectiveAnswer: '345',
                    shortWrongAnswer: '345',
                  },
                  {
                    id: 4,
                    problem: '<p>555555555</p>',
                    dificultade: 0,
                    limitTime: '4분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '456',
                    subjectiveAnswer: '456',
                    shortWrongAnswer: '456',
                  },
                  {
                    id: 5,
                    problem: '<p>asx c</p>',
                    dificultade: 0,
                    limitTime: '5분',
                    quizType: 0,
                    oxAnswer: 0,
                    shortAnswer: '567',
                    subjectiveAnswer: '567',
                    shortWrongAnswer: '567',
                  },
                ],
                isLeaf: false,
                dbId: 3,
                type: 'franchise',
              },
              {
                id: 3,
                name: '사회 쪽지시험 영상.youtube',
                subject: '사회',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: '//www.youtube.com/embed/m264zfB87Tc',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'youtube',
                uploadType: 'youtube',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 4,
                type: 'institution',
              },
              {
                id: 4,
                name: '과학 사이트 참고용.url',
                subject: '과학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'url',
                fileVolume: '',
                createAt: '',
                isLeaf: false,
                dbId: 5,
                type: 'franchise',
              },
              {
                id: 5,
                name: '수학 쪽지시험.test',
                subject: '수학',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://sciencelove.com/725',
                isOpenEducation: true,
                isOpenReference: true,
                fileName: '',
                fileDivision: '교육기관',
                fileType: 'test',
                uploadType: 'test',
                fileVolume: '',
                createAt: '',
                noteTestList: [
                  {
                    id: 0,
                    problem: '<p>1번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 1임</p>' },
                      { id: '', example: '<p>답 2임</p>' },
                      { id: '', example: '<p>답 3임</p>' },
                      { id: '', example: '<p>답 4임</p>' },
                    ],
                    dificultade: 0,
                    limitTime: '',
                    answer: 1,
                    isCommentary: true,
                    commentary: '',
                  },
                  {
                    id: 1,
                    problem: '<p>2번 문제</p>',
                    exampleList: [
                      { id: '', example: '<p>답 5임</p>' },
                      { id: '', example: '<p>답 6임</p>' },
                      { id: '', example: '<p>답 7임</p>' },
                      { id: '', example: '<p>답 8임</p>' },
                    ],
                    dificultade: 2,
                    limitTime: '',
                    answer: 2,
                    isCommentary: true,
                    commentary: '',
                  },
                ],
                isLeaf: false,
                dbId: 6,
                type: 'institution',
              },
            ],
          },
        ]
        return packDatas[idx]
      }
    }
  },
}
</script>

<style scoped>
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.list-group-item {
  padding: 5px 10px;
  cursor: grab;
}
#modalCuriRegi .form-inline {
  width: initial;
}
#modalCuriRegi
  .modal_curiregi
  .divide_area.right
  .list_box
  .vtl-node-main
  .custom-control-label::after {
  margin: -8px 0px 0px 15px;
}
#modalCuriRegi {
  pointer-events: none;
}
</style>
