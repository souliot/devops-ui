<template>
  <div class="p-4 host-page">
    <List :grid="grid" :data-source="data.List" ref="listDragRef" :row-key="rowKey">
      <template #renderItem="{ item }">
        <ListItem>
          <Card class="card-dragged" size="small" :hoverable="hoverable">
            <template #title>{{ item.Host }}</template>
            <Description
              :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
              :column="2"
              :data="item"
              :schema="schema"
            />
          </Card>
        </ListItem>
      </template>
    </List>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, unref, onMounted, UnwrapRef, nextTick } from 'vue';
  import { List, Card } from 'ant-design-vue';
  import { isNullAndUnDef } from '/@/utils/is';
  import { useSortable } from '/@/hooks/web/useSortable';
  import { getHostList } from '/@/api/devops/host';
  import { HostInfo } from '/@/api/devops/model/hostModel';
  import { Description } from '/@/components/Description/index';
  import { schema } from './data';
  interface IData {
    List: HostInfo[];
  }
  export default defineComponent({
    name: 'HostIndex',
    components: { List, Card, ListItem: List.Item, Description },
    setup() {
      const hoverable = ref(true);
      let data: UnwrapRef<IData> = reactive({
        List: [],
      });
      const listDragRef = ref<ComponentRef>(null);
      function initDrag() {
        nextTick(() => {
          const listDragEL = unref(listDragRef);
          if (!listDragEL) return;
          const el = listDragEL.$el.children
            .item(0)
            ?.querySelector('.ant-spin-nested-loading .ant-spin-container .ant-row')
            ?.children.item(0)?.parentElement;
          if (!el) return;
          const { initSortable } = useSortable(el, {
            handle: '.card-dragged .ant-card-head',
            onEnd: (evt) => {
              const { oldIndex, newIndex } = evt;
              if (isNullAndUnDef(oldIndex) || isNullAndUnDef(newIndex) || oldIndex === newIndex) {
                return;
              }

              if (oldIndex > newIndex) {
                data.List.splice(newIndex, 0, data.List[oldIndex]);
                data.List.splice(oldIndex + 1, 1);
              } else {
                data.List.splice(newIndex + 1, 0, data.List[oldIndex]);
                data.List.splice(oldIndex, 1);
              }
            },
          });
          initSortable();
        });
      }
      onMounted(() => {
        getHostList().then((res) => {
          data.List = res.lists;
          initDrag();
        });
      });
      const grid = reactive({ gutter: 8, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4, column: 3 });

      function rowKey(item: HostInfo) {
        return item.Host;
      }
      return {
        grid,
        data,
        rowKey,
        schema,
        hoverable,
        listDragRef,
      };
    },
  });
</script>

<style lang="less">
  .host-page {
    .ant-card-body {
      padding: 0 !important;
    }
  }
</style>
