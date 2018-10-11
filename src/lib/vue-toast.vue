<template>
  <section class="toast-container" :class="[visible ? 'fade-in' : 'fade-out']">
    <div class="toast">
      <span>{{ message }}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      visible: false
    }
  }
}
</script>
<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fade0ut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
.toast-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast {
  width: 180px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  opacity: 0.61;
}
.fade-in {
  animation: fadeIn all 0.3s;
}
.fade-out {
  animation: fadeOut all 0.3s;
}
</style>