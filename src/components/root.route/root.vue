<template>
<main>
  <!-- <full-page :options="options"> -->
    <!-- <app-header></app-header> -->
    <!-- <app-section-team></app-section-team> -->
    <app-section-project></app-section-project>
    <!-- <app-section-team></app-section-team> -->
    <app-section-targets></app-section-targets>
    <!-- <app-section-software></app-section-software> -->
    <app-section-live></app-section-live>
    <!-- <app-section-video></app-section-video> -->
    <app-footer></app-footer>
  <!-- </full-page> -->
</main>
</template>

<script>
import Header from './header'
import Footer from './footer'
import SectionTeam from './sections/team.section'
import SectionProject from './sections/project.section'
import SectionTargets from './sections/targets.section'
import SectionSoftware from './sections/software.section'
import SectionLive from './sections/live.section'
import SectionVideo from './sections/video.section'

// import {
//   FullPage
// } from 'FullPage'

export default {
  name: 'root',
  data: () => {
    return {
      options: {
        paddingTop: '30px'
      }
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appSectionTeam: SectionTeam,
    appSectionProject: SectionProject,
    appSectionTargets: SectionTargets,
    appSectionSoftware: SectionSoftware,
    appSectionLive: SectionLive,
    appSectionVideo: SectionVideo
    // appFullPage: FullPage
  }
}
</script>

<style lang="scss">
.smoothie-chart-tooltip {
    background: #444;
    padding: 1em;
    margin-top: 20px;
    font-family: 'Roboto';
    color: white;
    font-size: 10px;
    pointer-events: none;
}
</style>
