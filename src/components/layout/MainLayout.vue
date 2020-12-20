<template>
    <div class="main-layout">
<div class="header">
    <h2 class="test">Header</h2>
</div>
<div class="main-content">
<slot/>
</div>
<div class="footer">
    <h2 class="test2">Footer</h2>
</div>
    </div>
</template>
<script>

    export default {
name: 'MainLayout',
    };
</script>
<style lang="scss">
.header {
    background-color: red;
}
main-content {
    background-color: green;
}
.footer {
    background-color: yellow;
}
</style>