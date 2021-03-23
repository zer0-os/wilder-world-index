import { useResource } from "utils/compositeLoader";

export default function LoadedImage({ resource, ...rest }) {
  const rsx = useResource(resource);

  if (!rsx) {
    return null;
  }

  return <img src={rsx} {...rest} />;
}
