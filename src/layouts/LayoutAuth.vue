<template>
  <div
    functional
    class="layout-auth"
  >
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.layout-auth {
  height: 100%;
  background: $gradient-linear;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    max-width: 316px;
    text-align: center;

    h1 {
      color: $primary;
      text-transform: uppercase;
    }

    form {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      input {
        background: rgba(0, 0, 0, 0.15);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }

      > span {
        margin-bottom: 10px;
        align-self: flex-start;
        color: $danger;
      }

      button {
        margin: 5px 0 0;
        height: 44px;
        background: $primary;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: $primary-dark;
        }
      }

      a {
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

</style>
