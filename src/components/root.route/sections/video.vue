<template>
  <section class="section-video">
    <div class="content">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/hrHDRaYYsE8?showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    let video = document.querySelector('.video')
    video.style.height = (video.offsetWidth * 9) / 16 + 'px'
  }
}
</script>

<style scoped lang="scss">
.section-video {
  background-image: linear-gradient(to left bottom, #071930, $color-blue-1);
  padding: 10rem;
  height: 100vh;
  position: relative;

  @include respond(tab-lan) {
    padding: 5rem;
    height: auto;
  }

  .content {
    height: 100%;
    position: relative;

    .video {
      width: 75%;
      margin: 0 auto;

      @include respond(tab-lan) {
        width: 100%;
      }

      iframe {
        height: 100%;
        width: 100%;
      }
    }

  }
}
</style>
