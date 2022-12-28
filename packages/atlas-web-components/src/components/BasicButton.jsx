import { define } from 'preactement';
import styles from "./BasicButton.scss";
import "redefine-custom-elements";

const BasicButton = ({
  align = "center",
  disabled = undefined,
  htmlId = undefined,
  label = "",
  leadingIcon = null,
  size = "default",
  theme = "default",
  trailingIcon = null,
  type = "button",
}) => {
  return (
    <>
      <style>{styles}</style>
      <button
        className={`BasicButton BasicButton--${theme} BasicButton--size-${size} BasicButton--align-${align}`}
        type={type}
        htmlId={htmlId}
        disabled={disabled}
        size={size}
      >
        {leadingIcon && <span className="leadingIcon">{leadingIcon}</span>}
        {label}
        {trailingIcon && <span className="trailingIcon">{trailingIcon}</span>}
      </button>
    </>
  );
};

define('atlas-basic-button', () => BasicButton, { attributes: ['align', 'disabled', 'htmlId', 'label', 'size', 'theme', 'type']})
