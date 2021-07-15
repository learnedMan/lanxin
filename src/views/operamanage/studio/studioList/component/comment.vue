<template>
    <comment-verify :news-id="`${uuid}`"></comment-verify>
</template>

<script>
  import commentVerify from '@/views/workbench/commentVerify'

    export default {
      components: {
        commentVerify
      },
      props: {
        uuid: String
      }
    }
</script>
