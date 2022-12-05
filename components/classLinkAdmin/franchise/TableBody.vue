<template>
  <tbody>
    <tr v-for="(item, idx) in franchiseList" :key="idx">
      <td>{{ item.id }}</td>
      <td>{{ item.createdAt }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.owner }}</td>
      <BuildingList :itemInfo="item" />
      <td>{{ item.status === 1 ? '활동' : '비활동' }}</td>
      <td>
        <i
          class="btn icons_zoom_off"
          data-toggle="modal"
          data-target="#modalViewDetail"
          @click="$emit('select-fran', item)"
        ></i>
      </td>
      <td>
        <i class="btn icons_mu_off more_mu ac_build" @click="showMenu(idx)">
          <div
            :ref="`more_menu_${idx}`"
            class="more_list"
            style="display: none"
          >
            <MoreMenu
              :item="item"
              @select-fran="$emit('select-fran', $event)"
              @change-franchise="setChangeFranchise"
            />
          </div>
        </i>
      </td>
    </tr>
  </tbody>
</template>

<script>
import MoreMenu from '../common/MoreMenu.vue'
import BuildingList from './BuildingList.vue'

export default {
  name: 'TableBody',
  components: { MoreMenu, BuildingList },
  props: {
    franchiseList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    showMenu(idx) {
      const target = this.$refs[`more_menu_${idx}`]
      const isNone = target[0].style.display === 'none'
      if (isNone) {
        for (const i in this.franchiseList) {
          this.$refs[`more_menu_${i}`][0].style.display = 'none'
        }
        target[0].style.display = 'block'
      } else {
        target[0].style.display = 'none'
      }
    },
    setChangeFranchise(e, idx) {
      this.$emit('change-franchise', e, idx)
    },
  },
}
</script>

<style></style>
