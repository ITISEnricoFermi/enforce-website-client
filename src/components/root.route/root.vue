<template>
  <main>
    <!-- <app-header></app-header> -->
    <!-- <app-section-team></app-section-team> -->
    <app-section-project></app-section-project>
    <app-section-targets></app-section-targets>
    <!-- <app-section-software></app-section-software> -->
    <app-section-live></app-section-live>
    <app-footer></app-footer>
  </main>
</template>

<script>

import Header from './header'
import Footer from './footer'
import SectionTeam from './sections/team'
import SectionProject from './sections/project'
import SectionTargets from './sections/targets'
import SectionSoftware from './sections/software'
import SectionLive from './sections/live'

export default {
  name: 'root',
  data: () => {
    return {

    }
  },
  sockets: {
    data (data) {
      console.log(data)
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appSectionTeam: SectionTeam,
    appSectionProject: SectionProject,
    appSectionTargets: SectionTargets,
    appSectionSoftware: SectionSoftware,
    appSectionLive: SectionLive
  }
}
</script>

<style lang="scss">
</style>
