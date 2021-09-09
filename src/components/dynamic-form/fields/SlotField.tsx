export default function SlotField({ ...extraProps }) {
  const { diyRender, ...restProps } = extraProps;
  return diyRender({ ...restProps });
}
