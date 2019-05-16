<template>
  <v-layout justify-center align-center>
    <vue-dropzone
    :options="dropzoneOptions"
    :useCustomSlot="true"
    id="drop"
    class="upload-dropzone"
    @vdropzone-sending="sending"
    @vdropzone-file-added="add"
    @vdropzone-processing="processing"
    @vdropzone-drop="drop"
    >
      <v-container
        md4
        align-center
        justify-center
      class="info--text"
    >
      <v-icon right color="info" :style="{fontSize: '40px'}">cloud_upload</v-icon>
      <span class="ml-2 headline font-weight-bold">上传应用</span>
    </v-container>
    </vue-dropzone>
        <v-snackbar
      v-model="snackbar"
      color="error"
      :timeout="6000"
      top
    >
      请上传 APK、IPA文件
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>
<script>
import vueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: {
    vueDropzone
  },
  data: () => ({
    snackbar: false,
    dropzoneOptions: {
      url: 'https://xb.net',
      acceptedFiles: '.ipa,.apk',
      dictDefaultMessage: '<v-icon>clound upload</v-icon>上传应用'
    }
  }),
  methods: {
    upload () {
      this.$refs.uploadInput.click()
    },
    sending (file) {
      console.log('==========', file)
    },
    add (file) {
      if (file.type !== 'application/vnd.android.package-archive') {
        this.snackbar = true
        return false
      }
      console.log('===============', file)
    },
    processing (file) {
      return false
    },
    drop (event) {
      debugger
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-dropzone {
  &.dropzone {
    flex: 1;
  }
}
</style>
