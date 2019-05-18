<template>
  <v-layout justify-center align-center>
    <file-upload
    ref="upload"
    v-model="files"
    accept=".ipa,.apk"
    post-action="http://localhost:9090/upload"
    :drop="true"
    @input-file="inputFile"
    @input-filter="inputFilter"
  >
  <v-btn
    large
    color="info"
    class="white--text"
    >
      上传应用
      <v-icon right dark>cloud_upload</v-icon>
    </v-btn>
  </file-upload>
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
    files: [],
    snackbar: false,
    dropzoneOptions: {
      url: 'https://xb.net',
      acceptedFiles: '.ipa,.apk',
      dictDefaultMessage: '<v-icon>clound upload</v-icon>上传应用'
    }
  }),
  methods: {
    // 过滤文件
    inputFilter(newFile, oldFile, prevent) {
      if (!/\.(ipa|apk)$/.test(newFile.name)) {
        this.snackbar = true
        return prevent()
      }
      console.log('filter=================', newFile)
      // if (newFile)
    },
    inputFile (newFile, oldFile) {
      this.$refs.upload.active = true
    },
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
