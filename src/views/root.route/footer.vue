<template>
<footer class="footer">
  <div class="content">
    <div class="left">
      <p class="heading">Enforce Team</p>
      <div class="body">
        <img src="logo/itisFermi_white.svg" alt="ITIS Enrico Fermi, Roma" class="logo">
      </div>
    </div>
    <div class="right">
      <p class="heading">Info</p>
      <div class="body">
        <a href="https://goo.gl/maps/DqqYAzaxHb42" target="_blank" class="info">
          <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
          <span class="text">
            <span class="crop">ITIS Enrico Fermi / Via Trionfale 8737 - 00135</span>
            <span class="keep">Roma (RM)</span>
          </span>
        </a>
        <a href="https://www.facebook.com/EnforceTeam/" target="_blank" class="info">
          <span class="icon"><i class="fab fa-facebook-f"></i></span>
          <span class="text">@EnforceTeam</span>
        </a>
        <a href="https://github.com/ITISEnricoFermi" target="_blank" class="info">
          <span class="icon"><i class="fab fa-github"></i></span>
          <span class="text">@ITISEnricoFermi</span>
        </a>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
    position: relative;
    padding: 10rem;

    @include respond(phone) {
        padding: 5rem;
    }

    .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex: 1 auto;

        @include respond(tab-lan) {
            flex-direction: column;
        }

        .heading {
          color: $color-white;
          font-size: 2.5rem;
          text-align: left;
          margin-bottom: 2rem;
        }

        .left {
            // display: flex;
            // justify-content: center;
            // align-items: center;
            width: 50%;
            @include respond(tab-lan) {
                margin-bottom: 2rem;
                width: 100%;
            }

            .body {
              .logo {
                  height: 8vh;
              }
            }

        }

        .right {
            width: 50%;
            text-align: right;

            @include respond(tab-lan) {
                width: 100%;
            }

            .body {
              width: 100%;

              .info {
                  color: $color-white;
                  text-align: left;
                  display: block;
                  margin: 2rem 0;
                  text-decoration: none;

                  .icon {
                      padding: 1rem;
                      display: inline-block;
                      width: 5rem;
                      text-align: center;
                      background-color: $color-black;
                  }

                  .text {
                      background-color: $color-white-light-1;
                      display: inline-block;
                      color: $color-black;
                      padding: 1rem;

                      .crop {

                        @include respond(tab-lan) {
                          display: none;
                        }

                      }
                  }

              }

            }

        }

    }

}
</style>
