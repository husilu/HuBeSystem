import { modelUtils } from '@/components/cpt-tool';

const fields = [
  {
    key: 'orderNo',
    title: '订单编号'
  }
];

export const fwgkDefaults = modelUtils.getDefaults(fields);
export const columns = modelUtils.getColumns(fields);
export const defaults = modelUtils.getDefaults(fields);
