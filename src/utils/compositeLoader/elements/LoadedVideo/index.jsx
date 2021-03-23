import { useResource } from "utils/compositeLoader";

export default function LoadedVideo({ resource, ...rest }) {
  const rsx = useResource(resource);

  if (!rsx) {
    return null;
  }

  return (
    <video {...rest}>
      <source src={rsx} type="video/mp4" />
    </video>
  );
}
