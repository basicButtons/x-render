import map from './map';
import { InputNumber, Checkbox, Input, Switch, Rate, TreeSelect } from 'antd';
import ImageInput from './imageInput';
import urlInput from './urlInput';
import Html from './html';
import select from './select';
import checkboxes from './checkboxes';
import multiSelect from './multiSelect';
import radio from './radio';
import time from './time';
import date from './date';
import dateRange from './dateRange';
import timeRange from './timeRange';
import color from './color';
import slider from './slider';
import upload from './upload';
import SimpleList from './list/SimpleList';
import CardList from './list/CardList';
import TableList from './list/TableList';
import DrawerList from './list/DrawerList';
import VirtualList from './list/VirtualList';
import TabList from './list/TabList';

// const Cascader = React.lazy(() => import('antd/es/cascader'));

const { TextArea } = Input;

const FrNumber = ({ style, ...rest }) => {
  return <InputNumber style={{ width: '100%', ...style }} {...rest} />;
};

const FrTextArea = ({ autoSize, ...rest }) => {
  return <TextArea autoSize={autoSize ? autoSize : { minRows: 3 }} {...rest} />;
};

const FrTreeSelect = ({ style, ...rest }) => (
  <TreeSelect style={{ width: '100%', ...style }} {...rest} />
);

// const FrCascader = ({ style, ...rest }) => (
//   <Cascader style={{ width: '100%', ...style }} {...rest} />
// );

export const widgets = {
  input: Input,
  checkbox: Checkbox,
  checkboxes, // checkbox多选
  color,
  date,
  time,
  dateRange,
  timeRange,
  imageInput: ImageInput,
  url: urlInput,
  list0: CardList,
  cardList: CardList,
  list1: SimpleList,
  simpleList: SimpleList,
  list2: TableList,
  tableList: TableList,
  list3: DrawerList,
  drawerList: DrawerList,
  list4: VirtualList,
  virtualList: VirtualList,
  tabList: TabList,
  map,
  multiSelect, // 下拉多选
  number: FrNumber,
  radio,
  select,
  slider, // 带滚条的number
  switch: Switch,
  textarea: FrTextArea,
  upload,
  html: Html,
  rate: Rate,
  treeSelect: FrTreeSelect,
  // cascader: FrCascader,
};

export const defaultWidgetNameList = Object.keys(widgets);
