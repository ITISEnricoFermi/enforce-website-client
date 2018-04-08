<template>
  <main>
    <app-header></app-header>
    <app-section-project></app-section-project>
    <app-section-targets></app-section-targets>
    <app-section-software></app-section-software>
  </main>
</template>

<script>

import Header from './header'
import SectionProject from './sections/project'
import SectionTargets from './sections/targets'
import SectionSoftware from './sections/software'

export default {
  name: 'root',
  data: () => {
    return {

    }
  },
  components: {
    appHeader: Header,
    appSectionProject: SectionProject,
    appSectionTargets: SectionTargets,
    appSectionSoftware: SectionSoftware
  }
}
</script>

<style lang="scss">
</style>
