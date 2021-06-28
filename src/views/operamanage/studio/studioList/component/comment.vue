<template>
    <comment-verify :news-id="`${newId}`"></comment-verify>
</template>

<script>
  import commentVerify from '@/views/workbench/commentVerify'

    export default {
      components: {
        commentVerify
      },
      props: {
        newId: Number
      }
    }
</script>
