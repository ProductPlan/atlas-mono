import React from "react";
import PropTypes from "prop-types";

if (globalThis?.customElements) {
  import("@productplan/atlas-web-components/dist/lib/BasicButton.js");
}

const buttonHtmlTypes = ["button", "submit", "reset"];
export const buttonVariants = ["default", "secondary", "ghost"];

/** A Basic Button */
export default function BasicButton({
  label,
  htmlType = "button",
  type = "default",
  onClick,
  trailingIcon,
  leadingIcon,
}) {
  return (
    <atlas-basic-button
      label={label}
      theme={type}
      onClick={onClick}
      type={htmlType}
    >
      {leadingIcon && <span slot="leadingIcon">{leadingIcon}</span>}
      {trailingIcon && <span slot="trailingIcon">{trailingIcon}</span>}
    </atlas-basic-button>
  );
}

BasicButton.propTypes = {
  /** Text to display in the button */
  label: PropTypes.string.isRequired,
  /** html type attribute, one of button, submit, or reset */
  htmlType: PropTypes.oneOf(buttonHtmlTypes),
  /** one of default, secondary, ghost */
  type: PropTypes.oneOf(buttonVariants),
  /** Click Handler */
  onClick: PropTypes.func,
  /** icon to display to the right of the label */
  trailingIcon: PropTypes.element,
  /** icon to display to the left of the label */
  leadingIcon: PropTypes.element,
};
