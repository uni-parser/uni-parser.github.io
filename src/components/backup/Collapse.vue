<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div>

    <el-divider />

    <!-- 标题 -->
    <el-row justify="center">
        <h1 class="section-title">{{ t('collapse.title') }}</h1>
    </el-row>

    <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">

            <!-- 折叠列表 -->
            <el-collapse model-value="1" class="collapse" accordion >

                <!-- 第一个折叠列表信息 -->
                <el-collapse-item :title="t('collapse.consistency')" name="1">
                    <div>
                        {{ t('collapse.consistency_detail') }}
                    </div>
                </el-collapse-item>

                <el-collapse-item :title="t('collapse.feedback')" name="2">
                    <div>
                        {{ t('collapse.feedback_detail') }}
                    </div>
                </el-collapse-item>

                <el-collapse-item :title="t('collapse.efficiency')" name="3">
                    <div>
                        {{ t('collapse.efficiency_detail') }}
                    </div>
                </el-collapse-item>

                <el-collapse-item :title="t('collapse.controllability')" name="4">
                    <div>
                        {{ t('collapse.controllability_detail') }}
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-col>
    </el-row>

  </div>
</template>
  
<style scoped>
.collapse {
    margin-top: 20px;
}
</style>
