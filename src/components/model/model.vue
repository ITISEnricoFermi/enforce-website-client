<template>
  <div class="model" id="model"></div>
</template>

<script>
import { eventBus } from "@/main";

import ModelViewer from "@/../public/js/model.js";
import * as THREE from "three";

export default {
  mounted() {
    const model = new ModelViewer(THREE, "model");

    window.addEventListener("resize", () => {
      model.updateSize();
    });

    eventBus.$on("orientation", (orientation) => {
      model.setRotation(JSON.parse(orientation));
    });
  },
};
</script>

<style scoped lang="scss">
.model {
  height: 100%;
  width: 100%;
  border-radius: 0.25rem;

  canvas {
    border-radius: 0.25rem;
  }
}
</style>
