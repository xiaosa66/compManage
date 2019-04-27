<template>
    <div>
        <head-top></head-top>
        <div class="edit_container">
            <el-form ref="form" :model="postData" label-width="80px">
                <el-form-item label="新闻标题">
                    <el-input v-model="postData.title"></el-input>

                </el-form-item>
                <el-form-item label="您的署名">
                    <el-input v-model="postData.name"></el-input>
                </el-form-item>
            </el-form>
            <quill-editor v-model="postData.content"
                          ref="myQuillEditor"
                          class="editer"
                          :options="editorOption"
                          @ready="onEditorReady($event)">
            </quill-editor>

        </div>
        <div class="submit_btn">
            <el-button type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {quillEditor} from 'vue-quill-editor'
    import {postPosts} from '@/api/getData'

    export default {
        data() {
            return {
                postData: {
                    content: '<h3>文本编辑</h3>',
                    name: '',
                    title: '',
                },

                editorOption: {}
            }
        },
        components: {
            headTop,
            quillEditor,
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        methods: {
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            async submit() {
                console.log(this.postData);
                const result = await postPosts(this.postData);
                if (result.code = 1) {
                    this.$message.success('提交成功！');
                }

                this.$message.success('提交成功！');
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .edit_container {
        padding: 40px;
        margin-bottom: 40px;
    }

    .editer {
        height: 350px;
    }

    .submit_btn {
        text-align: center;
    }
</style>
