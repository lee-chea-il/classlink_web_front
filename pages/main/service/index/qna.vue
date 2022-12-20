<template>
  <div class="main_notice main_qa">
    <div class="input-group input-search form-inline">
      <input
        type="text"
        class="form-control"
        placeholder="궁금한 질문을 검색해보세요"
      />
      <div class="input-group-append">
        <button class="btn icons_x_circle_off" type="button"></button>
        <button class="btn icons_search_off" type="button"></button>
      </div>
    </div>
    <div class="table_section">
      <table v-for="(item, idx) in qnaList" :key="idx" class="table">
        <tbody>
          <tr class="main_notice02" @click="toggleShow(item)">
            <td class="main_notice_tit"></td>
            <td class="main_notice_tit02">Q. {{ item.title }}</td>
            <td class="main_notice_tit03">{{ item.createdAt }}</td>
            <td>
              <button
                id="btnExpand"
                class="btn arrow_ico"
                :class="{ active: !item.isShow }"
              ></button>
            </td>
          </tr>
          <!-- 상세 tr [개발참조] 공지사항 상세 TR 펼치고 접기 -->
          <tr id="trExpand" class="tr_expand" :style="isShowFlag(item.isShow)">
            <td class="td_expand" colspan="8">
              <div class="notice_contents">
                {{ item.desc }}
              </div>
            </td>
          </tr>
          <!-- /.상세 tr -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QnaPage',
  data() {
    return {
      qnaList: [
        {
          id: 1,
          isShow: false,
          title: '클래스링크는 어떤 서비스인가요?',
          desc: '교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다.',
          createdAt: '2020-01-01',
        },
        {
          id: 2,
          isShow: false,
          title: '클래스링크는 무엇을 하나요?',
          desc: '교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다.',
          createdAt: '2020-01-02',
        },
        {
          id: 3,
          isShow: false,
          title: '클래스링크의 타겟은 누구인가요?',
          desc: '교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다.',
          createdAt: '2020-01-03',
        },
        {
          id: 4,
          isShow: false,
          title: '클래스링크는 어떻게 사용하나요?',
          desc: '교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다.',
          createdAt: '2020-01-04',
        },
        {
          id: 5,
          isShow: false,
          title: '클래스링크를 사용하고싶은데 어떻게 하죠?',
          desc: '교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다. 교육 특화 메타버스 플랫폼, 클래스링크 현실에서 메타버스로 학교, 교육기관, 캠퍼스 또 하나의 교육 공간이 펼쳐집니다.',
          createdAt: '2020-01-05',
        },
      ],
    }
  },
  methods: {
    isShowFlag(flag) {
      if (flag) return { display: 'table-row' }
      else return { display: 'none' }
    },
    toggleShow(item) {
      return (item.isShow = !item.isShow)
    },
  },
}
</script>

<style scoped>
.arrow_ico {
  display: inline-block;
  width: 16px;
  height: 16px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDEwTDEwIDJMMiAxMCIgc3Ryb2tlPSIjRDFEM0Q0IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
  transform: rotate(180deg);
}

.arrow_ico.active {
  transform: rotate(0);
}

.main_notice02 {
  cursor: pointer;
}
</style>
