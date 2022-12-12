<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>신분 유형</h2>
      </div>

      <div class="status_section">
        <AuthorityButton
          :authList="authList"
          :userPermission="userPermission"
          @select-auth="onClickAuthority"
        />
      </div>
      <!-- [개발참조]:class="disabled"제거시 활성 -->
      <button class="btn btn btn_crud_point" @click.prevent="moveToHome">
        다음
      </button>
    </div>
  </div>
</template>

<script>
import AuthorityButton from '~/components/login/AuthorityButton.vue'
import { apiLogin } from '~/services'
export default {
  name: 'LoginIdentity',
  components: { AuthorityButton },
  data() {
    return {
      selectId: 0,
      authList: [
        {
          id: 1,
          idProps: 'radio01',
          title: '교육기관장',
          className: 'btn_status_head',
          checked: false,
          account: 'I',
          path: '/',
        },
        {
          id: 2,
          idProps: 'radio02',
          title: '프랜차이즈장',
          className: 'btn_status_franchise_director',
          checked: false,
          account: 'F',
          path: '/franchise',
        },
        {
          id: 3,
          idProps: 'radio03',
          title: '선생님',
          className: 'btn_status_teacher',
          checked: false,
          account: 'T',
          path: '/',
        },
        {
          id: 4,
          idProps: 'radio04',
          title: '프랜차이즈 관리자',
          className: 'btn_status_franchise_administrator',
          checked: false,
          account: 'A',
          path: '/franchise',
        },
      ],
      userPermission: [],
    }
  },
  mounted() {
    this.getUserInfo()
    this.authList[0].checked = true
  },
  methods: {
    async getUserInfo() {
      await apiLogin
        .getUserInfo()
        .then(({ data: { data } }) => {
          console.log(data)
          this.$store.commit('userInfo/setUserLogin')
          this.$store.commit('userInfo/setUser', data)
          if (data.idt_name === null) {
            this.userPermission = ['I', 'T']
          } else {
            const { idt_name } = data
            this.userPermission = idt_name
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onClickAuthority(idx) {
      const target = this.authList
      for (const i in target) {
        if (idx === Number(i)) {
          target[i].checked = true
        } else {
          target[i].checked = false
        }
      }
    },
    moveToHome() {
      const pathItem = this.authList.filter((item) => item.checked)[0]
      this.$store.commit('userInfo/setUserIdentity', pathItem.account)
      this.$router.push(pathItem.path)
    },
  },
}
</script>

<style scoped></style>
