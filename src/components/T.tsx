import React from "react";
import { useI18n } from "@/contexts/I18nContext";

/**
 * A component that wraps text content and translates it.
 * Usage: <T>Hello World</T>
 */
export const T: React.FC<{ children: string; as?: keyof JSX.IntrinsicElements; className?: string }> = ({
  children,
  as: Tag,
  className,
}) => {
  const { t } = useI18n();
  const translated = t(children);

  if (Tag) {
    return <Tag className={className}>{translated}</Tag>;
  }

  return <>{translated}</>;
};
