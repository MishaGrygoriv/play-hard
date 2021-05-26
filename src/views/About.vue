<template>
  <div class="about">
    <!-- <div class="page-art">
      <div
        class="page-art__colored"
        :style="{
          zIndex: `1`,
          height: `800px`,
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),url(https://in-rating.ru/space/wp-content/uploads/2020/09/Assassins-Creed-Valhalla-Wallpaper-05-1200.jpg)`,
        }"
      ></div>
    </div> -->
    <div class="about__wrapper">
      <h1 class="about__title about__white">ABOUT PLAY HARD</h1>
      <h2 class="about__subtitle about__white">Corporate Headquarters</h2>
      <h2 class="about__subtitle about__white">Ivano-Frankivsk, Ukraine</h2>
      <p class="about__description">
        Founded in 1991, Play Hard is an Ukrainian company founded by CEO Vasyl
        Hutsul. The company is headquartered in Ivano-Frankivsk and has more
        than 40 offices worldwide. Today Play Hard is a leading interactive
        entertainment company and provider of 3D engine technology. Play Hard
        operates Fortnite, one of the world’s largest games with over 350
        million accounts and 2.5 billion friend connections. Play Hard also
        develops Unreal Engine, which powers the world’s leading games and is
        also adopted across industries such as film and television,
        architecture, automotive, manufacturing, and simulation. Through Unreal
        Engine, Epic Games Store, and Epic Online Services, Epic provides an
        end-to-end digital ecosystem for developers and creators to build,
        distribute, and operate games and other content.
      </p>
      <h2 class="about__second-title about__white">Contact</h2>
      <div class="about__adress">
        <span>Play Hard, Inc. </span>
        <span> 125 Chornovola Street.</span>
        <span> Ivano-Frankivsk, UKRAINE</span>
        <span> Tel +38 099 854 0070</span>
      </div>
      <h2 class="about__second-title about__white">
        Frequently Asked Questions
      </h2>
      <h3 class="about__second-subtitle about__white">
        Can I have a studio tour?
      </h3>
      <p class="about__description ">
        We do not offer studio tours as a general policy. While we would love to
        give you the full Epic experience, we’re committed to providing the most
        conducive working environment for our folks so they can stay focused and
        keep making great games and technology.
      </p>
      <h3 class="about__second-subtitle about__white">
        Does Epic have any job openings?
      </h3>
      <p class="about__description ">
        Yes! Our current openings will be posted on our career portal. Once
        registered, you may apply for open positions and/or submit your resume.
        For an overview of Epic and our benefits, visit our careers page.
      </p>
      <h3 class="about__second-subtitle about__white">
        Where can I access your games?
      </h3>
      <p class="about__description ">
        Download our games and more for free. The download button for the Epic
        Games launcher is in the top right corner of this page. Legacy titles
        such as Unreal Tournament 3 Black, Unreal Tournament 2004 ECE, Unreal
        Tournament GOTY and The Unreal Deal Pack are also available on Steam.
      </p>
      <h3 class="about__second-subtitle about__white">
        What about Gears of War?
      </h3>
      <p class="about__description ">
        Microsoft purchased the Gears of War IP from Epic Games, and they own
        the franchise now. For the Gears of War series, contact Xbox Support.
      </p>
      <h3 class="about__second-subtitle about__white">
        Can I make a fan site based on your game?
      </h3>
      <p class="about__description ">
        We’d love for you to do this! We just ask that you follow our Fan Art
        and Fan site policy.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="scss">
// .page-art {
//   position: absolute;
//   top: 121px;
//   left: 0;
//   width: 100%;
//   height: 92.5%;
//   background-color: #151515;
//   &__colored {
//     max-height: 100%;
//     background-size: cover;
//     width: 100%;
//     height: 100%;
//     background: no-repeat top;
//     background-size: cover;
//   }
// }
.about {
  padding: 50px 0;
  &__white {
    color: $light-color;
  }
  &__adress {
    @include flex(start, start, column);
    margin-bottom: 20px;
    color: $text-color;
  }
  &__description {
    color: $text-color;
  }
}
</style>
