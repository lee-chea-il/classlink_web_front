<template>
  <div class="form-group row">
    <label for="" class="data_title">키워드</label>
    <div id="inputBox" class="col">
      <ValidationProvider v-slot="{ errors }" :rules="rules">
        <input
          id="keyword"
          class="form-control"
          name="keyword"
          placeholder="입력"
          :value="pushKeyword"
          @input="$emit('change-keyword', $event)"
          @keyup.enter="$emit('set-keyword', $event)"
        />
        <div v-show="keyword?.length" class="keyword_area_01">
          <span v-for="(item, idx) in keyword" :key="idx" class="keyword01">
            <span class="keyword01-1">{{ item }}</span
            ><span class="x span" @click="$emit('delete-keyword', idx)"></span>
          </span>
        </div>
        <span v-show="!keyword?.length" class="info"
          >키워드는 엔터로 구분할 수 있습니다</span
        ><br v-show="!keyword?.length" />
        <span v-show="keyword?.length > 10" class="info"
          >키워드는 10개까지 입력 가능합니다.</span
        ><br v-show="keyword?.length > 10" />
        <span class="info">{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'CustomKeywordBox',
  components: { ValidationProvider },
  props: {
    pushKeyword: {
      type: String,
      default: '',
    },
    keyword: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
#modalLessonRegi .x {
  cursor: pointer;
}
</style>
