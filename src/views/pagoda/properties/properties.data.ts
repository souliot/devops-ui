import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { getComponentList } from '/@/api/pagoda/component';
export const columns: BasicColumn[] = [
  {
    title: '变量名',
    dataIndex: 'variable',
    width: 160,
  },
  {
    title: '变量类型',
    dataIndex: 'type',
    width: 160,
  },
  {
    title: '是否必须',
    dataIndex: 'required',
    width: 160,
    slots: { customRender: 'required' },
  },
  {
    title: '默认值',
    dataIndex: 'default',
  },
  {
    title: '备注',
    dataIndex: 'description',
  },
  {
    title: 'id',
    dataIndex: 'meta_component.id',
  },
];

export const propertiesFormSchema: FormSchema[] = [
  {
    field: 'meta_component.id',
    label: `所属组件`,
    component: 'Input',
    // componentProps: {
    //   api: getComponentList,
    //   resultField: 'lists',
    //   labelField: 'name',
    //   valueField: 'id',
    //   extLabel: ['version'],
    // },
    required: true,
  },
  {
    field: 'variable',
    label: '变量名',
    component: 'Input',
    required: true,
  },
  {
    field: 'type',
    label: '变量类型',
    component: 'Input',
    required: true,
  },
  {
    field: 'required',
    label: '是否必须',
    component: 'Switch',
    required: true,
    componentProps: {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
  },
  {
    field: 'default',
    label: '默认值',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '备注',
    component: 'InputTextArea',
  },
];

export function getFromConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `meta_component_id`,
        label: `组件名称`,
        component: 'ApiSelect',
        componentProps: {
          api: getComponentList,
          resultField: 'lists',
          labelField: 'name',
          valueField: 'id',
          extLabel: ['version'],
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
