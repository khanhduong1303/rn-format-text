import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const FormatText = ({ sources, formats, replaces, props }) => {
  const TextComponent = props.TextComponent || Text;
  if (!sources) return null;
  let _sources = sources;
  if (replaces) {
    Object.keys(replaces).forEach((key) => {
      _sources = _sources.replace(key, replaces[key]);
    });
  }

  const formatArr = formats || [];
  return (
    <TextComponent {...props}>
      {_sources
        .split("{c}")
        .filter((_) => !!_)
        .map((s, i) => {
          const _format = formatArr[i];
          if (_format)
            return (
              <TextComponent key={`$text-${i}`} {..._format}>
                {s}
              </TextComponent>
            );
          return s?.replace(/{n}/g, "\n");
        })}
    </TextComponent>
  );
};
FormatText.propTypes = {
  sources: PropTypes.string,
  formats: PropTypes.array,
  replaces: PropTypes.object,
  props: PropTypes.object,
};
FormatText.defaultProps = {};

export default FormatText;
