<template>
    <comment-verify :news-id="id"></comment-verify>
</template>

<script>
  import commentVerify from '@/views/workbench/commentVerify'

    export default {
      components: {
        commentVerify
      },
      props: {
        id: Number
      }
    }
</script>
