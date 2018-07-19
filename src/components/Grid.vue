<template>
    <div class="grid">
        <div v-if="isLoading"
             class="loading">
            Loading...
        </div>

        <metric v-if="!isLoading"
                class="widget phone-3-col tablet-2-col desktop-1-col"
                :value="transactions.value"
                label="transactions"/>

        <metric v-if="!isLoading"
                class="widget phone-3-col tablet-2-col desktop-1-col"
                :value="weather.value"
                label="weather"/>

        <metric
                v-if="!isLoading"
                class="widget phone-3-col tablet-2-col desktop-1-col"
                :value="responsiveness.value"
                label="responsiveness"
        />

        <metric
                v-if="!isLoading"
                class="widget phone-3-col tablet-2-col desktop-1-col"
                :value="events.value"
                label="events"
        />

        <metric
                v-if="!isLoading"
                class="widget phone-3-col tablet-2-col desktop-1-col"
                :value="hits.value"
                label="hits"
        />

        <metric
                v-if="!isLoading"
                class="widget phone-3-col tablet-2-col desktop-1-col"
                :value="convertion.value"
                label="convertion"
        />

        <chart-svg
                v-if="!isLoading"
                class="widget phone-6-col tablet-3-col desktop-3-col"
                title="javascript frameworks"
                :range="jsFrameworks.range"
                :values="jsFrameworks.values"
                :labels="jsFrameworks.labels"
        />

        <chart-svg
                v-if="!isLoading"
                class="widget phone-6-col tablet-3-col desktop-3-col"
                title="top wines"
                :range="topWines.range"
                :values="topWines.values"
                :labels="topWines.labels"
        />
        <map-3d v-if="!isLoading"
                class="widget phone-6-col tablet-6-col desktop-6-col"
                title="three.js map"/>
    </div>
</template>

<script>
import metric from './grid/WidgetMetric'
import WidgetChartSVG from './grid/WidgetChartSVG'
import WidgetMap3D from './grid/WidgetMap3D'
import { mapGetters } from 'vuex'

export default {
  name: 'Grid',
  computed: {
    ...mapGetters({
        'isLoading': 'widgets/isLoading',
        'transactions': 'widgets/transactions',
        'convertion': 'widgets/convertion',
        'hits': 'widgets/hits',
        'events': 'widgets/events',
        'responsiveness': 'widgets/responsiveness',
        'weather': 'widgets/weather',
        'jsFrameworks': 'widgets/jsFrameworks',
        'topWines': 'widgets/topWines',
    })
  },
  components: {
      metric,
      'chart-svg': WidgetChartSVG,
      'map-3d': WidgetMap3D,
  },
  mounted() {
    this.$store.dispatch('widgets/loadDashboardData')
  }
}
</script>

<style lang="stylus">
  @import  "./../styles/mixins.styl";
  @import  "./../styles/variables.styl";
  .grid
      .widget
          width auto
          display flex
          justify-content center
          align-items center
          text-align center
          flex-basis auto
          margin 10px 1% 0 1%
          width calc(25% - 2%)
          min-height: 75px
          background: #303030
      .loading
          width: 100%
          color: white
          min-height: 120px
          display: flex
          justify-content: center
          align-items: center

      background #1d1e1e
      padding-bottom 10px
      display flex
      justify-content space-evenly
      align-items stretch
      flex-wrap wrap
      @media (min-width: $nav-max-width)
          .desktop-1-col
              flex-size(1, 1%)
          .desktop-2-col
              flex-size(2, 1%)
          .desktop-3-col
              flex-size(3, 1%)
          .desktop-4-col
              flex-size(4, 1%)
          .desktop-5-col
              flex-size(5, 1%)
          .desktop-6-col
              flex-size(6, 1%)
      @media (max-width: $nav-max-width)
          .tablet-1-col
              flex-size(1, 1%)
          .tablet-2-col
              flex-size(2, 1%)
          .tablet-3-col
              flex-size(3, 1%)
          .tablet-4-col
              flex-size(4, 1%)
          .tablet-5-col
              flex-size(5, 1%)
          .tablet-6-col
              flex-size(6, 1%)
      @media (max-width: $mobile-size)
          .phone-1-col
              flex-size(1, 1%)
          .phone-2-col
              flex-size(2, 1%)
          .phone-3-col
              flex-size(3, 1%)
          .phone-4-col
              flex-size(4, 1%)
          .phone-5-col
              flex-size(5, 1%)
          .phone-6-col
              flex-size(6, 1%)

      .no-gutters
          [class*='desktop-'], [class*='tablet-'], [class*='phone-']
              margin: 0 0 10px 0
      .relaxed-gutters
          [class*='desktop-'], [class*='tablet-'], [class*='phone-']
              margin: 0 1% 10px 1%
      @media (max-width: $mobile-size)
          .relaxed-gutters
              six-columns-layout(phone, 2%)


</style>
